import axios from "axios";
import authHeader from './auth-header';

const API_URL_Task = 'http://localhost:8080/task';

class ApiTaskService{
    constructor(props){
        //super(props);
        this.state={
            
            tkn :authHeader().Authorization,
            
        
    }
    console.log("token inside add "+this.state.tkn);
}
    // userId = authHeader().Authorization;
    //log(userId);

    //fetch all task
fetchTask(){
    return axios.get(API_URL_Task + '/tasks' ,{headers: authHeader()})
}


//create task
addTask(task){
   console.log("add task token:"+authHeader().Authorization);
    return axios.post(API_URL_Task+'/user'+'/tasks',task,{headers: authHeader()})
}


//fetch task assigne dto user
fetchAssignedTask(){
    return axios.get(API_URL_Task + '/assigned'+'/tasks' ,{headers: authHeader()})
}

//delete assigned task
deleteTask(){
    return axios.delete(API_URL_Task )
}







}
export default new ApiTaskService;