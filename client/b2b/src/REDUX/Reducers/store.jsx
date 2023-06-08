import { configureStore } from '@reduxjs/toolkit'
import { signup } from './auth/UserSlice';
import { group } from './groups/GroupSlice';

const store = configureStore({
    reducer: {
        [signup.reducerPath]: signup.reducer,
        [group.reducerPath]: group.reducer,

    },

    middleware: (authMiddleware) =>
        authMiddleware().concat(signup.middleware).concat(group.middleware)
});

export default store