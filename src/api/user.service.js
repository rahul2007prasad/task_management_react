import axios from "axios";
import authHeader from "./auth-header";
const API_URL = "http://localhost:8080/user";

class UserService{

    // getPublicContent(){
    //     // alert("in user ser");
    //      console.log("auth Headers "+authHeader().Authorization);
    //     return axios.get(API_URL + '/details',{headers:authHeader().Authorization});
    // }

    getPublicContent() {
        console.log("in get public cont "+authHeader().Authorization)
        console.log("axios "+axios.get(API_URL +'/details',{headers:authHeader().Authorization}));
        return axios.get(API_URL +'/details',{headers:authHeader()});
      }

}

export default new UserService;