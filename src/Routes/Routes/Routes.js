import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import CourseDetails from "../../Pages/CourseDatails/CourseDetails";
import Courses from "../../Pages/Courses/Courses";
import ErrorElement from "../../Pages/ErrorElement/ErrorElement";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import RightSideNav from "../../Pages/RightSideNav/RightSideNav";
import Signup from "../../Pages/Signup/Signup";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorElement></ErrorElement>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <Signup></Signup>
            },
            {
                path: '/categories',
                loader: () => fetch('https://assignment-10-server-jet.vercel.app/categories'),
                element: <RightSideNav></RightSideNav>
            },
            {
                path: '/courses',
                loader: () => fetch('https://assignment-10-server-jet.vercel.app/courses'),
                element: <Courses></Courses>
            },
            {
                path: '/course/:id',
                loader: ({params}) => fetch(`https://assignment-10-server-jet.vercel.app/course/${params.id}`),
                element: <CourseDetails></CourseDetails>
            }
           
            
        ]
    }
])