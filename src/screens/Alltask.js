import { useEffect, useState } from "react";
import ApiTaskService from "../services/task.services"






const Alltasks=()=>{

    // const [user,setUser]=useState('');
   const[task ,setTask ] = useState([]);



    const loadTaskInfo=()=>{
        ApiTaskService.fetchTask().then(Response =>{
           // console.log("task recvd response: "+ Response.data.data.title)
          {setTask(Response.data)};
           //


/*

<ul>
     
        {users.map((user) => (
            // display a <div> element with the user.name and user.type
            // parent element needs to have a unique key
            <div key={user.id}>
              <p>{user.name}</p>
              <p>{user.type}</p>
            </div>
          ))}
        </ul>
*/


        },error =>{
            console.log("got error");
        })
    }

   

    useEffect(()=>{
        loadTaskInfo();
    },[])




    return<div className="container">
    



    <br />
        <div className="row row-cols-1 row-cols-md-3 g-4 ">
       

    {task.map((tasklist) => (
        <div className="col-lg-5 md-5">
        <div>
           
        
                        <div className="card h-100 CardElement " >
                       <div className="card-body text-center ">

                           <div className="card-title"> <h3>{tasklist.title}</h3> </div>
                           <div className="card-text">
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




//     return<div className="container">
//     <ul>

// <div>
// <table class="table">
//   <thead >
//     <tr>
//       <th scope="col">Task Id</th>
//       <th scope="col">Title</th>
//       <th scope="col">Description</th>
//       <th scope="col">Category</th>
//       <th scope="col">Status</th>
//       <th scope="col">Assigned By</th>
//       <th scope="col">Assigned To</th>
//       <th scope="col">Assigned Date</th>
//     </tr>
//   </thead>
//   </table>

// <div>

// </div>


//     {task.map((tasklist) => (
//         <div>
//             {/* <div>
        
//         <h3>Title      : {tasklist.title} </h3>
//         <h4>Description     : {tasklist.description} </h4>
//         <h4>Category     : {tasklist.category} </h4>
//         <h4>Status     : {tasklist.status} </h4>
//         <h4>Assigned By     : {tasklist.assignedBy} </h4>
//         <h4>Assigned To     : {tasklist.assignedTo} </h4>
//         <h4>Assigned Date     : {tasklist.assignedDate} </h4>
        
//         </div> */}


// <div>
// <table class="table table-bordered">
//   <tbody>
//     <tr>
//     <td>{tasklist.id}</td>
//       <td>{tasklist.title}</td>
//       <td>{tasklist.description}</td>
//       <td>{tasklist.category}</td>
//       <td>{tasklist.status}</td>
//       <td>{tasklist.assignedBy}</td>
//       <td>{tasklist.assignedTo}</td>
//       <td>{tasklist.assignedDate}</td>
//     </tr>
//     </tbody>
// </table>
 
// </div>
// </div>


//           ))}

              
// </div>
        
//         </ul>
        
        
//     </div>
}

export default Alltasks;