import { definePlugin } from '@xams-framework/dusk';


export default function createDuskAppLifecycle() {
    return definePlugin({
        name: 'dusk-plugin-app-lifecycle',
        setup(app) {
            console.log('第1个插件的setup...', ',', '当前插件数量', app._pm.plugins.length);
        },
        onReady({ app }, next) {
            console.log('应用启动前', 'onReady', '被调用前');
            next();
            console.log('应用启动前', 'onReady', '被调用后');
        },
        onMounted({ app }, next) {
            console.log('元素已挂载', 'onMounted', '被调用前');
            next();
            console.log('元素已挂载', 'onMounted', '被调用后');
        },
        onDestroy({ app }, next) {
            console.log('应用销毁', 'onDestroy', '被调用前');
            next();
            console.log('应用销毁', 'onDestroy', '被调用后');
        },
        onDocumentVisible({ app }, next) {
            console.log('document可见时', 'onDocumentVisible', '被调用前');
            next();
            console.log('document可见时', 'onDocumentVisible', '被调用后');
        },
        onDocumentHidden({ app }, next) {
            console.log('document隐藏时', 'onDocumentHidden', '被调用前');
            next();
            console.log('document隐藏时', 'onDocumentHidden', '被调用后');
        },
        onError({ app }, next) {
            console.log('应用监听到异常时', 'onError', '被调用前');
            next();
            console.log('应用监听到异常时', 'onError', '被调用后');
        },
    });
}
