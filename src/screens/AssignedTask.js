import {useEffect, useState} from "react";
import ApiTaskservice from "../services/task.services"

const AssignedTask = ()=>{
    const[assignedTask ,setAssignedTask] = useState([]);


    const loadAssignedTaskInfo=()=>{
        ApiTaskservice.fetchAssignedTask().then(Response =>{
            {setAssignedTask(Response.data)};
        },error=>{
            console.log("got error");
        })
    }


    



    useEffect(()=>{
        loadAssignedTaskInfo();
    },[])


    return<div className="container">
    <h2>Yours Tasks</h2>
    <hr />


    <br />
        <div className="row row-cols-1 row-cols-md-3 g-4 ">
       

    {assignedTask.map((tasklist) => (
        <div className="col-lg-5 md-5">
        <div>
           
        
                        <div className="card h-100 CardElement " >
                       <div className="card-body  text-start text-left  ">

                           <div className="card-title"> <h3>{tasklist.title}</h3> </div>
                           <div className="card-text align-items-right">
                           <h6>Task Id : {tasklist.id}</h6>
                               <h6>category : {tasklist.description}  Category : {tasklist.category}</h6>
                               <h5>status : {tasklist.status}   Assigned By : {tasklist.assignedBy} </h5>
                               <h5>   </h5>
                               <h5>Assigned To : {tasklist.assignedTo}   </h5>

                               <h5>Assigned Date : {tasklist.assignedDate}  </h5> 
                               <h5> Tentative Date : {tasklist.tentativeDate} </h5>


                               <hr/>
                               <div >
                               <button className="btn btn-success" > Update Status</button>
                                <button className="btn btn-primary"  > Edit</button>
                               </div>
                           
                           </div>
                       </div>
                   </div>

                    





                  


</div>


</div> ))}
         

</div>


              

        
        
        
        
    </div>

}

export default AssignedTask;