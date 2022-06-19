import AuthService from "../api/auth.service";
import Alltasks from "./Alltask";
import ViewProfile from "./ViewProfile";


const Task=()=>{
    const user = AuthService.getCurrentUser();
    return <div>
        <div className="container">
            {/* alert("user "+ user); */}
            <Alltasks />
        </div>

    </div>
}
export default Task;