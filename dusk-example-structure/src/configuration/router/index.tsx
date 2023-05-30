import { createBrowserRouter, Navigate } from '@xams-framework/dusk';
import React from 'react';
import { Home, Login } from '@/business/pages';

export default createBrowserRouter([
    {
        path: '/',
        element: <Navigate to={'/login'} />,
    },
    {
        path: '/login',
        element: <Login />,
    },
    {
        path: '/home',
        element: <Home />,
    },
    {
        path: '*',
        element: <div>404</div>,
    },
], {
    basename: '/',
});
