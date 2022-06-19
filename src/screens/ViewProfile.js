import { useEffect, useState } from "react";
import UserService from "../api/user.service"





const ViewProfile=()=>{

    const [user,setUser]=useState('');
   

 
    const loadUserInfo=()=>{

        


    UserService.getPublicContent().then(Response =>{
        //alert("hi load user info");
           setUser(Response.data)
    },error =>{
        //console.log("error response "+Response.data);
        console.log("got error");
        //alert("Not able to fetch data");
    })
    }

   
    useEffect(()=>{
        loadUserInfo();
        

    },[])

    return<div className="container">
    <h2>User Profile</h2>
    <hr />


    <br />
        <div className="row row-cols-1 row-cols-md-3 g-4 ">
       

   
        <div className="col-lg-5 md-5">
        <div>
           
        
                        <div className="card h-100 CardElement " >
                       <div className="card-body  text-start text-left  ">

                           <div className="card-title"> <h3>{user.email}</h3> </div>
                           <div className="card-text align-items-right">
                           <h6>  {user.firstName}  {user.lastName}</h6>
                               <h6>Mobile No. :{user.phone}</h6>
                               

                               <hr/>
                               <div >
                               <button className="btn btn-success" > Delete</button>
                                <button className="btn btn-primary"  > Edit</button>
                               </div>
                           
                           </div>
                       </div>
                   </div>

                    





                  


</div>


</div>
         

</div>


              

        
        
        
        
    </div>

}

export default ViewProfile;