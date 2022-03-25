import { useContext ,useState} from "react";
import TodoContext from "./TodoContext";

const TodoDisplay =()=>{
    const [todo,setTodo] = useState("");
    const [status,setStatus] = useState("");
    const {state,dispatch}= useContext(TodoContext);
    console.log({dispatch})
    return(
        <div>
            <div className="Todo-div">
            <h1 className="Todo-heading">Todo App</h1>
                <input type = "text" name="todo" placeholder="Enter a Todo item" onInput ={(event)=>{setTodo(event.target.value)}}/>
                <select name="status" onChange ={(event)=>{setStatus(event.target.value)}}>
                    <option value="compelete">Complete</option>
                    <option value="incomplete">Incomplete</option>
                </select>
                <button onClick={()=>{dispatch({type:'add',value1:todo,value2:status})}}>Add Todo</button>
            <div>
            <h1 className="Todo-heading">List of Todos</h1>
              {
                state.map((val,index)=>{
                  if(val !=""&&val!=""){
                    return(
                      <div>
                        <p className="Todo-Para">Todo Item :  {val.item}</p>
                        <p className="Todo-Para">Status : {val.status}</p>
                        <button onClick={()=>{dispatch({type:'deletetodo',index:index})}}>Delete</button>
                      </div>
                    )
                  }
                })
              }
              <button onClick={()=>{dispatch({type:'deleteAll'})}}>Delete All Todos</button>
            </div>
        </div>
        </div>
    )
}
export default TodoDisplay;
