import Vue from 'vue'
// import Vue from 'vue/dist/vue.esm.js'
import App from './App.vue'
import ElementUI from 'element-ui';
import axios from "axios";
import VueAxios from "vue-axios";
import VueRouter from "vue-router";
import 'element-ui/lib/theme-chalk/index.css';
import routes from "./configs/router.config";

Vue.config.productionTip = false

Vue.use(ElementUI);
Vue.use(VueRouter);
Vue.use(VueAxios, axios);
//全局组件
/*const Test = Vue.extend({
    template: `
      <div>这是一个全局组件</div>`,
    data() {
        return {}
    }
});
Vue.component('test', Test);*/

new Vue({
    router: new VueRouter(routes),
    render: h => h(App),
    beforeCreate() {
        Vue.prototype.$eventBus = this;
    }
}).$mount('#app')
