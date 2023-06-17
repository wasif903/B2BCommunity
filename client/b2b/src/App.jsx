import { useRoutes } from "react-router-dom";
import "./App.css";
import sellerRoutes from "./Router/SellerRoutes";
import { useEffect, useState } from "react";
import UserRoute from "./Router/UserRoute";
import AdminRoute from "./Router/AdminRoute";
import LoggedOutRoutes from "./Router/LoggedOutRoutes";
import { useCookies } from "react-cookie";

function App() {

  // eslint-disable-next-line no-unused-vars
  const [cookie, setCookie] = useCookies(['userRole']);

  
  useEffect(() => {
   
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cookie])

  
  const seller = useRoutes(sellerRoutes);
  const userRouting = useRoutes(UserRoute);
  const admin = useRoutes(AdminRoute);
  const loggedOut = useRoutes(LoggedOutRoutes);

  let routes;

  switch (cookie.userRole) {
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

export default App;
