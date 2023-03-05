import LoginPage from "../pages/LoginPage/LoginPage";
import RegistrationPage from "../pages/RegistrationPage/RegistrationPage";
import ForumPage from "../pages/ForumPage/ForumPage";

export const routes = [
    {
        id: 1,
        path: '/',
        exact: true,
        component: LoginPage,
        title: 'Login page',
        private: false,
    },
    {
        id: 2,
        path: '/registration',
        exact: true,
        component: RegistrationPage,
        title: 'Registration page',
        private: false,
    },
    {
        id: 3,
        path: '/forum',
        exact: true,
        component: ForumPage,
        title: 'Forum page',
        private: true,
    },
]