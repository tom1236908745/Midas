<template>
	<section class="container">
		<div>
			<h2>Write to Firestore.</h2>
			<div>
				<v-btn @click="writeToFirestore()">
					<span>User情報の追加</span>
				</v-btn>
				<v-btn @click="readFromFirestore()">
					<span>User情報の読み出し</span>
				</v-btn>
			</div>
		</div>
	</section>
</template>

<script lang="ts">
import Vue from 'vue';
import { db, collection, addDoc, getDocs } from "~/plugins/firebase"

export default Vue.extend({
  methods: {
    async writeToFirestore(): Promise<void> {
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
    },
    async readFromFirestore(): Promise<void> {
      const querySnapshot = await getDocs(collection(db, "users"));
      querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
      });
    }
  },
})
</script>

<style>
</style>