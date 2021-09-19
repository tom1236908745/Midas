<template>
  <div class="hello">
    <h2>Hello {{ name }}!!</h2>
    <h2>{{ msg }}</h2>
    <h2>Essential Links</h2>
    <button @click="signOut">Sign out</button> 
    <button @click="apiPublic">Public</button>
    <button @click="apiPrivate">Private</button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      name: firebase.auth().currentUser.email
    };
  },
  methods: {
    signOut: function() {
      firebase.auth().signOut().then(() => {
        localStorage.removeItem('jwt')
        this.$router.push('/signin')
      })
    },
    apiPublic: async function() {
      let res = await axios.get("http://localhost:8000/public");
      this.msg = res.data;
    },
    apiPrivate: async function() {
      let res = await axios.get("http://localhost:8000/private");
      this.msg = res.data;
    },
  },
};
</script>


<style scoped>
h1,
h2 {
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
</style>
