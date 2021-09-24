<template>
  <v-container>
    <v-row wrap justify="center" align="center">
      <v-col :sm="12" :md="8">
        <p class="text-center">ログインユーザのみ閲覧可能なコンテンツ</p>
      </v-col>
    </v-row>
    <div class="pa-5">
      <v-btn
        color="indigo darken-1"
        nuxt
        to="/profile"
        class="white--text"
      >
        プロフィーページへ
      </v-btn>
    </div>
    <PostPlaza />
    <div class="pa-5">
      <v-btn outlined color="grey darken-3" @click="signOut">
        ログアウト
      </v-btn>
    </div>
  </v-container>
</template>

<script>
import Vue from 'vue';
import { getAuth } from "~/plugins/firebase";

export default Vue.extend({
  methods: {
    signOut: function(err) {
      const auth = getAuth()
      this.$store
        .dispatch('signOut', {
          auth: auth
        })
        .then(() => {
          this.$router.push({
            name: 'login'
          })
        })
        .catch((err) => {
          alert(err.message)
        })
    }
  }
})
</script>