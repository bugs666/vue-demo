<template>
  <div id="app">
    <input type="text" v-model="keyWord">
    <button type="button" @click="()=>changeSortMode('asc')">升序</button>
    <button type="button" @click="()=>changeSortMode('desc')">降序</button>
    <button type="button" @click="()=>changeSortMode()">还原</button>
    <ol>
      <li v-for="({name,age}) in currentList" :key="name">{{ name }}-{{ age }}
        <input type="text">
      </li>
    </ol>
    <div>{{ time | format('YYYY-MM-DD') }}</div>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import moment from 'moment';

export default {
  data() {
    return {
      arr: [{name: '马冬梅', age: 20}, {name: '徐冬冬', age: 17}, {name: '徐伦', age: 21}, {name: '周杰伦', age: 19}],
      keyWord: '',
      sortMode: 'common',
      time: new Date()
    }
  },
  name: 'App',
  components: {
    // HelloWorld
  },
  methods: {
    changeSortMode(type = 'common') {
      this.sortMode = type;
    }
  },
  computed: {
    currentList() {
      let arr = this.keyWord ? this.arr.filter(({name}) => name.includes(this.keyWord)) : [...this.arr];
      if (this.sortMode === 'common') {
        return arr;
      }
      return arr.sort((firstVal, secondVal) => this.sortMode === 'desc' ? secondVal.age - firstVal.age : firstVal.age - secondVal.age);
    }
  },
  filters: {
    format(val, formatter = 'YYYY-MM-DD HH:mm:ss') {
      return moment(val).format(formatter);
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
