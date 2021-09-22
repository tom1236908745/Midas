<template>
  <div class="container">
    <div class="container">
     <button @click="$store.commit('counter/setIncrease', 0)">Increase</button>
     <button @click="$store.commit('counter/setDecrease', 0)">Decrease</button>
     {{ counter }}
   </div>
   <div class="container">
     <button @click="$store.commit('counter/setIncrease', 1)">Increase</button>
     <button @click="$store.commit('counter/setDecrease', 1)">Decrease</button>
     {{ subCounter }}
   </div>
  </div>
</template>

<script>
import Vue from "vue";
export default Vue.extend({
  computed: {
    counter() {
      return this.$store.getters["counter/counter"];
    },
    subCounter() {
      return this.$store.getters["counter/subCounter"];
    }
  }
});
</script>

<style>
</style>