<template>
  <section class="container">
    <div>
      <h2>掲示板</h2>
      <p>{{ this.comments.content }}</p>
      <v-list three-line>
        <template v-for="(comment, index) in comments">
          <v-list-item :key="index">
            <v-list-item-avatar>
              <img :src="comment.avatar" />
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-subtitle class="text--primary subheading">{{
                prof.includes('@') ? prof.substring(0, prof.indexOf('@')) : prof
              }}</v-list-item-subtitle>
              {{comment.content}}
              <v-list-item-subtitle>
                {{ comment.createdAt }}
                &nbsp;
                <v-btn color="red lighten-3" dark @click="deleteComment(comment.id)" small
                  >delete</v-btn
                >
              </v-list-item-subtitle>
            </v-list-item-content>
            <v-list-item-action> </v-list-item-action>
          </v-list-item>
          <v-divider :key="comment.id"></v-divider>
        </template>
      </v-list>
      <div>
        
        <v-btn color="purple lighten-3" dark @click="readFromFirestore()">
          <span>コメントの読み出し</span>
        </v-btn>
      </div>
    </div>
  </section>
</template>

<script>
import Vue from 'vue';
import { db, collection, addDoc, getDocs, doc, deleteDoc} from "~/plugins/firebase"

export default Vue.extend({
  data: () => ({
    element: {},
    comments: [],
  }),
   computed: {
    prof () {
      return this.$store.getters.user.email
    },
  },
  methods: {
    /* async writeToFirestore() {
      try {
        const docRef = await addDoc(collection(db, "users"), {
          first: "Ada",
          last: "Lovelace",
          born: 1815
        });
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    }, */
    async readFromFirestore() {
      this.comments = []
      let snapshot = await getDocs(collection(db, "comments"));
      const options = { weekday: 'short', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second:'numeric' };
      snapshot.forEach((doc) => {
        this.element = doc.data()
        this.element["id"] = doc.id
        this.element["sort"] = this.element.createdAt.seconds
        this.element.createdAt = new Date(this.element.createdAt.seconds).toLocaleDateString( 'ja-JP', options)
        this.comments.push(this.element)
      });
      this.comments.sort((a,b) => {
        if(a.sort < b.sort)return 1;
        else if (a.sort > b.sort) return -1;
        else return 0
      })
      
      return this.comments
    },
    async deleteComment(id) {
      if (!window.confirm('コメントを削除してよろしいですか？')) return
      await deleteDoc(doc(db, "comments", id))
    },
  },
})
</script>

<style>
</style>