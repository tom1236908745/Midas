<template>
  <div>
    <PostAdd />
    <PostCardPost />
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
    addTodo(){
      this.items.push({
        id: this.num,
        title: this.newItemTitle,
        isChecked: false
      });
      this.num += this.num
      this.newItemTitle = '';
      this.saveTodo();
    },
    deleteTodo(){
      this.items = this.items.filter(function (item) {
        return item.isChecked === false;
      });
      this.saveTodo();

    },
    saveTodo(){
      localStorage.setItem('items', JSON.stringify(this.items));
      this.selected != this.selected
    },
    loadTodo(){
      this.items = JSON.parse( localStorage.getItem('items') );
      if( !this.items ){
        this.items = [];
      }
    },
  },
  mounted(){
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