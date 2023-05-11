import Dusk, { definePlugin, PluginHookContext } from '@xams-framework/dusk';
import createDuskCustomReady1 from '@/configuration/plugins/dusk-plugin-custom-hooks/dusk-plugin-custom-hook1';
import createDuskCustomReady2 from '@/configuration/plugins/dusk-plugin-custom-hooks/dusk-plugin-custom-hook2';


declare module '@xams-framework/dusk' {
    interface Plugin {
        onCustomReady?: <Context extends PluginHookContext = PluginHookContext>(ctx: Context, next: () => void) => void;
    }
}

const hook = 'onCustomReady';
Dusk.configuration.plugin.hooks.push(hook);

export default function createDuskCustomHooks() {
    return definePlugin({
        name: 'dusk-plugin-app-custom-hooks',
        setup(app) {
            app
                .use(createDuskCustomReady1())
                .use(createDuskCustomReady2())
            ;
        },
        onReady({ app }, next) {
            app.emit(hook);
            next();
        },
    });
}
