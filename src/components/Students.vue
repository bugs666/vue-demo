<template>
  <ul class="students-ul">
    <li v-for="({name,sex,age,id}) in list" :key="id" @click="(e)=>showName(e,name)"
        :class="`${isChangeBg?'changebg':''}`">
      <p>姓名：{{ name }}</p>
      <p>性别：{{ sex }}</p>
      <p>年龄：{{ age }} 岁</p>
    </li>
  </ul>
</template>

<script>
import myMixin from '../mixins/MyMixin';

export default {
  name: "Students",
  data() {
    return {
      list: [
        {name: '张三', sex: '男', age: '18', id: '001001'},
        {name: '李四', sex: '男', age: '18', id: '001002'},
        {name: '王五', sex: '男', age: '18', id: '001003'},
      ]
    }
  },
  props: {
    isChangeBg: {
      type: Boolean,
      required: true
    }
  },
  mixins: [myMixin]
}
</script>

<style scoped lang="scss">
.students-ul {
  background: orchid;
  padding-right: 16px;

  li {
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid black;

  }

  .changebg {

    &:hover {
      background: antiquewhite;

    }

  }

}


</style>
