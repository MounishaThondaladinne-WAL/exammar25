import { useEffect, useState } from "react"
const MembersRouter = () => {
    let [email, setEmail] =useState()
    let [username, setUsername] = useState()
    let [password, setpassword] = useState()
    useEffect( ()=> {
        if ( parseInt(localStorage.getItem("loggedIn"))) {
            let loggedUser= localStorage.getItem("loggedUser")
            let details = JSON.parse(localStorage.getItem("RegisteredUsers"))
            for (let i = 0; i < details.length; i++) {
                if (loggedUser== details[i].UserName) {
                    setUsername(details[i].UserName)
                    setpassword(details[i].Password)
                    setEmail(details[i].Email)
                }
            }
        }
    }, [] );
    if(parseInt(localStorage.getItem("loggedIn"))){
        return (
            <div className="Members">
            <h2>User Details</h2>
            <p>Email : {email}</p>
            <p>Username : {username}</p>
            <p>Pasword: {password}</p>
            </div>
        )
    }
    else{
        return(
            <div className="Members"><h1>Please Login</h1></div>
        )
    }
}
export default MembersRouter;