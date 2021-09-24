<template>
  <dir>
    <h2>this is component</h2>
    <p>{{ prof }}</p>
  </dir>
</template>

<script>
import Vue from 'vue';
export default Vue.extend({
  computed: {
    prof () {
      return this.$store.getters.isAuthenticated
    },
  },
})
</script>

<style>
</style>