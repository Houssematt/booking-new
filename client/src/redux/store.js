import { configureStore } from "@reduxjs/toolkit";
import UserReducer from './userSlice'


export const Store = configureStore({
    reducer:{
        User : UserReducer
    }
})