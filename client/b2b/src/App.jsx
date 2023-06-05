import { useRoutes } from "react-router-dom";
import "./App.css";
import sellerRoutes from "./Router/SellerRoutes";
import { useContext, useState } from "react";
import { emailContext } from "./contexts/SignupContext";
import { useGetRoleMutation } from "./REDUX/Reducers/auth/UserSlice";
import { useEffect } from "react";
import UserRoute from "./Router/UserRoute";
import AdminRoute from "./Router/AdminRoute";
import LoggedOutRoutes from "./Router/LoggedOutRoutes";

function App() {
  const { email } = useContext(emailContext);
  const [getRole, { isLoading, isError }] = useGetRoleMutation();
  const [roleChecker, setRoleChecker] = useState("");

  const verifyRole = () => {
    if (!isError) {
      getRole(email)
        .then((res) => setRoleChecker(res.data.roles))
        .catch((err) => {
          console.log(err);
        });
    } else {
      return alert("CHECK ROUTING LOGIC");
    }
  };

  useEffect(() => {
    verifyRole();
  }, []);

  useEffect(() => {
    console.log(roleChecker, "rolee here");
  }, [roleChecker]);

  const seller = useRoutes(sellerRoutes);
  const user = useRoutes(UserRoute);
  const admin = useRoutes(AdminRoute);
  const loggedOut = useRoutes(LoggedOutRoutes);

  return <>{email === "" ? seller : user}</>;
}

export default App;
