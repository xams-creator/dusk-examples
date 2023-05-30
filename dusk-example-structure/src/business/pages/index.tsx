import { lazy } from 'react';

const Home = lazy(() => import('@/business/pages/home'));

const Login = lazy(() => import('@/business/pages/login'));

export {
    Home,
    Login
};
