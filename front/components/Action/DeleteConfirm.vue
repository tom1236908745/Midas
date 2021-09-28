<template>
  <div class="text-center">
    <v-dialog v-model="dialog" width="500">
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="red" dark v-bind="attrs" v-on="on"> 削除 </v-btn>
      </template>

      <v-card>
        <v-card-title class="text-h5 red lighten-1">
          本当に削除してもよろしいですか？
        </v-card-title>

        <!-- <v-card-text class="pt-3">
          <span class="text-h6">本当に削除してもよろしいですか？</span>
        </v-card-text>
        <v-divider></v-divider> -->

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="moveOut()"> はい </v-btn>
          <v-btn color="red" text @click="dialog = false"> いいえ </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
interface Data {
  dialog: Boolean
}
export default Vue.extend({
  data(): Data {
    return {
    dialog: false,
    }
  },
  methods: {
    moveOut(): void {
      this.$emit('deleteConf');
      this.$nextTick(() => {
        this.dialog = false
      })
    }
  }
})
</script>

<style>
</style>