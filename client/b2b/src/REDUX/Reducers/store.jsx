import { configureStore } from '@reduxjs/toolkit'
import { signup } from './auth/UserSlice';
import { group } from './groups/GroupSlice';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { posts } from './posts/posts';
import { comments } from './comments/Comments';

const store = configureStore({
    reducer: {
        [signup.reducerPath]: signup.reducer,
        [group.reducerPath]: group.reducer,
        [posts.reducerPath]:posts.reducer,
        [comments.reducerPath]:comments.reducer

    },

    middleware: (authMiddleware) =>
        authMiddleware().concat(signup.middleware).concat(group.middleware).concat(posts.middleware).concat(comments.middleware)
});

setupListeners(store.dispatch)

export default store