import { createSlice } from "@reduxjs/toolkit";

// Function to check if a token is present in cookies (Fixed logic)
const isTokenPresentInCookies = () => {
    const token = document.cookie.split(';').find(cookie => cookie.trim().startsWith('token='));
    return token ? token.split('=') [1] : null; // Return true if token exists, otherwise false
};

// Function to load user from localStorage
const loadUserAndTokenFormLocalStorage = () => {
    try {
        const serializedState = localStorage.getItem('user');
        const token = isTokenPresentInCookies();

        if (serializedState === null || !token) {
            return { user: null, token: null };
        }
        return { user: JSON.parse(serializedUser), token };
    } catch (error) {
        return { user: null, token: null };
    }
}

// Initial state loaded from localStorage
const initialState = loadUserAndTokenFormLocalStorage();

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setUserAndToken: (state, action) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
            // Save the user to localStorage after setting it in state
            localStorage.setItem('user', JSON.stringify(state.user));
             document.cookie = `token=${state.token}; path=/; secure`;
        },
        logout: (state) => {
            state.user = null;
            state.token = null;
            localStorage.removeItem('user');
           document.cookie = "token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT"; // Remove token cookie

        }
    }
});

// Export the actions properly
export const { setUserAndToken, logout } = authSlice.actions;

// Export the reducer for configuring the store
export default authSlice.reducer;
