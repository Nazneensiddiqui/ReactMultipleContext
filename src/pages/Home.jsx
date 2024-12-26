import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { AddTask, Complited, deletTask, Uncomplited , EditTask} from "../Todoapp";

const Home=()=>{
    const [Input , setInput]=useState("")
    const[btnStatus, setBtnStatus]=useState(true);
    const [myid, setMyid]=useState("")
    const mywork=useSelector((state)=>state.MyTodo.task);
    const dispatch=useDispatch();

    const handleSubmit=()=>{
        dispatch(AddTask({id:Date.now() , work:Input , status:false}))
    }

    const DeletData=(id)=>{
      dispatch(deletTask(id))
    }

    const Complition=(id , status)=>{
         if(status)
         {
            dispatch(Uncomplited(id))
         }
         else{
            dispatch(Complited(id))
         }
    }

    const EditData=(id, work)=>{
         setInput(work)
         setMyid(id)
         setBtnStatus(false)
    }

    const EditSave=()=>{
        dispatch(EditTask({id:myid , work:Input}))
        setInput("")
        setBtnStatus(true)
    }


let sno=0;
const ans=mywork.map((key)=>{
 sno++;
 return(
     <>
    <tr>
        <td>{sno}</td>
        <td>{key.status ? (<span style={{color:"red", textDecoration:"line-through"}}>{key.work}</span>):
        (<span style={{color:"black", textDecoration:"none"}}>{key.work}</span>)}</td>
        <td><button onClick={()=>{Complition(key.id , key.status)}}>{key.status? "Uncomplited" : " Complited"}</button></td>
        <td><button onClick={()=>{DeletData(key.id)}}>Delete</button></td>
        <td><button onClick={()=>{EditData(key.id , key.work)}}>Edit</button></td>
    </tr>
    </>
 )
})

    return(
        <>
        <center>
        <h1>The Home Page</h1> 
        <h1> The Todo App For Tool@Kit React Redux </h1> 
        Enter Your Task :  <input type="text" value={Input} onChange={(e)=>{setInput(e.target.value)}}/>
        {btnStatus?(<button onClick={handleSubmit}>Add</button> ): (<button onClick={EditSave}>EditSave</button> )}
       
        <hr/>
        <table border="1px" width={500} align="center" bgcolor="pink">
            <tr>
                <th>S. No.</th>
                <th>Task Name</th>
                <th>Status</th>
                <th>Delete</th>
                <th>Edit</th>
            </tr>
            {ans}
            </table> 
        </center>
       
        
        </>
    )
}

export default Home