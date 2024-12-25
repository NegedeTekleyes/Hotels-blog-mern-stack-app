import { configureStore } from '@reduxjs/toolkit';
import { blogApi } from './feature/blogs/blogsApi';
import authApi from './feature/auth/authApi';
import authReducer from "./feature/auth/authSlice"
import commentApi from './feature/comments/commentApi';

export const store = configureStore({
    reducer: {
        [blogApi.reducerPath]: blogApi.reducer,
        [authApi.reducerPath]: authApi.reducer,
                [commentApi.reducerPath]: commentApi.reducer,

        auth: authReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(blogApi.middleware, authApi.middleware, commentApi.middleware),
    devTools: process.env.NODE_ENV !== 'production', // Enable DevTools in development mode
});


export default store;