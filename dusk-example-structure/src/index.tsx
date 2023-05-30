import Dusk, { createApp } from '@xams-framework/dusk';

import './index.scss';
import createDuskAppInitializer from './configuration/plugins/dusk-plugin-app-initializer';
import App from './business/app';
import router from './configuration/router';
import createReduxLogger from '@/configuration/redux/middlewares/logger';

Dusk.configuration.silent = false;

const app = createApp({
    container: '#root',
    redux: {
        logger: {
            collapsed: true,
        },
        middlewares: [createReduxLogger()],
    },
});

app
    .use(createDuskAppInitializer())
    .router(router)
    .startup(<App />)
;

window.app = app;


