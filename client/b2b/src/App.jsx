import { useRoutes } from "react-router-dom";
import "./App.css";
import sellerRoutes from "./Router/SellerRoutes";
import { useEffect, useState } from "react";
import UserRoute from "./Router/UserRoute";
import AdminRoute from "./Router/AdminRoute";
import LoggedOutRoutes from "./Router/LoggedOutRoutes";
import { useCookies } from "react-cookie";

function App() {

  const [roleChecker, setRoleChecker] = useState("");
  const [cookie, setCookie] = useCookies(['userRole']);

  const routesManager = () => {
    try {
      console.log(cookie.userRole);
      setRoleChecker(cookie.userRole);
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    routesManager();
    console.log(roleChecker)
  }, [])

  
  const seller = useRoutes(sellerRoutes);
  const userRouting = useRoutes(UserRoute);
  const admin = useRoutes(AdminRoute);
  const loggedOut = useRoutes(LoggedOutRoutes);

  let routes;

  switch (roleChecker) {
    case "Seller":
      routes = seller;
      break;
    case "User":
      routes = userRouting;
      break;
    case "Admin":
      routes = admin;
      break;
    default:
      routes = loggedOut;
      break;
  }

  return <>
    
      { routes }
    
  </>;
}
// dekh rha haina ? han karo

export default App;
