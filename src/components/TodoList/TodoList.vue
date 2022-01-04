<template>
  <el-card class="todo-list">
    <el-input v-model="input" placeholder="请输入待办项" class="search-input" :clearable="true" @change="addItem"/>
    <el-checkbox-group v-model="allSelect">
      <div v-for="(item,index) in currentList" :key="index">
        <TodoItem :todoData="item" :onRemove="()=>remove(index)" :onSelect="(val)=>select(val,index,item)"/>
      </div>
    </el-checkbox-group>
    <div v-show="currentList.length ===0">暂无数据</div>
    <hr>
    <TodoFooter :all="list.length" :ready="allSelect.length" :is-show-btn="!!allSelect.length"
                :on-remove="()=>remove(-1)" :on-select="selectAll"/>
  </el-card>
</template>

<script>
import TodoItem from "./TodoItem";
import TodoFooter from "./TodoFooter";

export default {
  name: "TodoList",
  components: {TodoItem, TodoFooter},
  data() {
    return {
      list: ['写代码', '喝水', '接水', '上厕所'],
      input: '',
      allSelect: [],
      isSelectAll: false
    }
  },
  methods: {
    remove(index) {
      if (index === -1) {
        let list = this.list.filter(it => !this.allSelect.includes(it));
        this.list = [...list];
        return;
      }
      this.list.splice(index, 1);
    },
    select(val, index, name) {
      if (val) {
        return this.allSelect.push(name);
      }
      return this.allSelect.splice(index, 1);
    },
    selectAll(val) {
      this.allSelect = val ? [...this.list] : [];
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
  },
  watch: {
    list(val) {
      let list = this.allSelect.filter(it => val.includes(it));
      this.allSelect = [...list];
    },
    isSelectAll(val) {
      this.allSelect = val ? [...this.list] : [];
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
