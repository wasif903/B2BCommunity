import OtpAuth from "../Pages/Auth/OtpAuth";
import Welcome from "../Pages/Auth/Welcome";


const sellerRoutes = [

    {
        path: '/',
        element: <Welcome />
    },
    {
        path: '/Otp-auth',
        element: <OtpAuth />
    },

]

export default sellerRoutes;