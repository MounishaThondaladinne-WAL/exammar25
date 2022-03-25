import { useContext ,useState} from "react";
import TodoContext from "./TodoContext";

const TodoForm=()=>{
    const [todo,setTodo] = useState("");
    const [status,setStatus] = useState("");
    const {dispatch}= useContext(TodoContext);
    console.log({dispatch})
    return(
            <div>
            <h1 className="Todo-heading">Todo App</h1>
                <input type = "text" name="todo" placeholder="Enter a Todo item" onInput ={(event)=>{setTodo(event.target.value)}}
                 className="Todo-element"/>
                <select name="status" onChange ={(event)=>{setStatus(event.target.value)}} className="Todo-element">
                    <option value="compelete">Complete</option>
                    <option value="incomplete">Incomplete</option>
                </select>
                <button onClick={()=>{dispatch({type:'add',value1:todo,value2:status})}}className="Todo-element">Add Todo</button>
            
        </div>
    )
}
export default TodoForm;
