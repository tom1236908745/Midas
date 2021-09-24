<template>
  <div>
    <h2 class="mt-10">
      This is
      {{ prof.includes('@') ? prof.substring(0, prof.indexOf('@')) : prof }}'
      profile
    </h2>
    <PostAdd />
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
  methods: {
    addPost() {
      al
    }
  }
})
</script>

<style>
</style>