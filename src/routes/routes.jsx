import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import MainLayout from "../layouts/MainLayout";
import Favourites from "../pages/Favourites";
import About from "../pages/About";
import PhoneDetails from "../pages/PhoneDetails";
import ErrorPage from "../pages/ErrorPage";

export const router = createBrowserRouter([
    {
        path: '/',
        Component: MainLayout,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home/>,
                loader: () => fetch('phones.json')
            },

            {
                path: '/favourites',
                Component: Favourites,
            },

            {
                path: '/about',
                element: <About />,
            },

            {
                path: '/phone-details',
                element: <PhoneDetails />,
            },
        ]
    },

])
