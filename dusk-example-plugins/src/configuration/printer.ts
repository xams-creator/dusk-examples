import Dusk, { Plugin } from '@xams-framework/dusk';


export default function createPrinter(options: any = {}) {
    return (app: Dusk) => {
        return {
            name: 'app-printer',
            onReady(ctx, next) {
                console.log('onReady 1');
                next();
                console.log('onReady 2');

                app.define({
                    namespace: 'test',
                    state: options.state || {},
                });

                // app.ext()
            },
            onLaunch(ctx, next) {
                console.log('onLaunch 3');
                next();
                console.log('onLaunch 4');
            },
            onDocumentHidden(ctx, next) {
                console.log(app.state);
                throw new Error('test error');
            },
            onError(ctx, next, msg) {
                console.log('===============');
                console.log('caught a error!');
                console.error(msg);
                console.log('===============');
                next();
            },
            onTest(ctx, next) {
                ctx.body = 123;
                next();
            },
        };
    };
};
