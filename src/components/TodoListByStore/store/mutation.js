import fa from "element-ui/src/locale/lang/fa";

export default {
    init(state, payload) {
        state = {...state, ...payload};
    },
    resetData(state, payload) {
        debugger
        state = {...state, ...payload};
    },
    selectAll(state, payload) {
        state.isSelectAll = payload;
        state.allSelect = payload ? state.list : [];
    },
    removeItem(state, payload) {
        state.list = payload;
        state.allSelect = [];
        state.isSelectAll = false;
    }
}
