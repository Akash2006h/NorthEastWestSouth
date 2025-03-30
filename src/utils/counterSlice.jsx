import { createSlice } from "@reduxjs/toolkit";
export const counterSlice = createSlice({
  name:"counter",
  initialState:{
    addnews : null,
  },
  reducer:{
    newsOne: (state, action) =>{
      addnews.state = action.payload
    },
  },
})
export const {newsOne} = counterSlice.actions;
export default counterSlice.reducer

