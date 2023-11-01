import { AboutPage } from 'pages/AboutPage';
import { MainPage } from 'pages/MainPage';
import { NotFoundPage } from 'pages/NotFoundPage';
import { ProfilePage } from 'pages/ProfilePage';
import { RouteProps } from 'react-router-dom';

export enum AppRoutes {
     MAIN = 'main',
     ABOUT = 'about',
     PROFILE = 'profile',
     NOT_FOUND = 'not_found'
}

export const paths: Record<AppRoutes, string> = {
    [AppRoutes.ABOUT]: '/about',
    [AppRoutes.PROFILE]: '/profile',
    [AppRoutes.MAIN]: '/',
    [AppRoutes.NOT_FOUND]: '*',
};

export const routeConfig: Array<RouteProps> = [
    {
        path: paths.main,
        element: <MainPage />,
    },
    {
        path: paths.about,
        element: <AboutPage />,
    },
    {
        path: paths.profile,
        element: <ProfilePage />,
    },
    {
        path: paths.not_found,
        element: <NotFoundPage />,
    },
];
