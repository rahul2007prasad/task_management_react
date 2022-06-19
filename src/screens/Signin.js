
import React, { useEffect, useState } from "react";
import {Form,FormGroup,Input,Button,Container} from "reactstrap"
import authService from "../api/auth.service";
import {Link} from 'react-router-dom'
import { toast } from "react-toastify";
import SingUp from "./SignupScreen";
import {Route,Routes} from 'react-router-dom'
import Test from "./Test";
import { useNavigate } from "react-router-dom";


const LoginPage =(props) =>{
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [message,setMessage] = useState('')
  const [successful,setSuccessful] = useState('')
const history = useNavigate();
  
  const loginHandler=(e)=>{
    e.preventDefault();
    
   console.log(email)
   console.log(password)
   console.log(message)
   console.log(successful)
   window.localStorage.clear();
   authService.login(email,password).then(Response =>{
     console.log(Response.role);
        
        if(Response.role === 'ADMIN'){
          props.history.push("/admin");
        }
        
        if(Response.role === 'EMPLOYEES'){
          // history('/test');
          history('/myProfile');
          
        }
       
      
   }/*},error =>{
      console.log(error);
      setMessage(error);
      setSuccessful(false);
   }*/).catch(errMsg=>{
     alert(new Error("Invalid Crediantials plz entr again..."));
   })




  }
  const LogoutHandler=()=>{
    authService.logout();
}

useEffect(()=>{
  LogoutHandler()
},[])
  


    return (
     <div>
      
     <div >
 <div className="container" bg-success text-white >
 <div class="col-md-9">
     <h1 className="text-center my-3">Login Here!!!! </h1>
    

     
    
  <Form onSubmit={
        loginHandler
      }>
   <FormGroup>
<b><label >Email</label></b>
 <Input type="email" onChange={(e) => {
              setEmail(e.target.value)
            }} placeholder="Your Email" name="email" id="email" title="abc@.com"  autoFocus required/>
   </FormGroup>
   <FormGroup>
 <label > password</label>
 <Input type="password"  onChange={(e) => {
              setPassword(e.target.value)
            }}  placeholder="Password" name="Password" id="Password" autocomplete="new-password" required/>
   </FormGroup>
  
   <Container className="text-right my-3">
   <button  class="btn btn-danger" >Login</button>
    <Link to='/signup'>
   <button type="button" class="btn btn-success">Register NewUser </button>
   </Link> 
   
  </Container>
  
  </Form>
  </div>
 </div>
 </div>
 </div>
    )
}
export default LoginPage;