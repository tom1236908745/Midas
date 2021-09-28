<template>
  <v-container>
    <v-row justify="center">
      <v-col sm="12" md="5">
        <h2 class="text-center subtitle-1 font-weight-bold mb-2">
          メールアドレスで登録
        </h2>
        <v-row>
          <v-col>
            <v-tabs
              v-model="tab"
              background-color="transparent"
              color="blue accent-2"
              grow
              class="mb-3"
            >
              <v-tab to="/login">ログイン</v-tab>
              <v-tab to="/register">アカウント登録</v-tab>
            </v-tabs>

            <v-row>
              <v-col sm="12">
                <v-card flat>
                  <v-card-text class="pa-0">
                    <v-form
                      ref="register_form"
                      v-model="registerValid"
                      lazy-validation
                    >
                      <v-text-field
                        v-model="registerEmail"
                        label="メールアドレス"
                        :rules="emailRules"
                        required
                        validate-on-blur
                      />

                      <v-text-field
                        ref="registerPassword"
                        v-model="registerPassword"
                        label="パスワード"
                        required
                        :append-icon="
                          showRegisterPassword ? 'mdi-eye' : 'mdi-eye-off'
                        "
                        :type="showRegisterPassword ? 'text' : 'password'"
                        :rules="registerPasswordRules"
                        validate-on-blur
                        loading
                        @click:append="
                          showRegisterPassword = !showRegisterPassword
                        "
                      >
                        <template v-slot:progress>
                          <v-progress-linear
                            :value="score.value"
                            :color="score.color"
                            absolute
                            height="2"
                          />
                        </template>
                      </v-text-field>
                      <v-text-field
                        v-model="registerPasswordAgain"
                        label="パスワード（確認）"
                        required
                        :append-icon="
                          showRegisterPassword ? 'mdi-eye' : 'mdi-eye-off'
                        "
                        :type="showRegisterPassword ? 'text' : 'password'"
                        validate-on-blur
                        :rules="registerPasswordAgainRules"
                        @click:append="
                          showRegisterPassword = !showRegisterPassword
                        "
                      />

                      <v-alert v-if="registerErrorMsg" dense text type="error">
                        {{ registerErrorMsg }}
                      </v-alert>

                      <v-btn
                        :disabled="!registerValid"
                        color="blue darken-3"
                        class="mr-4 white--text"
                        @click="email_register"
                      >
                        登録
                      </v-btn>
                    </v-form>
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>
            <v-divider class="my-8" />
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import zxcvbn from 'zxcvbn'
import { mapActions, mapState, mapGetters } from 'vuex'
import { getAuth } from "../plugins/firebase";
import {emailRule, registerPasswordRule,} from "../utils/validation";
interface Data {
  registerErrorMsg: String
  tab: any
  registerValid: Boolean
  registerEmail: String
  registerPassword: String
  registerPasswordAgain: String
  emailRule: Function
  registerPasswordRule: Function
  registerPasswordAgainRule: Array<any>
  showRegisterPassword: Boolean
}

export default Vue.extend({
  data(): Data {
      return {
          registerErrorMsg: '',
          tab: null,
          registerValid: true,
          registerEmail: '',
          registerPassword: '',
          registerPasswordAgain: '',
          emailRule,
          registerPasswordRule,
          registerPasswordAgainRule: [
              (v: any) => {
                  if (v) {
                      return (
                          this.$refs.registerPassword.value === v ||
                          'パスワードと一致しません'
                      )
                  }else{
                      return true

                  }
              }
          ],
          showRegisterPassword: false
      }
  },
  computed: {
      progress() {
          return this.score.value
      },
      score() {
          const result = zxcvbn(this.registerPassword)

          switch (result.score) {
              case 4:
                  return {
                      color: 'green',
                      value: 100
                  }
              case 3:
                  return {
                      color: 'light-green lighten-1',
                      value: 75
                  }
              case 2:
                  return {
                      color: 'amber accent-2',
                      value: 50
                  }
              case 1:
                  return {
                      color: 'deep-orange lighten-1',
                      value: 25
                  }
              default:
                  return {
                      color: 'red darken-3',
                      value: 0
                  }
          }
      }
  },
  methods: {
    email_register: function(err) {
      const auth = getAuth()
        if (this.$refs.register_form.validate()) {
          this.$store
            .dispatch('signUp', {
              auth: auth,
              email: this.registerEmail,
              password: this.registerPassword
            })
            .then(() => {
                this.registerEmail = ''
                this.registerPassword = ''
                this.$router.push({
                  name: 'index',
                  params: {
                    dashboard_msg: true,
                    dashboard_msg_text:
                    'アカウントの登録が完了しました。'
                  }
                })
            })
            .catch((err) => {
                console.log(err)
                if (err.code === 'auth/email-already-in-use') {
                    this.registerErrorMsg =
                        'このメールアドレスは既に登録されています。'
                } else if (err.code === 'auth/invalid-email') {
                    this.registerErrorMsg = '無効なメールアドレスです。'
                } else {
                    this.registerErrorMsg =
                        'エラーにより登録できませんでした。'
                }
            })
        }
    }
  }
})
</script>