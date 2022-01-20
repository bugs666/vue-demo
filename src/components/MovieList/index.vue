<template>
  <div>
    <!--    <button @click="getMovie">点我获取电影数据</button>-->
    <div style="display: flex">
      <span v-for="({name,id}) in movies" :key="id" @click="()=>getMovie(id)" class="movie-name">{{ name }}</span>
    </div>
    <div v-show="!!movieStr">{{ movieStr }}</div>
    <router-view></router-view>
  </div>
</template>

<script>
import {MOVIE_BASE_INFOS} from "@/constant";

export default {
  name: "MovieList",
  data() {
    return {
      movieStr: ''
    }
  },
  methods: {
    getMovie(id) {
      // this.axios.get(`${BASE_PATH}/movieApi/api?id=1302425`).then(res => {
      //   this.movieStr = JSON.stringify(res);
      // }).catch(e => {
      //   this.movieStr = e;
      // });
      this.$router.push({name: 'movieDetail', query: {id}});
    }
  },
  computed: {
    movies() {
      return MOVIE_BASE_INFOS;
    }
  }
}
</script>

<style scoped lang="scss">
div {
  border: 1px solid #42b983;
  border-radius: 8px;
  padding: 20px;
  margin-top: 16px;
}

.movie-name {
  margin-right: 8px;
  color: #42b983;

  &:hover {
    cursor: pointer;
  }
}
</style>
