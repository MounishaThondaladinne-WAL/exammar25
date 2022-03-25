import { Navigate,Outlet } from "react-router-dom";
const ProtectedRoute =()=>{
    let loggedIn = localStorage.getItem("loggedIn");
    loggedIn = parseInt(loggedIn);
    if(loggedIn){
        console.log("LoggedIn");
        return <Outlet/>
    }
    else{
        console.log("Not Logged In");
        return <Navigate to="/login"/>;
    }
}
export default ProtectedRoute;