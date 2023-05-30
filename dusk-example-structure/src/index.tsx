import { createApp } from '@xams-framework/dusk';

import './index.scss';
import createDuskAppInitializer from './configuration/plugins/dusk-plugin-app-initializer';
import App from './business/app';
import router from './configuration/router';

const app = createApp({
    container: '#root',
    redux: {
        logger: {
            collapsed: true,
        },
    },
});

app
    .use(createDuskAppInitializer())
    .router(router)
    .startup(<App />)
;

window.app = app;


