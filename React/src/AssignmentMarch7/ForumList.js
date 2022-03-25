import { useContext } from "react"
import ForumContext from "./ForumContext"
import ForumTopic from "./ForumTopic";
const ForumList =()=>{
    const {state,dispatch}= useContext(ForumContext);
    
return(
    <div>
    <h1 className="Forum-Heading">Forum Topics</h1>
      {
        state.map((val,index)=>{
            return(
              <div className="Forum-Topic">
                <p ><b>User : </b> {val.user}</p>
                <ForumTopic topic={val.topic}/>
                <p><b>Saving Time : </b>{val.time}</p>
                <button onClick={() => {
                            if (window.confirm("Are You Sure You Want to Delete?") == true) {
                                {dispatch({type:'deletetopic',index:index})}
                            }
                        }
                        } className="button">Delete
                    </button>
              </div>
            )}
        )
      }
    </div>
   
)
}
export default ForumList;



    
