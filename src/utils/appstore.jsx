import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice.jsx";
const appStore = configureStore({

  reducer:{
    news: counterReducer,

  },
});
export default appStore;
