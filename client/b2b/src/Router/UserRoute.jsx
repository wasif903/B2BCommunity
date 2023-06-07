import OtpAuth from "../Pages/Auth/OtpAuth";
import Home from "../Pages/HomePage/Home";
import AllMembers from "../Pages/ManageData/AllMembers";
import GroupContent from "../Pages/groupContent/GroupContent";
import AllGroup from "../Pages/ManageData/AllGroup";
import { Navigate } from "react-router-dom";


const UserRoute = [
 
  {
    path: "/home",
    element: <Home />,
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
  {
    path: "*",
    element: <Navigate to="/home"/> ,
  },
];

export default UserRoute;
