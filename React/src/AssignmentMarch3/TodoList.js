import { useContext } from "react";
import TodoContext from "./TodoContext";

const TodoList=()=>{
    const {state,dispatch}= useContext(TodoContext);
    console.log({dispatch})
    return(
            <div>
            <h1 className="Todo-heading">List of Todos</h1>
              {
                state.map((val,index)=>{
                  if(val.item !=" "){
                    return(
                      <div className="Todo-Div">
                        <p >Todo Item :  {val.item}</p>
                        <p >Status : {val.status}</p>
                        <button onClick={()=>{dispatch({type:'deletetodo',index:index})}}className="Todo-Delete">Delete Todo</button>
                      </div>
                    )
                  }
                })
              }
              <button onClick={()=>{dispatch({type:'deleteAll'})}}className="Todo-element">Delete All Todos</button>
            </div>
    )
}
export default TodoList;
