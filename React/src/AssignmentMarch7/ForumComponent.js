import { useReducer } from "react";
import ForumForm from "./ForumForm";
import ForumList from "./ForumList";
import ForumContext from "./ForumContext";
import ForumReducer from "./ForumReducer";
const ForumComponent = ()=>{
    let initialState = []
    if(localStorage.getItem("FORUM DETAILS")){
        initialState = JSON.parse(localStorage.getItem("FORUM DETAILS"));
    }
    const [state,dispatch]=useReducer(ForumReducer,initialState);
    const reducervalue={state,dispatch}
    return(
        <div className="Forum-div">
            <ForumContext.Provider value ={reducervalue}>
            <ForumForm/>
            <ForumList/>
            </ForumContext.Provider>
        </div>
    )

}
export default ForumComponent;