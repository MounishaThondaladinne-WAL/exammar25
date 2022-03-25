import { useReducer } from "react";
import TodosReducer from "./TodoReducer";
import TodoContext from "./TodoContext";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
const TodoMainApp=()=>{
    const initialstate= [{ item: " ", status: " " }]
    const [state,dispatch]=useReducer(TodosReducer,initialstate);
    console.log(state);
    const reducervalue={state,dispatch}
    console.log(reducervalue);
    return(
        <div className="TodoApp">
        <TodoContext.Provider value={reducervalue}>
            <TodoForm/>
            <TodoList/>
        </TodoContext.Provider>
        </div>
    )
}
export default TodoMainApp;