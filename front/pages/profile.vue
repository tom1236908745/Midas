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

<script lang="ts">
import Vue from 'vue'
import { query, collection, db, onSnapshot } from "~/plugins/firebase";
interface usersDataType {
  id: String
  name: String
  birth: Date
  jobs: Array<String>
  intro: String
}
interface Data {
  users: usersDataType
}
export default Vue.extend({
  data(): Data {
    return {
      users: {
        id: '',
        name: '',
        birth: undefined,
        jobs: [],
        intro: "",
      },
    }
  },
  computed: {
    prof(): void {
      return this.$store.getters.user.email
    },
  },
  mounted() {
    const q = query(collection(db, "users"));
    
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      this.users = [];
      querySnapshot.forEach((doc) => {
        // users.push(doc.data().title);
        this.element = doc.data()
        this.element["id"] = doc.id
        this.users.push(this.element)
      });
      
      return this.users
    });
  },
  methods: {}
})
</script>

<style>
</style>