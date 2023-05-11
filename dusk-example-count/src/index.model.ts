import { createDuskModel } from '@xams-framework/dusk';

const model = createDuskModel({
    namespace: 'app',
    initialState: {
        value: 1,
        loading: false,
    },
    reducers: {
        add(state) {
            state.value += 1;
        },
        minus(state) {
            state.value -= 1;
        },
        loading(state, { payload }) {
            state.loading = payload;
        },
    },
    effects: {
        async add(dispatch, state, action, { sleep, put }) {
            dispatch(model.actions.loading(true));
            await sleep(1000);
            put();
            dispatch(model.actions.loading(false));

            return {
                code: 1,
                data: 'hello',
            };
        },
    },
});


export default model;
