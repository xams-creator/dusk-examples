import { createBrowserRouter, RouteObject } from '@xams-framework/dusk';
import React from 'react';
import App from 'src/business/app';

export function routes() {
    return [
        {
            path: '/',
            element: <App />,
            children: [
                {
                    path: '/home',
                    element: <div>home</div>,
                },
                {
                    path: '*',
                    element: <div>bar123s</div>,
                },
            ],
        },
    ] as RouteObject[];
}

export default createBrowserRouter(routes(), {
    basename: '/',
});
