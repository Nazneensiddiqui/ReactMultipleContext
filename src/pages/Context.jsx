import { useState } from "react";

const Context=()=>{
    const[bgColor , setBgcolor]=useState("yellow")
    const [cnt, setcnt]=useState(0)
    return(
        <>
       <center>
        <h1>The Context Page</h1>
    <div style={{border:"1px solid red" , width:"200px", height:"200px", backgroundColor:bgColor}}></div>
    <button onClick={()=>{setBgcolor("red")}}>red</button>
    <button onClick={()=>{setBgcolor("green")}}>Green</button>
    <button onClick={()=>{setBgcolor("yellow")}}>Yellow</button>
    <button onClick={()=>{setBgcolor("black")}}>Black</button>
    <button onClick={()=>{setBgcolor("blue")}}>Blue</button>
    <button onClick={()=>{setBgcolor("purple")}}>Purple</button>
    <button onClick={()=>{setBgcolor("skyblue")}}>Skyblue</button>
    <button onClick={()=>{setBgcolor("brown")}}>Brown</button>
    <button onClick={()=>{setBgcolor("deeppink")}}>deeppink</button>
    <br/><br/>
    <button onClick={()=>{setcnt(cnt+100)}}>Increment</button>
    <h1>{cnt}</h1>
    <button onClick={()=>{setcnt(cnt-100)}}>Decrement</button>
    </center>
        
        </>
    )
}

export default Context