<template>
  <el-card class="transition-list">
    <header>vue封装的动画效果</header>
    <div>
      <el-button>显示/隐藏</el-button>
      <h1>这是动画嗷</h1>
    </div>
  </el-card>
</template>

<script>
export default {
  name: "VTranstion"
}
</script>

<style scoped lang="scss">
.transition-list {
  h1 {
    background: #42b983;
  }
}
</style>
