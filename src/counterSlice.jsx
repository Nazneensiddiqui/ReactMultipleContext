import { createSlice } from "@reduxjs/toolkit";
const counterSlice=createSlice({
    name:"myCounter",
    initialState:{
        cnt:0
    },
    reducers:{
        Increment:(state)=>{
            state.cnt=state.cnt+10;
        },
        Decrement:(state)=>{
            state.cnt=state.cnt-10
        }
    }
})
export const {Increment,Decrement}=counterSlice.actions;
export default counterSlice.reducer;