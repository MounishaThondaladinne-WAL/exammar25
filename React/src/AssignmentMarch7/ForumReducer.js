const ForumReducer=(state,action)=>{
    console.log(state);
    console.log(action);
    if (action.type == "add"){
        let userOb={
            user : action.value1,
            topic :action.value2,
            time :action.value3,
        }
        localStorage.setItem("FORUM DETAILS",JSON.stringify([...state,userOb]));
        return [...state,userOb]
    }
    if(action.type=="deletetopic"){
        let newState = state.filter((val,index)=>{
            if(index==action.index){
                return false;
            }
            else{
                return true;
            }
        })
        localStorage.setItem("FORUM DETAILS",JSON.stringify(newState))
        return newState;
    }
    if (action.type == "deleteForums") {
        let newState = state.filter((val, ind) => {
          if (new Date().getFullYear() - new Date(val.time).getFullYear() >= 1) {
            return true;
          } else if (new Date().getMonth() - new Date(val.time).getMonth() >= 1) {
            return true;
          } else if (new Date().getDay() - new Date(val.time).getDay() >= 1) {
            return true;
          } else if (new Date().getHours() - new Date(val.time).getHours() >= 1) {
            return true;
          } else if (
            new Date().getMinutes() - new Date(val.time).getMinutes() >
            5
          ) {
            return true;
          } else {
            return false;
          }
        });
        localStorage.setItem("FORUM DETAILS", JSON.stringify(newState));
        return newState;
      }
}
export default ForumReducer;
