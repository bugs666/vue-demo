<template>
  <div class="school-div">
    <h1 @click="(e)=>showName(e,name)">学科名称：{{ name }}</h1>
    <h1>学科类型：{{ type }}</h1>
  </div>
</template>

<script>
import myMixin from '../mixins/MyMixin';

export default {
  name: "School",
  data() {
    return {
      name: 'Vue',
      type: 'Web前端框架'
    };
  },
  mixins: [myMixin]
}
</script>

<style scoped>
.school-div {
  background: #42b983;
}

.school-div h1:first-child:hover {
  cursor: pointer;
}
</style>
