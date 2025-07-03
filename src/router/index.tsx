
import { createBrowserRouter, Navigate } from "react-router-dom";
import { lazy } from "react";
import ProtectedRoute from "../components/ProtetedRoute";

const Login = lazy(() => import('../pages/Login'));
const Home = lazy(() => import('../pages/Home'));
const MainLayout = lazy(() => import('../layouts/MainLayout'));
const Explore = lazy(() => import('../pages/Explore'));
const Messages = lazy(() => import('../pages/Messages'));
const Notifications = lazy(() => import('../pages/Notifications'));
const Bookmarks = lazy(() => import('../pages/Bookmarks'));
const Grok = lazy(() => import('../pages/Grok'));
const Premium = lazy(() => import('../pages/Premium'));
const Profile = lazy(() => import('../pages/Profile'));

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <ProtectedRoute><Home /></ProtectedRoute>,
            },
            {
                path: '/explore',
                element: <ProtectedRoute><Explore /></ProtectedRoute>,
            },
            {
                path: '/messages',
                element: <ProtectedRoute><Messages /></ProtectedRoute>,
            },
            {
                path: '/notifications',
                element: <ProtectedRoute><Notifications /></ProtectedRoute>,
            },
            {
                path: '/bookmarks',
                element: <ProtectedRoute><Bookmarks /></ProtectedRoute>,
            },
            {
                path: '/grok',
                element: <ProtectedRoute><Grok /></ProtectedRoute>,
            },
            {
                path: '/premium',
                element: <ProtectedRoute><Premium /></ProtectedRoute>,
            },
            {
                path: '/profile/:id',
                element: <ProtectedRoute><Profile /></ProtectedRoute>,
            },
            
            
        ]
    },
    {
        path: '/login',
        element: <Login />,
    },
    {
        path: '*',
        element: <Navigate to='/' />,
    }
])

export default router; 