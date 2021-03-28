import {AuthLayout} from './layouts/author';
import {MainLayout} from './layouts/main';
import { Home } from './components/home';
import { Login } from './components/login'; 
import { Example2 } from './components/example2';
import { Example3 } from './components/example3';


export const routes = [
    {
        path: "/auth",
        component: AuthLayout,
        routes: [
            {
                path: "/auth",
                component: Login
            }
        ]
    },
    {
        path: "*",
        component: MainLayout,
        routes: [
            {
                path:"/example2",
                component: Example2
            },
            {
                path: "/example3",
                component: Example3
            },
            {
                path: "/",
                component: Home
            },
        ]
    }
]