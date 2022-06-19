import axios from 'axios';
import authHeader from './auth-header';

const API_URL = "http://localhost:8080/user/";


class AuthService {

    login(email , password){
console.log("hello in auth sercice login");
        return axios
        .post(API_URL + "login", {
            email,
            password
        })
        .then(response=>{
            console.log("in response then bloc auth");
            if(response.data.token){
                console.log("in response token auth "+response.data.token);
                localStorage.setItem("jwtToken",response.data.token);
                localStorage.setItem("user",JSON.stringify(response.data.data));

            }
            return response.data.data
        });

    }

    logout(){
        localStorage.removeItem("jwtToken");
        localStorage.clear();

    }

    register(firstName,lastName,email,password,phone,role){
        return axios.post(API_URL + "register",{
            firstName,
            lastName,
            email,
            password,
            phone,
            role,
        });
    }

    getCurrentUser(){
        return JSON.parse(localStorage.getItem('user'));
    }


}

export default new AuthService();