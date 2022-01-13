<template>
  <div>
    <h1>{{ title }}</h1>
    <slot></slot>
    <slot name="games"></slot>
    <slot :projects="projects"></slot>
  </div>
</template>

<script>
export default {
  name: "DefaultSlot",
  props: ['title'],
  data() {
    return {
      projects: ['react', 'vue', 'js高阶', 'html+css']
    }
  }
}
</script>

<style scoped>
h1 {
  background: #42b983;
}

</style>
