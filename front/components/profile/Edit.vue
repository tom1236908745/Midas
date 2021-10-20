<template>
  <v-form ref="vform" v-model="valid">
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
                  氏名 <span class="red--text">*</span>
                  <v-text-field
                    placeholder="※ 会津太郎"
                    hint="氏名を入力して下さい。"
                    persistent-hint　required
                    v-model="user.name"
                    :rules="[requireRule]"
                  ></v-text-field>
                </v-col>
                <v-col cols="10">
                  生年月日 <span class="red--text">*</span>
                  <v-text-field
                    hint="生年月日を入力して下さい。"
                    persistent-hint
                    type="date"
                    required
                    v-model="user.birth"
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
                    v-model="user.jobs"
                  ></v-select>
                </v-col>
                <v-col cols="10">
                  自己紹介
                  <v-text-field
                    placeholder="※ 会津が大好きです。趣味は旅行です。"
                    hint="自己紹介を入力して下さい。"
                    persistent-hint
                    v-model="user.intro"
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-container>
            <small><span class="red--text">*</span> ... 必須項目です</small>
          </v-card-text>

          <v-card-actions>
            <v-spacer />
            <v-btn color="red lighten-3 white--text" @click="close()">
              閉じる
            </v-btn>
            <v-btn
              color="blue lighten-3 white--text"
              :disabled="!valid"
              @click="save()"
            >
              保存
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
  </v-form>
</template>

<script lang="ts">
import Vue from 'vue'
import { requireRule } from '~/utils/validation'
import {
  db,
  collection,
  addDoc,
  getDocs,
  updateDoc,
  doc,
  deleteDoc,
  onSnapshot,
  query,
} from '~/plugins/firebase'
import { VForm } from '~/@types/index'
interface userType {
  id: string
  name: string
  birth: Date | null
  jobs: Array<string>
  intro: string
  uid: string
}
const defaultUseData: userType = {
  id: '',
  name: '',
  birth: null,
  jobs: [],
  intro: '',
  uid: '',
}
interface Data {
  valid: boolean
  form: VForm | undefined
  dialog: boolean
  user: userType
  userStore: userType
  requireRule: Function
}
export default Vue.extend({
  data(): Data {
    return {
      valid: true,
      form: undefined,
      dialog: false,
      user: {
        id: '',
        name: '',
        birth: null,
        jobs: [],
        intro: '',
        uid: '',
      },
      userStore: {
        id: '',
        name: '',
        birth: null,
        jobs: [],
        intro: '',
        uid: '',
      },
      requireRule,
    }
  },
  mounted() {
    this.form = this.$refs.vform as VForm
    this.reset()

    const q = query(collection(db, 'users'))

    onSnapshot(q, (querySnapshot) => {
      querySnapshot.forEach((user: any) => {
        if (user.data().uid === this.$store.getters.user.uid) {
          this.userStore = user.data()
          this.userStore.id = user.id
          this.$store.commit('setUserName', this.userStore.name)
          this.close()
        }
      })
    })
    
    this.close()
  },
  methods: {
    async save(): Promise<void> {
      this.user.uid = this.$store.getters.user.uid
      const form = this.$refs.vform as VForm
      if (!form.validate()) return
      const now = new Date()
      if (!!this.user.id) {
        if (!window.confirm('ユーザー情報を更新してよろしいですか？')) return
        const userProf = doc(db, 'users', this.user.id)
        try {
          await updateDoc(userProf, {
            uid: this.user.uid,
            name: this.user.name,
            birth: this.user.birth,
            jobs: this.user.jobs,
            intro: this.user.intro,
            avatar:
              'https://picsum.photos/50?image=' +
              (Math.floor(Math.random() * 400) + 1),
            createdAt: now,
          })
          // this.userStore = this.user
          this.$store.commit('setUserName', this.user.name)
          this.close()
        } catch (e) {
          this.close()
          // vuetify使用に変更
          alert('エラー')
        }
      } else {
        try {
          const userProf = await addDoc(collection(db, 'users'), {
            uid: this.user.uid,
            name: this.user.name,
            birth: this.user.birth,
            jobs: this.user.jobs,
            intro: this.user.intro,
            avatar:
              'https://picsum.photos/50?image=' +
              (Math.floor(Math.random() * 400) + 1),
            createdAt: now,
          })
          this.$store.commit('setUserName', this.user.name)
          this.user.id = userProf.id
          // this.userStore = this.user
          this.close()
        } catch (e) {
          this.close()
          // vuetify使用に変更
          alert('エラー')
          console.log(e)
        }
      }
    },
    close(): void {
      this.dialog = false
      this.user =　JSON.parse(JSON.stringify(this.userStore))
      this.reset()
    },
    reset(): void {
      const form = this.$refs.vform as VForm
      // form?.reset()
      form?.resetValidation()
    },
  },
})
</script>

<style lang="scss" scoped>
</style>