import Login from "../Pages/Auth/Login";
import OtpAuth from "../Pages/Auth/OtpAuth";
import Welcome from "../Pages/Auth/Welcome";
import ManageUser from "../Pages/ManageData/ManageUser";
import ManageWholesellers from "../Pages/ManageData/ManageWholesellers";
import NewRequest from "../Pages/ManageData/NewRequest";
import AllMembers from "../Pages/ManageData/AllMembers";

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
];

export default sellerRoutes;
