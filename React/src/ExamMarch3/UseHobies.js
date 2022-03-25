import { useState } from "react";
function Hobbies() {
    let [hobby,addHobby,deleteHobby,RemoveAll] = UseHobbies()
}
const UseHobbies =()=>{ 
    let [hobby, setHobby] = useState([{ hobby: "" }, { description: "" },{Date :""}])
    let addHobby = (event) => {
        event.preventDefault()
        let replyHobby = { description: event.target.description.value, hobby: event.target.hobby.value ,Date:event.target.date.value}
        let newHobby = [...hobby, replyHobby]
        setHobby(newHobby)
    }
    let deleteHobby =(valuetodelete)=>{  
        let newHobby = hobby.filter(function(val){
            if(valuetodelete==val){
                return false;
            }
            return true;
        });
        setHobby(newHobby)
    }
    let RemoveAll =()=>{
        setHobby([]);
    }
    return([hobby,addHobby,deleteHobby,RemoveAll])
}
export default Hobbies;