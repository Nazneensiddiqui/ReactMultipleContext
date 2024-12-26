import { createSlice } from "@reduxjs/toolkit";

const mycolorSlice=createSlice({
    name:"mycolor",
    initialState:{
        color:"red"
    },
    reducers:{
        changeColor:(state)=>{
            state.color="blue"
        }
    }
})
export const {changeColor}=mycolorSlice.actions;
export default mycolorSlice.reducer;