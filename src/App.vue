<template>
  <div id="app">
    <!--    <input type="text" v-model="keyWord">
        <button type="button" @click="()=>changeSortMode('asc')">升序</button>
        <button type="button" @click="()=>changeSortMode('desc')">降序</button>
        <button type="button" @click="()=>changeSortMode()">还原</button>
        <ol>
          <li v-for="({name,age}) in currentList" :key="name">{{ name }}-{{ age }}
            <input type="text">
          </li>
        </ol>
        <div>{{ time | format('YYYY-MM-DD') }}</div>
        <h1>当前的数字是：{{ num }}</h1>
        <h1>放大十倍后的数字是：<span v-big="num"></span></h1>
        <input type="text" v-focus="num">
        <button @click="num++">点我+1</button>-->
    常量
    <School/>
    <Students :isChangeBg="true"/>
    <hr/>
    <div class="row-div">
      <TodoList/>
      <VTranstion/>
    </div>
    <MovieList/>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import School from './components/School.vue';
import Students from './components/Students.vue';
import TodoList from './components/TodoList/TodoList';
import VTranstion from './components/VTranstion'
import MovieList from './components/MovieList'
import moment from 'moment';

export default {
  data() {
    return {
      arr: [{name: '马冬梅', age: 20}, {name: '徐冬冬', age: 17}, {name: '徐伦', age: 21}, {name: '周杰伦', age: 19}],
      keyWord: '',
      sortMode: 'common',
      time: new Date(),
      num: 1
    }
  },
  name: 'App',
  components: {
    Students, School, TodoList, VTranstion, MovieList
  },
  methods: {
    changeSortMode(type = 'common') {
      this.sortMode = type;
    }
  },
  //计算属性
  computed: {
    currentList() {
      let arr = this.keyWord ? this.arr.filter(({name}) => name.includes(this.keyWord)) : [...this.arr];
      if (this.sortMode === 'common') {
        return arr;
      }
      return arr.sort((firstVal, secondVal) => this.sortMode === 'desc' ? secondVal.age - firstVal.age : firstVal.age - secondVal.age);
    }
  },
  //过滤器
  filters: {
    format(val, formatter = 'YYYY-MM-DD HH:mm:ss') {
      return moment(val).format(formatter);
    }
  },
  //自定义指令
  directives: {
    big(el, binding) {
      el.innerHTML = binding.value * 10;
    },
    focus: {
      //节点初次加载时，用于初始化
      bind(el, binding) {
        el.value = binding.value;
      },
      //子节点挂载到父节点上
      inserted(el) {
        el.focus();
      },
      //所在组件的VNode更新时
      update(el, binding) {
        el.value = binding.value;
        // el.focus();
      }
    }
  },
  beforeCreate() {
    console.log('beforeCreate', this);
    console.log('beforeCreate', this.$data);
  },
  created() {
    console.log('created', this);
    console.log('created', this.$data);
  },
  beforeMount() {
    console.log('beforeMount');
  },
  mounted() {
    console.log('mounted');
    setTimeout(() => {
      this.num = 50;
      console.log('模拟请求接口获取数据');
    }, 1000);
  },
  beforeUpdate() {
    console.log('beforeUpdate');
  },
  updated() {
    console.log('updated');
  },
  beforeDestroy() {
    console.log('再见');
  },
  destroyed() {
    console.log('我凉了');
  }
}
</script>

<style scoped lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;

  .row-div {
    display: flex;
    justify-content: space-between;
  }
}
</style>
