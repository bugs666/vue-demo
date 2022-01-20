<template>
  <el-card class="transition-list">
    <header>vue封装的动画效果</header>
    <div>
      <el-button @click="showAnimation = !showAnimation">{{ showAnimation ? '隐藏' : '显示' }}</el-button>
      <transition appear name="move">
        <h1 v-show="showAnimation">这是使用动画实现的</h1>
      </transition>
      <br/>
      <el-button @click="showTransition = !showTransition">{{ showTransition ? '隐藏' : '显示' }}</el-button>
      <transition appear name="myTransition">
        <h1 v-show="showTransition">这是使用过渡实现的</h1>
      </transition>
      <transition-group appear name="myTransition">
        <h1 v-show="showTransition" key="1">天对地，雨对风，大陆对长空</h1>
        <h1 v-show="!showTransition" key="2">山花对海树，赤日对苍穹</h1>
      </transition-group>
    </div>
  </el-card>
</template>

<script>
export default {
  name: "VTransition",
  data() {
    return {
      showAnimation: true,
      showTransition: true
    }
  }
}
</script>

<style scoped lang="scss">
.transition-list {
  width: 45%;

  h1 {
    background: #42b983;
    transition: ease-in-out 1s;
  }

  .move-enter-active {
    animation: myMove 1s ease-in-out;
  }

  .move-leave-active {
    animation: myMove reverse 1s ease-in-out;
  }

  .myTransition-enter, .myTransition-leave-to {
    transform: translateX(-100%);
  }

  .myTransition-enter-to, .myTransition-leave {
    transform: translateX(0);
  }

}

@keyframes myMove {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
}
</style>
