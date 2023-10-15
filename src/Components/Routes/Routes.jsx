import { createBrowserRouter } from "react-router-dom";
import LandingPage from "../LayOut/LandingPage";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";




const router = createBrowserRouter([{
    path: '/',
    element: <LandingPage></LandingPage>,
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
            path: '/register',
            element: <Register></Register>
        }

    ]

}]);

export default router;