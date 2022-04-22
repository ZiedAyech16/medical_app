import logo from './logo.svg';
import './App.css';
import Header from './Header';

import {useDispatch, useSelector} from "react-redux";
import { Login_ } from './user/store/actions';
import Login from './Login';

function App() {
  const state = useSelector(state=>state);
 // console.log(state);
  const dispatch = useDispatch();
  
  return (
    <div className="App">
    <Header />
    {state.email.length==0?
    <Login />:<div>user success!!</div>}
    </div>
  );
}

export default App;
