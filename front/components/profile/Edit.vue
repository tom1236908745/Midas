<template>
  <v-row class="mt-7" justify="center">
    <v-dialog
      @click:outside="close()"
      v-model="dialog"
      persistent
      max-width="700px"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="orange" dark v-bind="attrs" v-on="on"> 編集 </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="text-h5"> プロフィールの編集</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="10">
                氏名 *
                <v-text-field
                  placeholder="※ 会津太郎"
                  hint="氏名を入力して下さい。"
                  persistent-hint　required
                  v-model="profData.name"
                  :rules="[requireRule]"
                ></v-text-field>
              </v-col>
              <v-col cols="10">
                生年月日 *
                <v-text-field
                  hint="生年月日を入力して下さい。"
                  persistent-hint
                  type="date"
                  required
                  v-model="profData.birth"
                  :rules="[requireRule]"
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
                  placeholder="業種"
                  hint="経験したことのある業種を選択して下さい(複数選択可)"
                  persistent-hint
                  multiple
                  v-model="profData.jobs"
                ></v-select>
              </v-col>
              <v-col cols="10">
                自己紹介
                <v-text-field
                  placeholder="※ 会津が大好きです。趣味は旅行です。"
                  hint="自己紹介を入力して下さい。"
                  persistent-hint
                  v-model="profData.intro"
                  :rules="[requireRule]"
                ></v-text-field>
              </v-col>
            </v-row>
          </v-container>
          <small>* ... 必須項目です</small>
        </v-card-text>

        <v-card-actions>
          <v-spacer />
          <v-btn color="blue darken-1" text @click="close()"> Close </v-btn>
          <v-btn color="blue darken-1" text @click="save()"> Save </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import Vue from 'vue';
import {requireRule} from '~/utils/validation';
import { db, collection, addDoc } from "~/plugins/firebase";
export default Vue.extend({
  data: () => ({
    dialog: false,
    profData: {
      name: '',
      birth: '',
      jobs: [],
      intro: "",
    },
    requireRule
  }),
  methods: {
    close() {
      this.dialog = false
      this.profData = {}
    },
    async save() {
      const now = new Date()
      addDoc(collection(db, 'users'), {
        name: this.profData.name,
        birth: this.profData.birth,
        jobs: this.profData.jobs,
        intro: this.profData.intro,
        avatar: 'https://picsum.photos/50?image=' + (Math.floor(Math.random() * 400) + 1),
        createdAt: now,
      })
      this.close()
    }
  }
})
</script>

<style lang="scss" scoped>
</style>