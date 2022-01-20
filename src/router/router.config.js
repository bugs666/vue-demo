import Vue from 'vue'
import VueRouter from "vue-router";
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
        component: () => import('@/components/MovieList'),
        children: [
            {
                path: 'movieDetail',
                name: 'movieDetail',
                component: () => import('@/components/MovieDetail'),
                props(route) {
                    return {...route.query}
                }
            }
        ]
    },
    {
        path: '/vTransition',
        name: '动画',
        component: () => import('@/components/VTransition')
    }
];
const router = new VueRouter({routes});
export default router;
