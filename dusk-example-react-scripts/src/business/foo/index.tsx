import { route } from '@xams-framework/dusk';
import React from 'react';

@route({ path: '/page/admin/extension' })
class Foo extends React.Component<any, any> {
    render() {
        return (
            <div>admin extension detail</div>
        );
    }
}

export default Foo;
