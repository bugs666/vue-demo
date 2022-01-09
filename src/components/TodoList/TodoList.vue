<template>
  <el-card class="todo-list">
    <header>事件的发布与订阅，组件间的通信</header>
    <div class="todo-head">
      <el-input v-model="input" placeholder="请输入待办项" class="search-input" :clearable="true" @change="addItem"/>
      <el-button type="primary" @click="resetData" size="medium">重置数据</el-button>
    </div>
    <el-checkbox-group v-model="allSelect">
      <div v-for="(item,index) in currentList" :key="index">
        <TodoItem :todoData="item" @removeItem="()=>remove(index)"
                  @changeTodoName="(name)=>changeTodoName(index,name)"/>
      </div>
    </el-checkbox-group>
    <div v-show="currentList.length ===0">暂无数据</div>
    <hr>
    <TodoFooter :all="list.length" :ready="allSelect.length" :is-show-btn="!!allSelect.length"
                @removeAllReady="()=>remove(-1)"/>
  </el-card>
</template>

<script>
import TodoItem from "./TodoItem";
import TodoFooter from "./TodoFooter";

let allTodoKey = '@@ALL_TODO';
let allReadyKey = '@@ALL_READY';
let initialList = ['写代码', '喝水', '接水', '上厕所'];

export default {
  name: "TodoList",
  components: {TodoItem, TodoFooter},
  data() {
    return {
      list: [],
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
    },
    resetData() {
      this.list = initialList;
      this.allSelect = [];
    },
    changeTodoName(index, name) {
      this.list.splice(index, 1, name);
    }
  },
  created() {
    let todo = window.sessionStorage.getItem(allTodoKey) ?? initialList;
    let ready = window.sessionStorage.getItem(allReadyKey) ?? [this.allSelect];
    this.list = typeof todo === 'string' ? [...JSON.parse(todo)] : todo;
    this.allSelect = typeof ready === 'string' ? [...JSON.parse(ready)] : ready;
    this.$eventBus.$on('selectAllItem', this.selectAll);
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
      window.sessionStorage.setItem(allTodoKey, JSON.stringify(val));
    },
    allSelect(val) {
      window.sessionStorage.setItem(allReadyKey, JSON.stringify(val));
    },
    isSelectAll(val) {
      this.allSelect = val ? [...this.list] : [];
    }
  },
  beforeDestroy() {
    this.$eventBus.$off('selectAllItem');
  }
}
</script>

<style scoped lang="scss">
.todo-list {
  width: 40%;

  .todo-head {
    display: flex;
    align-items: center;
    margin: 16px 0;

    button {
      margin-left: 8px;
    }
  }
}
</style>
