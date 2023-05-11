import {createApp} from '@xams-framework/dusk';
import createDuskAppInitializer from './configuration/plugins/dusk-plugin-app-initializer';
import createDuskHmr from '@xams-framework/dusk-plugin-hmr';
import createDuskContext from '@xams-framework/dusk-plugin-context';
import router from './configuration/router';

const app = createApp({
    container: '#root',
    redux: {
        logger: {
            collapsed: true,
        },
        devTools: false, // redux devtools的配置，关闭或者禁用redux devtools的 hotReload 功能将会得到更佳的效果
        // devTools: {
        //     shouldHotReload: false,
        // },
    },
});

app
    .use(createDuskAppInitializer())
    .use(createDuskContext())
    .use(createDuskHmr())
    .router(router)
    .startup()
;

console.log('修改 app.model reducers.add 的值试试！')
window.app = app;


