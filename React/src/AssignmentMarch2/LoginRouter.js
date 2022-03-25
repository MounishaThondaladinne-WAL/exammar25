import { useFormik } from "formik";
import { useState } from "react";
const LoginRouter = ()=>{
    const [value,setvalue] =useState("")
     const formik = useFormik({
         initialValues:{
             email : "",
             password : "",
             userName:"",
         },
         onSubmit(values){
             const RegisteredUsers =JSON.parse(localStorage.getItem("RegisteredUsers"));
             for(let i in RegisteredUsers){
                 console.log(RegisteredUsers[i].UserName);
                 console.log(values.userName);
                 if(RegisteredUsers[i].UserName==values.userName && RegisteredUsers[i].Password==values.password){
                     localStorage.setItem("loggedUser",values.userName);
                     localStorage.setItem("loggedIn",1);
                     console.log("true")
                     setvalue("Logged In")
                     break;
                 }
                 else{
                     console.log("false")
                     localStorage.setItem("loggedIn",0);
                     setvalue("Please Provide Valid credetinals")
                 }
             }
         },
         validate(){
             const errors ={}
             if(formik.values.password.length <4 || formik.values.password.length>=20){
                errors.password = "Must be More than 4 characters and Less than 20 characters"
            }
             if(formik.values.age <18||formik.values.age>=120){
                 errors.age= "Age Between 18 and 120"
             }
             if(formik.values.userName.length<=4||formik.values.userName.length>=20){
                 errors.userName = "Must be more than 4 characters and less than 20 charcters"
             }
             return errors
         },
     });

     return(
         <div class ="Regstration">
             <h1 className="Todo-heading">Login Form</h1>
         <form onSubmit={formik.handleSubmit} className="Registration-form" noValidate>
              <div class="text-danger">{formik.errors.userName?formik.errors.userName:null}</div>
             <input type="text" name = "userName" value={formik.values.userName} placeholder="Enter UserName"
             onChange={formik.handleChange} className="Registration-input"/><br/>
             <div class="text-danger">{formik.errors.password?formik.errors.password:null}</div>
              <input type="password" name="password" value={formik.values.password} placeholder="Enter Password"
             onChange={formik.handleChange} className="Registration-input"/><br/>
             <button className="Registration-input">submit</button>
             <div>{value}</div>
         </form>
         </div>
     )
 }
export default LoginRouter;