import { useDispatch,useSelector } from "react-redux";
import { increaseAction,decreaseAction } from "./Actions";
const ReduxCounter =()=>{
    const dispatch = useDispatch();
    const count = useSelector((state)=>{
        console.log(state);
        return state.count;
    })
    const title = useSelector((state)=>{
        return state.title;
    })
    const increase=()=>{
        dispatch(increaseAction(2));
    }
    const decrease=()=>{
        dispatch(decreaseAction(3));
    };
    return(<div>
        <h1>{title}</h1>
        Count = {count}
        <button onClick={increase}>Increase</button>
        <button onClick={decrease}>Decrease</button>
    </div>)
}
export default ReduxCounter;