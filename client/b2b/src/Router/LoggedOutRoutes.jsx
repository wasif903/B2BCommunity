import { Navigate } from "react-router-dom";
import Login from "../Pages/Auth/Login";
import OtpAuth from "../Pages/Auth/OtpAuth";
import Signup from "../Pages/Auth/Signup";
import Welcome from "../Pages/Auth/Welcome";
import ForgetPass from "../Pages/forgetPassword/ForgetPass";
import EnterNewPass from "../Pages/forgetPassword/EnterNewPass";
import ForgetPassOtp from "../Pages/forgetPassword/ForgetPassOtp";

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
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/otp-auth",
    element: <OtpAuth />,
  },
  {
    path: "/Forget-pass",
    element: <ForgetPass />,
  },
  {
    path: "/Enter-New-pass",
    element: <EnterNewPass />,
  },
  {
    path: "/ForgetPass-Otp",
    element: <ForgetPassOtp />,
  },
  {
    path: "*",
    element: <Navigate to="/login" />,
  },
];

export default LoggedOutRoutes;
