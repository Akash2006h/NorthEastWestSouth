import { configureStore } from "@reduxjs/toolkit";
import newsReducer from "./newsSlice.jsx";
const appStore = configureStore({

  reducer:{
    news: newsReducer,

  },
});
export default appStore;
