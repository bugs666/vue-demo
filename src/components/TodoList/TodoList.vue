<template>
  <el-card class="todo-list">
    <el-input v-model="input" placeholder="请输入待办项" class="search-input" :clearable="true" @change="addItem"/>
    <div v-for="(item,index) in currentList" :key="index">
      <TodoItem :todoData="item" :onRemove="()=>remove(index)" :onSelect="select"/>
    </div>
    <div v-show="currentList.length ===0">暂无数据</div>

  </el-card>
</template>

<script>
import TodoItem from "./TodoItem";

export default {
  name: "TodoList",
  components: {TodoItem},
  data() {
    return {
      list: ['写代码', '喝水', '接水', '上厕所'],
      input: ''
    }
  },
  methods: {
    remove(index) {
      this.list.splice(index, 1);
    },
    select() {

    },
    addItem(val) {
      val && this.list.push(val);
    }
  },
  computed: {
    currentList() {
      if (this.input) {
        let list = this.list.filter(it => it.includes(this.input));
        return [...list];
      }
      return [...this.list];
    }
  }
}
</script>

<style scoped lang="scss">
.todo-list {
  width: 40%;

  .search-input {
    margin-bottom: 16px;
  }
}
</style>
