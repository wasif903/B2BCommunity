import { configureStore } from '@reduxjs/toolkit'
import { signup } from './auth/UserSlice';


const store = configureStore({
    reducer: {
        [signup.reducerPath]: signup.reducer
    },

    middleware: (authMiddleware) =>
        authMiddleware().concat(signup.middleware),
});

export default store