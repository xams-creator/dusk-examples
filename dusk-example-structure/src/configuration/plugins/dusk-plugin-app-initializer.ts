import { definePlugin } from '@xams-framework/dusk';
import createDuskHmr from '@xams-framework/dusk-plugin-hmr';
import createDuskContextWebpack from '@xams-framework/dusk-plugin-context-webpack';
import createDuskLoading from '@xams-framework/dusk-plugin-loading';
import { message } from 'antd';
import { BusinessError } from '@xams-framework/common';

export default function createDuskAppInitializer() {
    return definePlugin({
        name: 'dusk-plugin-app-initializer',
        setup(app) {
            app
                .use(createDuskHmr())
                .use(createDuskContextWebpack())
                .use(createDuskLoading())
            ;
        },
        onError({ app }, next, msg, event) {
            if (event.type === 'unhandledrejection') {
                (event as PromiseRejectionEvent).promise.catch(error => {
                    if (error instanceof BusinessError) {
                        message.destroy();
                        message.error(msg);
                    }
                });
            }
            event.preventDefault();
            next();
        },
    });
}
