import React, { useState } from "react";
import {Form,FormGroup,Input,Button,Container} from "reactstrap"
import authService from "../api/auth.service";

import { useNavigate } from "react-router-dom";



const SingUp=(props)=>{


    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const[phone,setPhone] = useState('')
    const [role,setRole]=useState('')
    const [message,setMessage] = useState('')
    const [successful,setSuccessful] = useState('')
    const history = useNavigate();
   

   const handleRegister = (e)=>{
       e.preventDefault();
    setMessage("sending");
    setSuccessful(false)
   console.log(firstName)
   console.log(lastName)
   console.log(email)
   console.log(role)
   console.log(password)
   console.log(phone)
   console.log(message)
   console.log(successful)
   authService.register(firstName,lastName,email,password,phone,role).then(Response => {
     console.log(Response);
     setMessage("successful")
     setSuccessful(true);
     history('/myProfile');
         },
   error => {
    const resMessage = (error.response && error.response.data && error.response.data.message) || error.message ||error.toString();
    setMessage(resMessage);
    }
     );
 }


    return <div className="container">

<h1 className="text-center my-3"> Register  </h1>
  <Form>
   <FormGroup>
 <label >firstname</label>
 <Input type="text"  onChange={(e) => {
              setFirstName(e.target.value)
            }}  placeholder="firstname" name="firstname" id="firstname"/>
  
  <label >Lastname</label>
 <Input type="text" onChange={(e) => {
              setLastName(e.target.value)
            }}  placeholder="lastname" name="firstname" id="firstname"/>
   </FormGroup>
  <FormGroup>
 <label >Email</label>
 <Input type="text" onChange={(e) => {
              setEmail(e.target.value)
            }}  placeholder="Email"  name="Email" id="Email" style={{heigh:200}}/>
   </FormGroup>
   <FormGroup>
 <label>Password</label>
 <Input type="password" onChange={(e) => {
              setPassword(e.target.value)
            }} 
            placeholder="Password" name="Password" id="Password" style={{heigh:200}}/>
   </FormGroup>
   <FormGroup>
 <label>Phone</label>
 <Input type="text" onChange={(e) => {
              setPhone(e.target.value)
            }} 
            placeholder="Phone" name="Phone" id="Phone" style={{heigh:200}}/>
   </FormGroup>
   <label>select Role</label>
  <select class="form-select" aria-label="Default select example" onChange={(e)=>{
    setRole(e.target.value)
  }}>
  
  <option value="" selected>please select one of them</option>
  <option value="EMPLOYEES">EMPLOYEES</option>
  <option value="PROJECT_MANAGER">PROJECT MANAGER</option>
  <option value="ADMIN">ADMIN</option>
   </select>

   <Container className="text-center my-3">
      <Button color="success " onClick={handleRegister} outline>Register</Button>
      <Button color="warning ml-3 " outline>Clear</Button>
  </Container>
  </Form>

    </div>
}

export default SingUp;