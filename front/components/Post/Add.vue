<template>
  <v-form ref="vform" v-model="valid">
    <v-row class="mt-5" justify="center">
      <v-dialog
        @click:outside="close()"
        v-model="dialog"
        persistent
        max-width="700px"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn color="primary" dark v-bind="attrs" v-on="on">
            投稿する
          </v-btn>
        </template>
        <v-card>
          <v-card-title>
            <span class="text-h5">新規投稿</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="10">
                  タイトル<span class="red--text">*</span>
                  <v-text-field
                    placeholder="※ パソコンについて相談したい。"
                    hint="記事のタイトルを入力して下さい。"
                    persistent-hint　
                    v-model="postData.title"
                    :rules="[requireRule]"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="10">
                  概要<span class="red--text">*</span>
                  <v-text-field
                    placeholder="※ 会津大学生にパソコンの事を聞きたい。"
                    hint="記事の概要を説明して下さい。"
                    persistent-hint
                    v-model="postData.exp"
                    :rules="[requireRule]"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="10">
                  <v-select
                    :items="[
                      '飲食',
                      'アパレルショップ',
                      '八百屋',
                      '花屋',
                      'IT企業',
                      '会津大学生',
                    ]"
                    placeholder="対象業種"
                    hint="相談したい対象業種を選択して下さい"
                    persistent-hint
                    v-model="postData.jobs"
                    multiple
                  ></v-select>
                </v-col>
                <v-col cols="10">
                  金額
                  <v-text-field
                    placeholder="0"
                    type="number"
                    v-model="postData.money"
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-container>
            <small><span class="red--text">*</span> ... 必須項目です</small>
          </v-card-text>

          <v-card-actions>
            <v-spacer />

            <v-btn color="red lighten-3 white--text" @click="close()"> 閉じる </v-btn>
            <v-btn
              :disabled="!valid"
              color="blue lighten-3 white--text"
              @click="addComment"
            >
              投稿
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
  </v-form>
</template>

<script lang="ts">
import Vue from 'vue'
import { db, collection, addDoc } from '~/plugins/firebase'
import { requireRule } from '~/utils/validation'
import { VForm } from '~/@types/index'
interface formData {
  uid: string
  name: string
  title: string
  exp: String
  jobs: Array<string>
  money: Number
}
interface Data {
  valid: boolean
  form: VForm | undefined
  dialog: Boolean
  postData: formData
  requireRule: Function
}
export default Vue.extend({
  data(): Data {
    return {
      valid: true,
      form: undefined,
      dialog: false,
      // form入力データ
      postData: {
        uid: '',
        name: '',
        title: '',
        exp: '',
        jobs: [],
        money: 0,
      },
      requireRule,
    }
  },
  mounted() {
    this.form = this.$refs.vform as VForm
    this.reset()
  },
  methods: {
    async addComment(): Promise<void> {
      const form = this.$refs.vform as VForm
      if (!form.validate()) return
      addDoc(collection(db, 'posts'), {
        uid: this.$store.getters.user.uid,
        name: this.$store.getters.user.name,
        title: this.postData.title,
        exp: this.postData.exp,
        jobs: this.postData.jobs,
        money: this.postData.money,
        createdAt: new Date(),
      })
        .then(() => {
          this.close()
        })
        .catch(() => {
          // vuetify使用に変更
          alert('エラー')
          this.close()
        })
    },
    close(): void {
      this.dialog = false
      this.reset()
    },
    reset(): void {
      const form = this.$refs.vform as VForm
      form?.reset()
      form?.resetValidation()
    },
  },
})
</script>

<style lang="scss" scoped>
</style>