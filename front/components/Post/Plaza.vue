<template>
  <div>
    <PostAdd />
    <v-card class="my-10 pa-4">
      <!-- <p>
      <v-text-field
        type="text"
        placeholder="TODOを入力しましょう！"
        v-model="newItemTitle"
        v-on:keyup.enter="addTodo(newItemTitle)"
      />
      <v-btn @click="addTodo(newItemTitle)">追加</v-btn>
    </p> -->
      <PostCardPost />
      <div>
        <v-card
          v-for="item in items"
          :key="item.id"
          max-width="700px"
          min-height="100px"
        >
          <label v-bind:class="{ done: item.isChecked }">
            <v-checkbox
              type="checkbox"
              v-model="item.isChecked"
              @click="saveTodo"
              :label="item.title"
            />
          </label>
        </v-card>
      </div>
      <ActionDeleteConfirm
        class="mt-4"
        v-if="!!this.items[0] && !this.selected"
        @deleteConf="deleteTodo()"
      />
    </v-card>
  </div>
</template>

<script>
import Vue from 'vue';
export default Vue.extend({
  data: () => ({
    items: [],
    newItemTitle: '',
    selected: false,
    num: 0
  }),
  methods: {  //methodsオプションをまるっと追加
    addTodo: function(){
      this.items.push({
        id: this.num,
        title: this.newItemTitle,
        isChecked: false
      });
      this.num += this.num
      this.newItemTitle = '';
      this.saveTodo();
    },
    deleteTodo: function(){
      this.items = this.items.filter(function (item) {
        return item.isChecked === false;
      });
      this.saveTodo();

    },
    saveTodo: function(){
      localStorage.setItem('items', JSON.stringify(this.items));
      this.selected != this.selected
    },
    loadTodo: function(){
      this.items = JSON.parse( localStorage.getItem('items') );
      if( !this.items ){
        this.items = [];
      }
    },
  },
  mounted: function(){
    this.loadTodo();
  },
})
</script>

<style>
.done {
  text-decoration: line-through;
}
.target {
  pointer-events: none;
}
</style>