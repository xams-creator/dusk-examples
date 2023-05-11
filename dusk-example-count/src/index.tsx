import { createApp } from '@xams-framework/dusk';

import model from './index.model';
import App from './app';

const app = createApp({
    container: '#root',
});

app
    .define(model)
    .startup(<App />)
;

// @ts-ignore
window.app = app;

