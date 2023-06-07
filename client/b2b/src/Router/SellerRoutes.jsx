import OtpAuth from "../Pages/Auth/OtpAuth";
import Home from "../Pages/HomePage/Home";
import ManageUser from "../Pages/ManageData/ManageUser";
import NewRequest from "../Pages/ManageData/NewRequest";
import AllMembers from "../Pages/ManageData/AllMembers";
import WholeSellerPanel from "../Pages/WholeSellerpanel/WholeSellerPanel";
import GroupContent from "../Pages/groupContent/GroupContent";
import ManageGroup from "../Pages/ManageData/ManageGroup";
import { Navigate } from "react-router-dom";

const sellerRoutes = [

 
  {
    path: "/home",
    element: <Home />,
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
    path: "/New-Request",
    element: <NewRequest />,
  },
  {
    path: "/All-Members",
    element: <AllMembers />,
  },
  {
    path: "/WholeSeller-panel",
    element: <WholeSellerPanel />,
  },
  {
    path: "/Group-Content",
    element: <GroupContent />,
  },
  {
    path: "/Manage-Group",
    element: <ManageGroup />,
  },
  {
    path: "*",
    element: <Navigate to="/Home"/> ,
  },
];

export default sellerRoutes;
