import Vue from "vue";
import Vuex, {Store} from 'vuex';
import state from "./state";
import mutations from "./mutation";
import actions from "./action";
import getters from "./getter";

Vue.use(Vuex);

let todoList = {
    namespaced: true,
    state, mutations, actions, getters
};
export default new Store({modules: {todoList}});
