<template>
  <div class="todo-item">
    <el-checkbox :label="todoData" v-show="!isEdit"/>
    <el-input v-model="name" placeholder="请输入内容" v-show="isEdit" @change="changeName"/>
    <div class="item-right">
      <i class="el-icon-edit edit-item-icon" @click="setEdit"></i>
      <el-button type="text" class="remove-btn" @click="onRemove">删除</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "TodoItem",
  data() {
    return {
      isEdit: false,
      name: this.todoData
    }
  },
  props: {
    todoData: {
      type: String,
      required: true
    }
  },
  methods: {
    onRemove() {
      this.$emit('removeItem');
    },
    setEdit() {
      this.isEdit = true;
    },
    changeName(val) {
      this.$emit('changeTodoName', val);
      this.isEdit = false;
    }
  },
  destroyed() {
    //销毁组件后解绑所有自定义事件
    this.$off();
  }
}
</script>

<style scoped lang="scss">
.todo-item {
  display: flex;
  justify-content: space-between;
  height: 30px;
  align-items: center;
  padding: 8px;
  background: #42b983;
  margin: 8px 0;

  .item-right {
    display: flex;
    align-items: center;
  }

  &:hover {
    .remove-btn {
      display: block;
    }

    .edit-item-icon {
      display: block;
    }
  }

  .remove-btn {
    display: none;
    transition: display ease-in-out 0.3s;
    color: red;
    margin-left: 4px;
  }

  .edit-item-icon {
    display: none;
    font-size: 16px;
  }
}
</style>
