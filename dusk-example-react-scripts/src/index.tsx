import * as React from 'react';
import Dusk from '@xams-framework/dusk';
import axios from 'src/configuration/axios';

/*
* node_modules\react-scripts\config\modules.js
* getWebpackAliases '@': paths.appSrc,
* **/


const app = new Dusk({
    container: '#root',
    history: {
        mode: 'browser',
    },
    axios,
    routes: [
        {
            path: '/app',
            render(props) {
                return <div> hello app!</div>;
            },
        },
        {
            path: '/',
            render() {
                return (
                    <div>
                        123222222
                    </div>
                );
            },
        },
    ],
});

app.startup();
window.app = app;


