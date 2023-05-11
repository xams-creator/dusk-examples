import { definePlugin } from '@xams-framework/dusk';


export default function createDuskCustomReady2() {
    return definePlugin({
        name: 'dusk-plugin-app-custom-ready2',
        onCustomReady({ app }, next) {
            console.log('custom on ready2', 'before');
            next();
            console.log('custom on ready2', 'after');
        },
    });
}
