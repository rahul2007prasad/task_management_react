export default function authHeader(){
    const token = localStorage.getItem('jwtToken');
    if(token !==null){
        return{
            Authorization: 'Bearer ' + token
        };
    }
    else{
        return {};
    }
}