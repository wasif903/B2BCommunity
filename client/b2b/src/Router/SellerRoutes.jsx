import Login from "../Pages/Auth/Login";
import Welcome from "../Pages/Auth/Welcome";

const sellerRoutes = [

    {
        path: '/',
        element: <Welcome />
    },
    {
        path: '/login',
        element: <Login />
    },

]

export default sellerRoutes;