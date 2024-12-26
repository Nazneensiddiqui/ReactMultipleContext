import { createSlice } from "@reduxjs/toolkit";

const todoSlice=createSlice({
    name:"MyTodo",
    initialState:{
        task:[]
    },
    reducers:{
        AddTask:(state, actions)=>{
            state.task.push(actions.payload)
        },
        deletTask:(state, actions)=>{
            state.task=state.task.filter(key=>key.id!==actions.payload)
        },
         Uncomplited:(state,actions)=>{
            const item = state.task.find(key=>key.id ===actions.payload)
            if(item) item.status=false
        },
        Complited:(state, actions)=>{
            const item=state.task.find(key=>key.id===actions.payload)
            if(item) item.status = true
        },
        EditTask:(state, actions)=>{
            const item=state.task.find(key=>key.id===actions.payload.id)
            if(item) item.work=actions.payload.work
        }
    }
})
export const {AddTask , deletTask , Uncomplited, Complited , EditTask}=todoSlice.actions;
export default todoSlice.reducer