<!-- Please remove this file from your project -->
<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <button @click="apiPublic">public</button>
    <button @click="apiPrivate">private</button>
    <br />
    <router-link to="/signin">sign in now!!</router-link>
    <router-link to="/signup">sign up now!!</router-link>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import axios from 'axios'
export default Vue.extend({
   data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    apiPublic: async function () {
      let res = await axios.get('http://localhost:8000/public')
      this.msg = res.data
    },
    apiPrivate: async function () {
      let res = await axios.get('http://localhost:8000/private')
      this.msg = res.data
    }
  }
})
</script>
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
button {
  margin: 10px 0;
  padding: 10px;
}
.hello {
  text-align: center;
  margin-top: 15%;
}
</style>