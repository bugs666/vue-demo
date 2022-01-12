<template>
  <div>
    <button @click="getMovie">点我获取电影数据</button>
    <div v-show="!!movieStr">{{ movieStr }}</div>
  </div>
</template>

<script>
import {BASE_PATH} from "@/constant";

export default {
  name: "MovieList",
  data() {
    return {
      movieStr: ''
    }
  },
  methods: {
    getMovie() {
      debugger
      this.axios.get(`${BASE_PATH}/movieApi/api?id=1302425`).then(res => {
        this.movieStr = JSON.stringify(res);
      }).catch(e => {
        this.movieStr = e;
      });
    }
  }
}
</script>

<style scoped>
div {
  border: 1px solid #42b983;
  border-radius: 8px;
  padding: 20px;
  margin-top: 16px;
}
</style>
