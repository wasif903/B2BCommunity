import OtpAuth from "../Pages/Auth/OtpAuth";
import Home from "../Pages/HomePage/Home";
import ManageUser from "../Pages/ManageData/ManageUser";
import NewRequest from "../Pages/ManageData/NewRequest";
import AllMembers from "../Pages/ManageData/AllMembers";
import WholeSellerPanel from "../Pages/WholeSellerpanel/WholeSellerPanel";
import GroupContent from "../Pages/groupContent/GroupContent";
import { Navigate } from "react-router-dom";
import Comments from "../Components/Comment/Comments";

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
    path: "/New-Request/:id",
    element: <NewRequest />,
  },
  {
    path: "/All-Members/:id",
    element: <AllMembers />,
  },
  {
    path: "/WholeSeller-panel/:id",
    element: <WholeSellerPanel />,
  },
  {
    path: "/Group-Content/:id",
    element: <GroupContent />,
  },
  {
    path: "/Comments",
    element: <Comments />,
  },
  {
    path: "*",
    element: <Navigate to="/Home" />,
  },
];

export default sellerRoutes;
