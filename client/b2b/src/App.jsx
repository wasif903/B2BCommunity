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
  // eslint-disable-next-line no-unused-vars
  const [cookie, setCookie] = useCookies(['userRole']);

  
  useEffect(() => {
    setRoleChecker(cookie.userRole);
    // routesManager();
    console.log(roleChecker)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cookie])

  
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
