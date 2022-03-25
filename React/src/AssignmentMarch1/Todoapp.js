import { useReducer } from "react";
import TodosReducer from "./TodoReducer";
import TodoContext from "./TodoContext";
import TodoDisplay from "./TodoDisplay";
const Todos=()=>{
    const initialstate= [{ item: "Reading", status: "complete" }, { item: "Gardening", status: "incomplete" }]
    const [state,dispatch]=useReducer(TodosReducer,initialstate);
    console.log(state);
    const reducervalue={state,dispatch}
    console.log(reducervalue);
    return(
        <div>
        <TodoContext.Provider value={reducervalue}>
            <TodoDisplay/>
        </TodoContext.Provider>
        </div>
    )
}
export default Todos;