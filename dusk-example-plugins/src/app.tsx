import React from 'react';
import { withDusk } from '@xams-framework/dusk';

class App extends React.Component<any, any> {

    state = {
        count: 3111,
    };

    componentDidMount() {
        // const axios = window.app._axios;
        //
        //
        // setInterval(async () => {
        //     await axios.get('/test.json');
        //     this.setState((state) => {
        //         state.count = state.count + 1;
        //         return state;
        //     });
        // }, 1000);


    }

    test() {
        const { $pm } = this.props.$app;
        $pm.apply('onTest', 'hello', 'dusk');
    }

    render() {
        return (
            <div>
                <button onClick={this.test.bind(this)}>调用自定义钩子</button>

                {this.state.count}
            </div>
        );
    }

}

export default withDusk(App);
