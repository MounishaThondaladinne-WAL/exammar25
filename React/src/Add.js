import { useState } from "react";
const Add = ()=>{
    let [result,setResult] = useState(0);
    let doAddition = (a,b)=>{
        setResult(a+b)
    };
    return (
        <div>
            The addition result = {result}
            <br/>
            <button onClick={()=>{
                doAddition(4,5)
            }}>Add</button>
        </div>
    );
}
export default Add;