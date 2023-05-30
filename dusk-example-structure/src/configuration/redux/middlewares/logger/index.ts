export default function createReduxLogger() {
    return (store) => (next) => (action) => {
        console.log(`dispatching action: ${JSON.stringify(action)}`);
        let result = next(action);
        console.log(`next state: ${JSON.stringify(store.getState())}`);
        return result;
    };
};
