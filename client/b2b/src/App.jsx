import { useRoutes } from "react-router-dom";
import "./App.css";
import sellerRoutes from "./Router/SellerRoutes";
import { useContext } from "react";
import { userContext } from "./contexts/UserContext";
import UserRoute from "./Router/UserRoute";
import AdminRoute from "./Router/AdminRoute";
import LoggedOutRoutes from "./Router/LoggedOutRoutes";

function App() {
  const { user } = useContext(userContext);


  console.log(user?.user?.email, "user data here");

  const seller = useRoutes(sellerRoutes);
  const userRouting = useRoutes(UserRoute);
  const admin = useRoutes(AdminRoute);
  const loggedOut = useRoutes(LoggedOutRoutes);

  return <>{user === "" ? seller : loggedOut}</>;
}

export default App;
