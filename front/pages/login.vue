<template>
  <v-container>
    <v-row justify="center">
      <v-col sm="12" md="5">
        <h2 class="text-center subtitle-1 font-weight-bold mb-2">
          メールアドレスでログイン
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
                      ref="login_form"
                      v-model="loginValid"
                      lazy-validation
                    >
                      <v-text-field
                        v-model="loginEmail"
                        label="メールアドレス"
                        required
                      />

                      <v-text-field
                        v-model="loginPassword"
                        label="パスワード"
                        required
                        :append-icon="
                          showLoginpassword ? 'mdi-eye' : 'mdi-eye-off'
                        "
                        :type="showLoginpassword ? 'text' : 'password'"
                        @click:append="showLoginpassword = !showLoginpassword"
                      />

                      <v-alert v-if="loginErrorMsg" dense text type="error">
                        {{ loginErrorMsg }}
                      </v-alert>

                      <v-btn
                        :disabled="!loginValid"
                        color="blue darken-3"
                        class="my-4 white--text"
                        @click="email_login"
                      >
                        ログイン
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
import { getAuth } from "~/plugins/firebase";
interface Data {
  tab: any
  loginValid: Boolean
  loginEmail: String
  loginPassword: String
  showLoginpassword: Boolean
  loginErrorMsg: String
}
export default Vue.extend({
  data: function() {
    return {
      tab: null,
      loginValid: true,
      loginEmail: '',
      loginPassword: '',
      showLoginpassword: false,
      loginErrorMsg: '',
    }
  },
  methods: {
    email_login(err: any): void {
      const auth = getAuth()
      this.$store
        .dispatch('signInWithEmail', {
          auth: auth,
          email: this.loginEmail,
          password: this.loginPassword
        })
        .then(() => {
          this.loginEmail = ''
          this.loginPassword = ''
          this.$router.push('/')
        })
        .catch((err: any) => {
          if (err.code === 'auth/user-disabled') {
              this.loginErrorMsg =
                  'このアカウントはロックされています。'
          } else {
              this.loginErrorMsg =
                  'メールアドレスまたはパスワードが間違っています。'
          }
      })
    }
  }
})
</script>