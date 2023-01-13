import Dusk, { createApp } from '@xams-framework/dusk';

import model from './index.model';
import App from './app';

Dusk.configuration.experimental.context = false;
const app = createApp({
    container: '#root',
});

app
    .define(model)
    .startup(<App />)
;

