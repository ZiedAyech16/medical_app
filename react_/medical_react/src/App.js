import logo from './logo.svg';
import './App.css';
import Header from './Header';

import {useDispatch, useSelector} from "react-redux";
import { Login_ } from './user/store/actions';
import Login from './Accounts/login/Login';
import AllMedecins from './medecins/components/all_meds';
import Home from './components/home';
import RegisterAccount from './Accounts/register/RegisterAccount';

function App() {
  const state = useSelector(state=>state.auth);
  const statelogin = useSelector(state=>state.etatlogin);
  console.log(state);
 console.log(statelogin);
  const dispatch = useDispatch();
  

            //  localStorage.setItem("token", statelogin.token);

            // localStorage.setItem("email",statelogin.email);
            // localStorage.setItem("password",statelogin.password);
  return (
    <div className="App">
      
    <Header />
    {
    
    localStorage.getItem("email").length===0?
    state.email.length===0?statelogin?
    <Login />:<RegisterAccount />:<div>
           

      <br/>
      </div>
      
    : <Home />
    }
      

    </div>
  );
}

export default App;
