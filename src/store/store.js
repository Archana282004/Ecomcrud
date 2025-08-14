import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "./reducers/auth";
import productReducer from './reducers/product'



const store = configureStore({
    reducer: {
        auth: AuthSlice,
        product: productReducer,
    },
});

export default store;