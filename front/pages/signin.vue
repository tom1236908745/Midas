<template>
  <div class="signin">
    <h2>Sign in</h2>
    <input type="text" placeholder="email" v-model="email" />
    <input type="password" placeholder="Password" v-model="password" />
    <button @click="signIn">Signin</button>
    <p>
      You don't have an account?
      <router-link to="/signup">create account now!!</router-link>
    </p>
  </div>
</template>

<script>
import Vue from "vue";
import { getAuth, signInWithEmailAndPassword } from "../src/plugins/firebase";

export default Vue.extend({
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    signIn() {
      const auth = getAuth();
      signInWithEmailAndPassword(auth, this.email, this.password)
        .then(userCredential => {
          // Signed in
          const user = userCredential.user;
          console.log('user',user);
          this.$router.push('/')
        })
        .catch(error => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log('errorCode',errorCode)
          console.log('errorMessage',errorMessage)
        });
    }
  }
});
</script>

<style>
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
.signin {
  margin-top: 15%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
}
input {
  margin: 10px 0;
  padding: 10px;
}
button {
  margin: 10px 0;
  padding: 10px;
}
</style>