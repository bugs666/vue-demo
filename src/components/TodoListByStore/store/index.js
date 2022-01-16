import Vue from "vue";
import Vuex, {Store} from 'vuex';
import state from "./state";
import mutations from "./mutation";
import actions from "./action";

Vue.use(Vuex);

export default new Store({
    state, mutations, actions
});
