import { useState } from "react";
const TodoApp = ()=>{
    let [todos,setTodos,addTodo,deleteTodoOb] = useTodoFunction()
    return(
        <div>
            <form onSubmit={addTodo}>
                <input type="text" name="item"/>
                <select name="status">
                    <option value="compelete">Complete</option>
                    <option value="incomplete">Incomplete</option>
                </select>
                <button>Add</button>
            </form>
            {todos.map((val,index)=>{
               return( 
                   <div className="App">Status:{val.status}<br/>
                   Todo:{val.item}
                   <button onClick={()=>{deleteTodoOb(index)}}>Delete</button>
                   </div>)
            })}
        </div>
    )
}
const useTodoFunction =()=>{
    let [todos,setTodos] = useState([
        {item:"Cook Break",status:"Complete"},
        {item:"coding",status:"incomplete"},
    ]);
    const addTodo = (event)=>{
        event.preventDefault();
        let todoObject = {
            item : event.target.item.value,
            status : event.target.status.value,
        }
        let newTodos = [...todos,todoObject]
        setTodos(newTodos)
    }
    let deleteTodoOb =(indexToDelete) =>{
        let newTodos = todos.filter(function(val,index){
            if(indexToDelete==index){
                return false;
            }
            return true;
        });
        setTodos(newTodos)
    }
    return [todos,setTodos,addTodo,deleteTodoOb]
}
export default TodoApp;