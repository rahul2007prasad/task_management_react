
import React , { useState } from 'react'
import taskServices from '../services/task.services';
//import ApiTaskService from '../../services/task.services'
import { useNavigate } from "react-router-dom";
import {Form,FormGroup,Input,Button,Container} from "reactstrap"
const AddTaskComponent=(props)=>{
    const history = useNavigate();
    
   // const [id, setId] = useState('')
  
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [category, setCategory] = useState('')
    const[status,setStatus] = useState('')
    const [assignedBy,setAssignedBy]=useState('')
    const [assignedTo,setAssignedTo]=useState('')
    const [assignedDate,setAssignedDate]=useState('')
    const [tentativeDate,setTentativeDate]=useState('')
    const [remark,setRemark]=useState('')
    const [comment,setComment]=useState('')
   
    const [message,setMessage] = useState('')
    const [successful,setSuccessful] = useState('')
    let task={title,description,category,status,assignedBy,assignedTo,assignedDate,tentativeDate,
    remark,comment }

        const saveTask=(e)=>{
            e.preventDefault();
         setMessage("sending");
         setSuccessful(false)
        console.log(title)
        console.log(description)
        console.log(category)
        console.log(status)
        console.log(assignedBy)
        console.log(assignedTo)
        console.log(tentativeDate)
        console.log(remark)
        console.log(comment)
       console.log(assignedDate)
        console.log(message)
        console.log(successful)
        taskServices.addTask(task).then(Response => {
          console.log(Response);
          setMessage("successful")
          setSuccessful(true);
          history("/");
              },
        error => {
         const resMessage = (error.response && error.response.data && error.response.data.message) || error.message ||error.toString();
         setMessage(resMessage);
         }
          );
      }
     



       
        
            return(
                <div>
                  
                 
         
          <div className="container">

                    <h2 className="text-center">Add Task</h2>
                    <form onSubmit={saveTask}>
                    <div className="form-group">
                        <label>Task Title:</label>
                        <Input type="text"  onChange={(e) => {
              setTitle(e.target.value)
            }}  placeholder="title" name="title" id="title"/>
    </div>
    
                    <div className="form-group">
                        <label>Description:</label>
                        <Input type="text"  onChange={(e) => {
              setDescription(e.target.value)
            }}  placeholder="description" name="description" id="description"/>
  
                    </div>
                    <div className="form-group">
                        <label>Category:</label>
                        <Input type="text"  onChange={(e) => {
              setCategory(e.target.value)
            }}  placeholder="category" name="category" id="category"/>
  
                    </div>
    
                   
                    
                    <div className="form-group">
                        <label>Status:</label>
                        <Input type="text"  onChange={(e) => {
              setStatus(e.target.value)
            }}  placeholder="status" name="status" id="status"/>
  
                    </div>
                    <div className="form-group">
                        <label>Assigned By:</label>
                        <Input type="text"  onChange={(e) => {
              setAssignedBy(e.target.value)
            }}  placeholder="assigned By" name="assignedBy" id="assignedBy"/>
  
                    </div>
                    <div className="form-group">
                        <label>Assigned To:</label>
                        <Input type="text"  onChange={(e) => {
              setAssignedTo(e.target.value)
            }}  placeholder="assigned to" name="assignedTo" id="assignedTo"/>
  
                    </div>
                    <div className="form-group">
                        <label>Assigned Date:</label>
                        <Input type="text"  onChange={(e) => {
              setAssignedDate(e.target.value)
            }}  placeholder="assigned date" name="assignedDate" id="assignedDate"/>
  
                    </div>
                    <div className="form-group">
                        <label>Tentative Date To:</label>
                        <Input type="text"  onChange={(e) => {
              setTentativeDate(e.target.value)
            }}  placeholder="tentative date" name="tentativeDate" id="tentativeDate"/>
  
                    </div>


                    <div className="form-group">
                        <label>Reamrk:</label>
                        <Input type="text"  onChange={(e) => {
              setRemark(e.target.value)
            }}  placeholder="remark" name="remark" id="remark"/>
  
                    </div>
                    <div className="form-group">
                        <label>Comment:</label>
                        <Input type="text"  onChange={(e) => {
              setComment(e.target.value)
            }}  placeholder="comment" name="comment" id="comment"/>
  
                    </div>

                    <div className="col-md-4 Block">
                    
                   
                </div>
        
    
                   
    
                    {/* <button className="btn btn-success" >Save</button> */}
                    <Button color="success " onSubmit={saveTask} outline>Save</Button>
                </form>
                </div>
        </div>
            );
        
        
        
        
        
           
}


export default AddTaskComponent;

