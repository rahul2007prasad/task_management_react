import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom'

import LoginPage from './screens/Signin';
import Test from './screens/Test';
import SingUp from './screens/SignupScreen';
import MainPage from './screens/MainScreen';
import Header from './header/Header';
import Employees from './screens/Employees';
import Alltasks from './screens/Alltask';
import AddTaskComponent from './components/Addtask'
import Task from './screens/Task';
import AssignedTask from './screens/AssignedTask';


function App() {
  return (
    <div className="App">
      
      <div class="row">

      <div class="row">
        
        
       <MainPage />
        </div>



      <div class="row">
      <div class="col-sm-2">
      
      <Header />
      
      </div>

      <div class="col-sm-10">
      
      <Routes>
        
         {/* <Route path="/" component={LoginPage} exact /> */}
          {/* <Route path="/" component={Test}  exact/> */}
          {/* <Route path="/" element={<Test />}  exact/> */}
          {/* <Route path="/" element={<LoginPage />} exact /> */}
          <Route path="/" element={<LoginPage />} exact />
      
          <Route path="/signup" element={<SingUp />} exact/>
          <Route path="/myProfile" element={<Employees />} />
          <Route path="/test" element={<Test />} />
          <Route path="/alltask" element={<Task /> } />
          <Route path="/addtask" element={<AddTaskComponent /> } />
          <Route path="/assignedtask" element={<AssignedTask /> } />
          
        
        
         </Routes>
         
      </div>
      </div>{/* div row*/}
      </div>
       
         
         
          
       
      
     
     
    </div>
  );
}

export default App;
