import { createBrowserRouter } from "react-router-dom";
import LandingPage from "../LayOut/LandingPage";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import PhoneSignUp from "../Pages/PhoneSignUp/PhoneSignUp";




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
        },
        {
            path: '/phoneSign',
            element: <PhoneSignUp></PhoneSignUp>
        },

    ]

}]);

export default router;