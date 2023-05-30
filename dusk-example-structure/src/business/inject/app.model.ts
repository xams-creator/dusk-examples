import api from '@/common/api';
import { createDuskModel, DuskEffectPayloadAction } from '@xams-framework/dusk';
import { BusinessError } from '@xams-framework/common';
import { UserResource } from '@/common/api/resource';
import { PasswordLoginCommand } from '@/common/api/command';
import { message } from 'antd';

interface AppState {
    value: number;
    user: null | UserResource;
}

const initialState: AppState = {
    value: 1,
    user: null,
};


const model = createDuskModel({
    namespace: 'app',
    initialState,
    reducers: {
        add(state) {
            state.value += 1;   // 修改这个值后点击按钮试试
        },
        minus(state) {
            state.value -= 1;
        },
    },
    effects: {
        async doLogin(dispatch, state, { payload }: DuskEffectPayloadAction<PasswordLoginCommand>, { set, app }) {
            if (!payload.password) {
                throw new BusinessError('请输入密码');
            }

            const res = await api.passwordLogin(payload);
            if (!res.success) {
                throw new BusinessError(res.message);
            }

            set((state) => {
                state.user = res.data;
            });
            message.destroy();
            message.success('登录成功');
            app.$router.navigate('/home');
            return res;
        },
    },
});


export const { doLogin } = model.commands;

export default model;
