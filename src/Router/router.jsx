import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home";
import Message from "../pages/Message";
import Profile from "../pages/Profile";
import Login from "../pages/Login";
import Signin from "../pages/Signin";

export const router=createBrowserRouter([
    {
        path:'/',
        element:<Main />,
        children:[
            {
                path:'/',
                element:<Home />
            },
            {
                path:'/message',
                element:<Message />
            },
            {
                path:'/profile',
                element:<Profile />
            },
            {
                path:'/login',
                element:<Login />
            },
            {
                path:'/signin',
                element:<Signin />
            }

        ]
    }
])