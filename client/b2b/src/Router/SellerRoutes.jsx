import AdminPanel from "../Pages/AdminPanel/AdminPanel";
import Login from "../Pages/Auth/Login";
import OtpAuth from "../Pages/Auth/OtpAuth";
import Signup from "../Pages/Auth/Signup";
import Welcome from "../Pages/Auth/Welcome";
import Home from "../Pages/HomePage/Home";
import ManageUser from "../Pages/ManageData/ManageUser";
import ManageWholesellers from "../Pages/ManageData/ManageWholesellers";
import NewRequest from "../Pages/ManageData/NewRequest";
import AllMembers from "../Pages/ManageData/AllMembers";
import WholeSellerPanel from "../Pages/WholeSellerpanel/WholeSellerPanel";
import GroupContent from "../Pages/groupContent/GroupContent";
import AllGroup from "../Pages/ManageData/AllGroup";
import ManageGroup from "../Pages/ManageData/ManageGroup";

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
    path: "/home",
    element: <Home />,
  },
  {
    path: "/signup",
    element: <Signup />,
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
    path: "/All-Group",
    element: <AllGroup />,
  },
  {
    path: "/Manage-Group",
    element: <ManageGroup />,
  },
];


export default sellerRoutes;
