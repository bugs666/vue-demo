<template>
  <div class="todo-footer">
    <el-checkbox @change="onSelect" v-model="isSelect">已完成{{ ready }}/全部{{ all }}</el-checkbox>
    <el-button type="text" v-if="isShowBtn" @click="onRemove">清除已完成项目</el-button>
  </div>
</template>

<script>
export default {
  name: "TodoFooter",
  props: {
    all: {
      type: Number,
      required: true
    },
    ready: {
      type: Number,
      required: true
    },
    onSelect: {
      type: Function,
      required: true
    },
    isShowBtn: {
      type: Boolean,
      required: false,
      default: false
    },
    onRemove: {
      type: Function,
      required: true
    }
  },
  computed: {
    isSelect() {
      if (this.all === this.ready && this.all === 0) {
        return false;
      }
      return this.all === this.ready;
    }
  }
}
</script>

<style scoped>
.todo-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px;
  height: 20px;
  color: red;
}

</style>
