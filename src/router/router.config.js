import Vue from 'vue'
import VueRouter from "vue-router";
import MovieList from '../components/MovieList';
import VTransition from '../components/VTranstion';
// import School from './components/School.vue';
// import Students from './components/Students.vue';
// import TodoList from './components/TodoList/TodoList';
// import SlotDemo from './components/SlotDemo'
// import TodoListByStore from './components/TodoListByStore/TodoList';

Vue.use(VueRouter);

export const routes = [
    {
        path: '/movie',
        name: '电影列表',
        component: MovieList,
        children: [
            {
                path: 'vTransition',
                name: '动画',
                component: VTransition
            }
        ]
    },
    {
        path: '/vTransition',
        name: '动画',
        component: VTransition
    }
];
const router = new VueRouter({routes});
export default router;
