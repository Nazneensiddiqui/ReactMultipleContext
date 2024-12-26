import { configureStore } from "@reduxjs/toolkit";
import myRducer from "./counterSlice"
import colorReducer from "./mycolor"
import myTodoReducer from "./Todoapp"
const Store=configureStore({
    reducer:{
        //Reducer
        myCounter:myRducer,
        mycolor:colorReducer,
        MyTodo:myTodoReducer
    }
})
export default Store;