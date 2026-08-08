import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counterSlice";

//store bana rhe hai.
export const store= configureStore({
  reducer:{
    counter:counterReducer
  }
})