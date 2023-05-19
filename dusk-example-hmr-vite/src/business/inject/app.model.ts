import {createDuskModel} from '@xams-framework/dusk';

export default createDuskModel({
    namespace: 'app',
    initialState: {
        value: 12,
        loading: false,
    },
    reducers: {
        add(state) {
            state.value += 1;   // 修改这个值后点击按钮试试
        },
        minus(state) {
            state.value -= 1;
        },
        loading(state, {payload}) {
            state.loading = payload;
        },
    },
});

