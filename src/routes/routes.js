import { lazy } from "react";

const Home = lazy(() => import('../pages/Home.page'));
const NotFound = lazy(() => import('../pages/NotFound.page'));


export const routes = [
    {
        name: 'Home',
        private: true,
        exact: true,
        path: '/',
        component: Home
    },
    {
        name: 'Home',
        private: true,
        exact: false,
        path: '/home',
        component: Home
    },
    {
        name: 'Home',
        private: true,
        exact: false,
        path: '/*',
        component: NotFound
    }
];