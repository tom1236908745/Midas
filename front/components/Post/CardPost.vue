<template>
  <v-card class="my-10 pa-4">
    <section class="container">
      <div>
        <h2>掲示板</h2>
        <p>{{ this.posts.content }}</p>
        <v-list three-line>
          <template v-for="(post, index) in posts">
            <v-list-item :key="index" @click="postsPageRoute(post.id)">
              <v-list-item-avatar>
                <img :src="post.avatar" />
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-subtitle class="text--primary subheading">{{
                  post.name
                }}</v-list-item-subtitle>
                {{ post.title }}
                <v-list-item-subtitle>
                  {{ post.createdAt }}
                  &nbsp;
                  <v-btn
                    color="red lighten-3"
                    dark
                    @click="deletepost(post.id)"
                    small
                    >delete</v-btn
                  >
                </v-list-item-subtitle>
              </v-list-item-content>
              <v-list-item-action> </v-list-item-action>
            </v-list-item>
            <v-divider :key="post.id"></v-divider>
          </template>
        </v-list>
      </div>
    </section>
  </v-card>
</template>

<script lang="ts">
import Vue from 'vue'
import {
  db,
  collection,
  addDoc,
  getDocs,
  doc,
  deleteDoc,
  onSnapshot,
  query,
} from '~/plugins/firebase'
// interface elementType {
//   avatar: String
//   birth: String
//   createdAt: Date
//   intro: String
//   name: String
//   id: String
//   sort: String
// }
interface Data {
  element: any //elementType
  posts: Array<any> // Array<elementType>
}
export default Vue.extend({
  data(): Data {
    return {
      element: {
        avatar: '',
        birth: '',
        createdAt: new Date(),
        intro: '',
        name: '',
        id: '',
        sort: '',
      },
      posts: [
        {
          avatar: '',
          birth: '',
          createdAt: new Date(),
          name: '',
          id: '',
          sort: '',
        },
      ],
    }
  },
  computed: {
    prof() {
      return this.$store.getters.user.email
    },
  },
  mounted() {
    const q = query(collection(db, 'posts'))
    const options = {
      weekday: 'short',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
    } // second:'numeric'
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      this.posts = []
      querySnapshot.forEach((doc: any) => {
        this.element = doc.data()
        this.element.id = doc.id
        this.element.sort = this.element.createdAt.seconds
        this.element.createdAt = this.element.createdAt
          .toDate()
          .toLocaleDateString('ja-JP', options)
        this.posts.push(this.element)
      })
      this.posts.sort((a, b) => {
        if (a.sort < b.sort) return 1
        else if (a.sort > b.sort) return -1
        else return 0
      })
      return this.posts
    })
  },
  methods: {
    async deletepost(id: any) {
      if (!window.confirm('コメントを削除してよろしいですか？')) return
      await deleteDoc(doc(db, 'posts', id))
    },
    postsPageRoute(id: any) :void {
      this.$router.push(`/posts/${id}`)
    }
  },
})
</script>

<style>
</style>