<template>
  <el-card class="todo-list">
    <header>Vuex版本的TodoList案例</header>
    <div class="todo-head">
      <el-input v-model="input" placeholder="请输入待办项" class="search-input" :clearable="true" @change="addItem"/>
      <el-button type="primary" @click="resetData" size="medium">重置数据</el-button>
    </div>
    <el-checkbox-group v-model="allSelect">
      <div v-for="(item,index) in currentList" :key="index">
        <transition name="removeItem" appear>
          <TodoItem :todoData="item" @removeItem="()=>remove(index)"
                    @changeTodoName="(name)=>changeTodoName(index,name)"/>
        </transition>
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
import store from './store';
import {mapActions, mapGetters, mapState} from 'vuex';

let allTodoKey = '@@ALL_TODO';
let allReadyKey = '@@ALL_READY';
let initialList = ['写代码', '喝水', '接水', '上厕所'];

export default {
  name: "TodoListByStore",
  components: {TodoItem, TodoFooter},
  store,
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
    ...mapActions('todoList', ['resetData', 'init']),
    changeTodoName(index, name) {
      this.list.splice(index, 1, name);
    }
  },
  computed: {
    ...mapGetters('todoList', ['currentList']),
    ...mapState('todoList', ['allSelect', 'list', 'input'])
  },
  created() {
    this.init();
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
  width: 45%;

  .todo-head {
    display: flex;
    align-items: center;
    margin: 16px 0;

    button {
      margin-left: 8px;
    }
  }

  .removeItem-enter-active, .removeItem-leave-active {
    transition: ease-in-out 1s;
  }

  .removeItem-enter, .removeItem-leave-to {
    transform: translateX(-100%);
  }

  .removeItem-enter-to, .removeItem-leave {
    transform: translateX(0);
  }
}
</style>
