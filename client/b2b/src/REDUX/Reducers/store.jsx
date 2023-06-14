import { configureStore } from '@reduxjs/toolkit'
import { signup } from './auth/UserSlice';
import { group } from './groups/GroupSlice';
import { setupListeners } from '@reduxjs/toolkit/dist/query';

const store = configureStore({
    reducer: {
        [signup.reducerPath]: signup.reducer,
        [group.reducerPath]: group.reducer,

    },

    middleware: (authMiddleware) =>
        authMiddleware().concat(signup.middleware).concat(group.middleware)
});

setupListeners(store.dispatch)

export default store