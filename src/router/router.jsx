import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Error from "../Pages/ErrorPage";
import Home from "../Pages/Home";
import StartLearning from "../Pages/StartLearning";
import Tutorials from "../Pages/Tutorials";
import AboutUs from "../Pages/AboutUs";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import ErrorPage from "../Pages/ErrorPage";
import Lesson from "../Pages/Lesson";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Profile from "../Pages/Profile";
import MyProfile from "../components/myProfile/MyProfile";
import UpdateProfile from "../components/UpdateProfile/UpdateProfile";

const router = createBrowserRouter([
    {
        path:'/',
        element:<MainLayout></MainLayout>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
                loader:()=>fetch('/courses.json')
            },
            {
                path:'/startLearning',
                element:<StartLearning></StartLearning>
            },
            {
                path:'/tutorials',
                element:<PrivateRoute><Tutorials></Tutorials></PrivateRoute>,
                loader:async()=>{
                        const iframeRes = await fetch('/iframe.json');
                        const iframeData = await iframeRes.json(); 

                        const koreanLanguageRes = await fetch('/korean_language.json')
                        const koreanLanguageData = await koreanLanguageRes.json();

                        

                        return {iframeData,koreanLanguageData,}
                }
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
            },
            {
                path:'/lesson/:lesson_no',
                element:<PrivateRoute>
                    <Lesson></Lesson>
                </PrivateRoute>,
                loader:()=>fetch('/vocabulary_dataset.json')
            },
            {
                path:'/profile',
                element:<PrivateRoute><Profile></Profile></PrivateRoute>,
                children:[
                    {
                        path:'/profile',
                        element:<MyProfile></MyProfile>
                    },
                  
                    {
                        path:'myProfile',
                        element:<MyProfile></MyProfile>
                    },
                    {
                        path:'updateProfile',
                        element:<UpdateProfile></UpdateProfile>
                    }
                ]
            }
        ]
    }
    
])

export default router
