<template>
  <div class="todo-item">
    <el-checkbox :label="todoData"/>
    <el-button type="text" class="remove-btn" @click="onRemove">删除</el-button>
  </div>
</template>

<script>
export default {
  name: "TodoItem",
  props: {
    todoData: {
      type: String,
      required: true
    }
  },
  methods: {
    onRemove() {
      this.$emit('removeItem');
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

  &:hover {
    .remove-btn {
      display: block;
    }
  }

  .remove-btn {
    display: none;
    transition: display ease-in-out 0.3s;
    color: red;
  }
}
</style>
