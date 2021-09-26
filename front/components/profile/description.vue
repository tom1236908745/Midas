<template>
  <div>
    <h2 class="mt-10">
      This is
      {{ prof.includes('@') ? prof.substring(0, prof.indexOf('@')) : prof }}'
      profile
    </h2>
    <ProfileEdit />
    
    <br />
    <v-btn class="ma-6" @click="$router.push('/')"> 投稿画面へ</v-btn>
  </div>
</template>

<script>
import Vue from 'vue';
export default Vue.extend({
  
  computed: {
    prof () {
      return this.$store.getters.user.email
    },
  },
  methods: {}
})
</script>

<style>
</style>