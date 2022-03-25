const intialValue = {count :0,title:"Redux App"};
const CountReducer=(state=intialValue,action)=>{
    console.log(state);
    console.log(action);
    if (action.type=='increase'){
        return{
            count:state.count+action.step ,title :state.title
        }
    }
    if (action.type=="decrease"){
        return{count:state.count-action.step}
    }
    return state;
}
export default CountReducer;