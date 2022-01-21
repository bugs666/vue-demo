import Vue from 'vue'
import VueRouter from "vue-router";
import {USER_INFO} from "../constant";
// import School from './components/School.vue';
// import Students from './components/Students.vue';
// import TodoList from './components/TodoList/TodoList';
// import SlotDemo from './components/SlotDemo'
// import TodoListByStore from './components/TodoListByStore/TodoList';

Vue.use(VueRouter);

export const menus = [
    {
        path: '/movie',
        name: 'movie',
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
        name: 'transition',
        component: () => import('@/components/VTransition')
    }
];
const routes = [
    {
        path: '/login',
        name: 'login',
        component: () => import('@/components/Login')
    },
    ...menus
]
const router = new VueRouter({routes});

router.beforeEach((to, from, next) => {
    let user = localStorage.getItem(USER_INFO);
    if (user) {
        return next();
    }
    if (to?.name && to.name !== 'login') {
        return next({name: 'login'});
    }
    next();
});

export default router;
