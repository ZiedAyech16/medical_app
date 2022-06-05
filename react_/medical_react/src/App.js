import logo from './logo.svg';
import './App.css';
import Header from './Header';

import {useDispatch, useSelector} from "react-redux";
import { Login_ } from './user/store/actions';
import Login from './Accounts/login/Login';
import AllMedecins from './medecins/components/all_meds';
import Home from './components/home';
import RegisterAccount from './Accounts/register/RegisterAccount';
import { BrowserRouter } from 'react-router-dom';

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
      <BrowserRouter>
    <Header />
    {
    
    localStorage.getItem("email")===null||localStorage.getItem("email")===''?
    state.email.length===0?statelogin?
    <Login />:<RegisterAccount />:<div>
           

      <br/>
      </div>
      
    : <Home />


    }
      
    </BrowserRouter>

    </div>
  );
}

export default App;
