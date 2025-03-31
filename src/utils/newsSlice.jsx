import { createSlice } from "@reduxjs/toolkit";
export const counterSlice = createSlice({
  name:"counter",
  initialState:{
    setNewsOne : null,
  },
  reducers:{
    addNewsOne: (state, action) =>{
      state.setNewsOne = action.payload
    },
  },
})
export const {addNewsOne} = counterSlice.actions;
export default counterSlice.reducer

