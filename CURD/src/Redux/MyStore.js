import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "../Redux/UseSlice"
const MyStore =configureStore({
    reducer:{
    user:UserReducer
    }
})

export default MyStore;