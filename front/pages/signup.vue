<template>
 <div class="signup">
  <h2>Sign up</h2>
  <input type="text" placeholder="Username" v-model="email" />
  <input type="password" placeholder="Password" v-model="password" />
  <button>Register</button>
  <p>
   Do you have an account?
   <router-link to="/#/signin">sign in now!!</router-link>
  </p>
 </div>
</template>

<script>
import Vue from 'vue'
export default Vue.extend({
 data() {
  return {
   email: "",
   password: ""
  };
 }
});
</script>

<style>
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
.signup {
  margin-top: 15%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center
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