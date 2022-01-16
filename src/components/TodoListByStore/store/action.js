import {allReadyKey, allTodoKey, initialList} from '../constant'

export default {
    init({commit, state}) {
        let todo = window.sessionStorage.getItem(allTodoKey) ?? initialList;
        let ready = window.sessionStorage.getItem(allReadyKey) ?? [state.allSelect];
        let list = typeof todo === 'string' ? [...JSON.parse(todo)] : todo;
        let allSelect = typeof ready === 'string' ? [...JSON.parse(ready)] : ready;
        commit('init', {list, allSelect}, {});
    },
    resetData({commit}) {
        commit('resetData', {list: initialList, allSelect: []});
    },
    selectAll({commit}, state) {
        commit('selectAll', state);
    },
    removeItem({commit, state: {list, allSelect}}) {
        debugger;
        let filter = list.filter(it => !allSelect.includes(it));
        commit('removeItem', filter);
    }
};
