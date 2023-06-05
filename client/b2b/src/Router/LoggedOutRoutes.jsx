import { Navigate } from "react-router-dom";
import Login from "../Pages/Auth/Login";
import OtpAuth from "../Pages/Auth/OtpAuth";
import Signup from "../Pages/Auth/Signup";
import Welcome from "../Pages/Auth/Welcome";
import Home from "../Pages/HomePage/Home";


const LoggedOutRoutes = [
  {
    path: "/",
    element: <Welcome />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/otp-auth",
    element: <OtpAuth />,
  },
  {
    path: "*",
    element: <Navigate to='/' />,
  },
];

export default LoggedOutRoutes;
