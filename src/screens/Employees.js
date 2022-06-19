import AuthService from "../api/auth.service";
import ViewProfile from "./ViewProfile";


const Employees=()=>{
    const user = AuthService.getCurrentUser();
    return <div>
        <div className="container">
            {/* alert("user "+ user); */}
            <ViewProfile />
        </div>

    </div>
}
export default Employees;