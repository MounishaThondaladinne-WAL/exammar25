import { useState } from "react";
import { useContext } from "react";
import ForumContext from "./ForumContext";
const ForumForm =()=>{
   const [user , setUser] = useState("");
   const [topic , setTopic] = useState("");
   const {state,dispatch}= useContext(ForumContext);
    return(
        <div className="Forum-Div">
            <h1>FORUM APP</h1>
            <textarea name ="topic" placeholder="Forum Topic" onInput={(event)=>{setTopic(event.target.value)}} className="description"></textarea>
            <select name ="users" onChange ={(event)=>{setUser(event.target.value)}} className="users">
                <option value ="User1">User1</option>
                <option value="User2">User2</option>
                <option value="User3">User3</option>
            </select>
            <button onClick ={()=>{dispatch({type:"add",value1:user,value2:topic,value3: new Date().toGMTString()})}}className="button">Add Topic</button>
            <button onClick={()=>dispatch({type:"deleteForums"})} className="button">Delete Forums</button>
           </div>
    )

}
export default ForumForm;