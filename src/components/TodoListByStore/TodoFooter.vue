<template>
  <div class="todo-footer">
    <el-checkbox @change="onSelect" v-model="$store.state.isSelectAll">已完成{{ ready }}/全部{{ all }}</el-checkbox>
    <el-button type="text" v-if="!!$store.state.allSelect.length" @click="onRemove">清除已完成项目</el-button>
  </div>
</template>

<script>
export default {
  name: "TodoFooterStore",
  props: {
    all: {
      type: Number,
      required: true
    },
    ready: {
      type: Number,
      required: true
    },
    isShowBtn: {
      type: Boolean,
      required: false,
      default: false
    },
  },
  data() {
    return {
      isSelect: false
    }
  },
  created() {
    this.isSelect = this.all === this.ready ? this.all !== 0 : false;
  },
  updated() {
    this.isSelect = this.all === this.ready ? this.all !== 0 : false;
  },
  methods: {
    onSelect(val) {
      this.$store.dispatch('selectAll', val);
    },
    onRemove() {
      this.$store.dispatch('removeItem');
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
