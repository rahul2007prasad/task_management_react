export default function authHeader() {
    const token = localStorage.getItem('jwtToken');
    if (token !== null) {
      console.log("before added bearer:"+token);
       return { Authorization: 'Bearer'+" " + token }; // for Spring Boot back-end
    //  return { 'x-access-token': user.accessToken };       // for Node.js Express back-end
    } else {
      console.log("null token");
      return {};
    }
  }
  