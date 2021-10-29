<template>
  <p>{{this.id}}</p>
</template>

<script lang="ts">
import Vue from 'vue'
interface Data {
  id: string
}
export default Vue.extend({
  data(): Data {
    return {
      id: '',
    }
  },
  mounted() {
    console.log(this.$route.params['id'])
    this.id = this.$route.params['id']
  },
})
</script>

<style>
</style>