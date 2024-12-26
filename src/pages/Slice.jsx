import { useSelector,useDispatch } from "react-redux";
import { Decrement, Increment } from "../counterSlice";
import { changeColor } from "../mycolor";


const Slice=()=>{
    const count=useSelector((state)=>state.myCounter.cnt)
    const clr=useSelector((state)=>state.mycolor.color)
    const dispatch=useDispatch();

    return(
        <>
       
        <center>
        <h1>The Slice Page</h1>
      <h1>The  My Counter App</h1>
      <button onClick={()=>{dispatch(Increment())}}>Increment</button>
      <h1>{count}</h1>
      <button onClick={()=>{dispatch(Decrement())}}>Decrement</button>
      <br/><br/>

      <div style={{width:"300px", height:"300px", border:"1px solid green" , backgroundColor:clr}}>
        <button onClick={()=>{dispatch(changeColor())}}style={{marginTop:"150px"}}>click here</button>
    </div>
    </center>
        
        </>
    )
}

export default Slice