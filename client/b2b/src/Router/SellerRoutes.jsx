import Login from "../Pages/Auth/Login";
import OtpAuth from "../Pages/Auth/OtpAuth";
import Welcome from "../Pages/Auth/Welcome";
import Home from "../Pages/HomePage/Home";
import ManageUser from "../Pages/ManageData/ManageUser";

const sellerRoutes = [
  {
    path: "/",
    element: <Welcome />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/Otp-auth",
    element: <OtpAuth />,
  },
  {
    path: "/Manage-User",
    element: <ManageUser />,
  },
  {
    path: "/home",
    element: <Home />,
  },
 
];

export default sellerRoutes;
