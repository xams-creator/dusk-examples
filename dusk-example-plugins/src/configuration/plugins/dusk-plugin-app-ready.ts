import { definePlugin } from '@xams-framework/dusk';


export default function createDuskAppReady() {
    return definePlugin({
        name: 'dusk-plugin-app-ready',
        setup(app) {
            console.log('第2个插件的setup...', ',', '当前插件数量', app._pm.plugins.length);
        },
        onReady({ app }, next) {
            console.log('应用启动前', 'onReady', '被调用前', new Date().getTime());
            next();
            console.log('应用启动前', 'onReady', '被调用后', new Date().getTime());
        },
    });
}
