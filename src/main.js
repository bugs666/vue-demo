import Vue from 'vue'
// import Vue from 'vue/dist/vue.esm.js'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false

Vue.use(ElementUI);
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
    render: h => h(App),
    beforeCreate() {
        Vue.prototype.$eventBus = this;
    }
}).$mount('#app')
