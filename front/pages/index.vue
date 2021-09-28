<template>
  <v-container>
    <v-row wrap justify="center" align="center">
      <v-col :sm="12" :md="8">
        <p class="text-center text-h4">広場</p>
      </v-col>
    </v-row>
    <div class="pa-5">
     <v-btn plain elevation="5" nuxt to="/profile">
        プロフィールページへ
      </v-btn>
    </div>
    <PostPlaza />
    <div class="pa-5">
      <v-btn plain elevation="5" @click="signOut">
        ログアウト
      </v-btn>
    </div>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import { getAuth } from "~/plugins/firebase";

export default Vue.extend({
  methods: {
    signOut(err): void {
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