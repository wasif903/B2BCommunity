import Login from "../Pages/Auth/Login";
import OtpAuth from "../Pages/Auth/OtpAuth";
import Signup from "../Pages/Auth/Signup";
import Welcome from "../Pages/Auth/Welcome";
import Home from "../Pages/HomePage/Home";
import AllMembers from "../Pages/ManageData/AllMembers";
import GroupContent from "../Pages/groupContent/GroupContent";
import AllGroup from "../Pages/ManageData/AllGroup";


const UserRoute = [
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
    path: "/Otp-auth",
    element: <OtpAuth />,
  },

  {
    path: "/All-Members",
    element: <AllMembers />,
  },
  {
    path: "/Group-Content",
    element: <GroupContent />,
  },
  {
    path: "/All-Group",
    element: <AllGroup />,
  },
];

export default UserRoute;
