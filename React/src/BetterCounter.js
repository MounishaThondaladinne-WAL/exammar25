import {useState} from "react";
import {Outlet} from "react-router-dom"
function BetterCounter(){
  let [count,setCount,increase,decrease,reset]= useSupportFunction()
    return(
        <div>
            <Outlet/>
            count ={count}
            <br/>
            <button onClick = {increase}>increase</button>
            <button onClick = {decrease}>decrease</button>
            <button onClick = {reset}>Reset</button>
        </div>
    );
}
const useSupportFunction =()=>{
    let [count,setCount] = useState(0);
    
    function increase(){
        setCount(count +1)
    }
    function decrease(){
        setCount(count -1)
    }
    function reset(){
        
        setCount(0)
    }
    return [count,setCount,increase,decrease,reset]
}
export default BetterCounter;