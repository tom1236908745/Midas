<template>
  <v-row justify="center">
    <v-dialog
      @click:outside="close()"
      v-model="dialog"
      persistent
      max-width="700px"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="primary" dark v-bind="attrs" v-on="on"> 投稿する </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="text-h5">新規投稿</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="10">
                タイトル
                <v-text-field
                  placeholder="※ パソコンについて相談したい。"
                  hint="記事のタイトルを入力して下さい。"
                  persistent-hint　required
                ></v-text-field>
              </v-col>
              <v-col cols="10">
                概要
                <v-text-field
                  placeholder="※ 会津大学生にパソコンの事を聞きたい。"
                  hint="記事の概要を説明して下さい。"
                  persistent-hint
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
                  required
                  multiple
                ></v-select>
              </v-col>
              <v-col cols="10">
                金額
                <v-text-field placeholder="0" type="number" required></v-text-field>
              </v-col>
            </v-row>
          </v-container>
          <small>* ... 必須項目です</small>
        </v-card-text>
        
        <v-card-actions>
          <v-spacer />
          <v-btn color="blue darken-1" text @click="close()"> Close </v-btn>
          <v-btn color="blue darken-1" text @click="close()"> Save </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import Vue from 'vue';
export default Vue.extend({
  data: () => ({
    dialog: false,
  }),
  methods: {
    close() {
      this.dialog = false
    }
  }
})
</script>

<style lang="scss" scoped>

</style>