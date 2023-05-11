import { definePlugin } from '@xams-framework/dusk';

export default function createDuskAppInitializer() {
    return definePlugin({
        name: 'dusk-plugin-app-initializer',
        onHmr() {
            console.log('onHmr......');
        },
    });
}
