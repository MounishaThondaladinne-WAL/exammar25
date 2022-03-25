import { useState } from "react";
function Hobbies() {
    let [hobby,addHobby,deleteHobby,RemoveAll] = UseHobbies();
    console.log(hobby)
    console.log(UseHobbies);
    return (
        <div className="Hobby">
            <form className="comment-Form" onSubmit={addHobby}>
                <input type="text" name="hobby" placeholder="Mention ur Hobby" className="form-elements" />
                <textarea name="description" placeholder="Enter ur Hobby Description" className="form-elements Comment-Body"></textarea>
                <input type="date" name="date" />
                <button className="form-elements Button">Submit</button>
                <button onClick={RemoveAll}>Remove all Hobbies</button>
            </form>
            <table className="Table">
                <tr>
                    <td className="Table-elements">Hobby</td>
                    <td className="Table-elements">Description</td>
                    <td className="Table-elements">Date</td>
                </tr>
                {hobby.map((val, index) => {
                   if((index)&&(val.hobby&&val.Date&&val.description!=""))
                        return (
                            <tr>
                                <td className="Table-elements">{val.hobby}</td>
                                <td className="Table-elements">{val.description}</td>
                                <td>{val.Date}</td>
                                <td><button  onClick={()=>{deleteHobby(val)}}>Delete Hobby</button></td>
                            </tr>
                        )
                })}
            </table>
        </div>
    )
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