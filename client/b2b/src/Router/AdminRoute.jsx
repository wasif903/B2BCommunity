import AdminPanel from "../Pages/AdminPanel/AdminPanel";
import OtpAuth from "../Pages/Auth/OtpAuth";
import Home from "../Pages/HomePage/Home";
import ManageUser from "../Pages/ManageData/ManageUser";
import ManageWholesellers from "../Pages/ManageData/ManageWholesellers";
import NewRequest from "../Pages/ManageData/NewRequest";
import AllMembers from "../Pages/ManageData/AllMembers";
import WholeSellerPanel from "../Pages/WholeSellerpanel/WholeSellerPanel";
import GroupContent from "../Pages/groupContent/GroupContent";
import AllGroup from "../Pages/ManageData/AllGroup";
import ManageGroup from "../Pages/ManageData/ManageGroup";
import AddWholeSeller from "../Pages/Auth/AddWholeSeller";
import { Navigate } from "react-router-dom";
import Detail from "../Components/Detail";

const AdminRoute = [
  {
    path: "/home",
    element: <Home />,
  },

  {
    path: "/admin-panel",
    element: <AdminPanel />,
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
    path: "/Manage-Wholeseller",
    element: <ManageWholesellers />,
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
    path: "/WholeSeller-panel",
    element: <WholeSellerPanel />,
  },
  {
    path: "/Group-Content/:id",
    element: <GroupContent />,
  },
  {
    path: "/All-Group",
    element: <AllGroup />,
  },
  {
    path: "/Manage-Group/:id",
    element: <ManageGroup />,
  },
  {
    path: "/add-wholeSeller",
    element: <AddWholeSeller />,
  },
  {
    path: "/User-Detail",
    element: <Detail />,
  },
  {
    path: "*",
    element: <Navigate to="/home" />,
  },
];

export default AdminRoute;
