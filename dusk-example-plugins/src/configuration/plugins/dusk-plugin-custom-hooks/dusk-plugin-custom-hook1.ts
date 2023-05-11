import { definePlugin } from '@xams-framework/dusk';


export default function createDuskCustomReady1() {
    return definePlugin({
        name: 'dusk-plugin-app-custom-ready1',
        onCustomReady({ app }, next) {
            console.log('custom on ready1', 'before');
            next();
            console.log('custom on ready1', 'after');
        },
    });
}
