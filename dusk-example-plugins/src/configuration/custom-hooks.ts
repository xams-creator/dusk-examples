import { Plugin, PluginFactory } from '@xams-framework/dusk';
import { EventEmitter } from 'events';

declare module '@xams-framework/dusk' {

    interface IDusk {
        platform: string;
        dawn: boolean;
        dusk: boolean;
    }

    interface Plugin {
        onTest(ctx);
    }
}

export default function createCustomHooks(options: any = {}): PluginFactory {
    return (app): Plugin => {
        return {
            onReady(ctx) {
                app.platform = 'creator';
                app.dawn = false;
                app.dusk = true;

                app._emitter.emit('onTest');
            },
            onTest() {
                console.log('on test');
            },
        };
    };
};
