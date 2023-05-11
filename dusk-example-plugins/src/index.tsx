import React from 'react';
import { createApp } from '@xams-framework/dusk';
import createDuskAppLifecycle from '@/configuration/plugins/dusk-plugin-app-lifecycle';
import createDuskAppReady from '@/configuration/plugins/dusk-plugin-app-ready';
import createDuskCustomHooks from '@/configuration/plugins/dusk-plugin-custom-hooks';


const app = createApp({
    container: '#root',
});


app
    .use(createDuskAppLifecycle())
    .use(createDuskAppReady())
    .use(createDuskCustomHooks())
    .startup(<div>按F12请打开控制台</div>)
;

window.app = app;


