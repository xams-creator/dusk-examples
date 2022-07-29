import * as React from 'react';
import Dusk from '@xams-framework/dusk';
import createValidator from '@/configuration/app-validator';
import createPrinter from '@/configuration/printer';
import App from '@/app';
import createCustomHooks from '@/configuration/custom-hooks';

Dusk.configuration.plugin.hooks.push('onTest');

const app = new Dusk({
    container: '#root',
    history: {
        mode: 'hash',
    },
    render(props) {
        return <App />;
    },
});

app.use(createPrinter());
app.use(createValidator());
app.use(createCustomHooks());

window.app = app;
app.startup();

