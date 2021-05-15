import { lazy } from "react";

const Home = lazy(() => import('../pages/Home.page'));
const NotFound = lazy(() => import('../pages/NotFound.page'));
const Cart = lazy(() => import('../pages/Cart.page'));
const Checout = lazy(() => import('../pages/Checkout.page'));

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
        name: 'Cart',
        private: false,
        exact: true,
        path: '/cart',
        component: Cart
    },
    {
        name: 'Checkout',
        private: false,
        exact: true,
        path: '/checkout',
        component: Checout
    },
    {
        name: 'Not Found',
        private: false,
        exact: false,
        path: '/*',
        component: NotFound
    }
];