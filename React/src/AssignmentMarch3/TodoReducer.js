const TodosReducer=(state,action)=>{
    console.log(state);
    console.log(action);
    if (action.type == "add"){
        let ObjectTodo={
            item : action.value1,
            status :action.value2
        }
        return [...state,ObjectTodo]
    }
    if (action.type == "deletetodo"){
        let newState = state.filter((val,index)=>{
            if(index==action.index){
                return false;
            }
            else{
                return true;
            }
        })
        return newState;
    }
    if(action.type == "deleteAll"){
        return [];
      }
}
export default TodosReducer;