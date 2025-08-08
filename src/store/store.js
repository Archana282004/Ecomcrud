import { configureStore } from "@reduxjs/toolkit"; 
import AuthSlice from "./reducers/auth";


const store = configureStore({
    reducer :{
        auth: AuthSlice,
    },
});

export default store;