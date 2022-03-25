import { useFormik } from "formik";
import { useState } from "react";
const RegisterRouter = ()=>{
     let [details,setAllDetails]=useState([])
     const formik = useFormik({
         initialValues:{
             email : "",
             password : "",
             userName:"",
         },
         onSubmit(values){
             console.log(`form Submit`);
             console.log(values.age)
             let UserObject ={
                 Email:values.email,UserName:values.userName,Password:values.password
             }
             let DetailsObject = [...details,UserObject]
             setAllDetails(DetailsObject)
             console.log(DetailsObject)
             localStorage.setItem("RegisteredUsers",JSON.stringify(DetailsObject))
         },
         validate(){
             const errors ={}
             if(formik.values.email.length==0){
                 errors.email ="Please Fill This Field"
             }
             if(formik.values.password.length ==0) {
                errors.password = "Please Fill This Field"
            }
             
             if(formik.values.userName.length==0){
                 errors.userName = "Please Fill This Field"
             }
             return errors
         },
     });
     console.log(formik);
     return(
         <div class ="Regstration">
             <h1 className="Todo-heading">Registration Form</h1>
         <form onSubmit={formik.handleSubmit} className="Registration-form" noValidate>
             <div class="text-danger">{formik.errors.email?formik.errors.email:null}</div>
             <input type="email" name="email" value={formik.values.email} placeholder="Enter ur Email"
             onChange={formik.handleChange} className="Registration-input"/>
              <div class="text-danger">{formik.errors.userName?formik.errors.userName:null}</div>
             <input type="text" name = "userName" value={formik.values.userName} placeholder="Enter UserName"
             onChange={formik.handleChange} className="Registration-input"/><br/>
             <div class="text-danger">{formik.errors.password?formik.errors.password:null}</div>
              <input type="password" name="password" value={formik.values.password} placeholder="Enter ur Password"
             onChange={formik.handleChange} className="Registration-input"/><br/>
             <button className="Registration-input">submit</button>
         </form>
         </div>
     )
 }
export default RegisterRouter;
