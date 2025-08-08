import { createSlice } from "@reduxjs/toolkit";

const  initialState = {
        isLoggedIn : localStorage.getItem('token') ? true : false
};

const AuthSlice = createSlice({
    name:'auth',
    initialState,
    reducers: {
        login: (state) => {
            state.isLoggedIn = true},
        logout: (state) => {
            state.isLoggedIn = false
        },
    },

});

export default AuthSlice.reducer    ;

export const { login, logout } = AuthSlice.actions;

export const isLogSelector = (state) => state.auth.isLoggedIn;
