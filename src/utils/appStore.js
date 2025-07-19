import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import User from "../components/User";
const appStore=configureStore({
   reducer:{
    cart:cartReducer,
   
   },
});


export default appStore;