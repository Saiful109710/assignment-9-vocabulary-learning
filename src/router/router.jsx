import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Error from "../Pages/Error";
import Home from "../Pages/Home";
import StartLearning from "../Pages/StartLearning";
import Tutorials from "../Pages/Tutorials";
import AboutUs from "../Pages/AboutUs";
import Login from "../Pages/Login";
import Register from "../Pages/Register";

const router = createBrowserRouter([
    {
        path:'/',
        element:<MainLayout></MainLayout>,
        errorElement:<Error></Error>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/startLearning',
                element:<StartLearning></StartLearning>
            },
            {
                path:'/tutorials',
                element:<Tutorials></Tutorials>
            },
            {
                path:'/aboutUs',
                element:<AboutUs></AboutUs>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            }
        ]
    }
    
])

export default router
