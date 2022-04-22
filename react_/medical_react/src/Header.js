import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Logout_ } from "./user/store/actions";

export default function Header(){
    const [currentEmail,setCurrentEmail]=useState();
    //setCurrentEmail(localStorage.getItem("email"));
    const state=useSelector(state=>state);
    console.log("my data",state.email);
    const dispatch = useDispatch();
    const logout = ()=>{
       // console.log(localStorage.getItem("email"));
       // localStorage.setItem("email","");
       // localStorage.setItem("token","");
       dispatch(Logout_());
       
    }
    return (
        <nav className="navbar navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand">Navbar</a>
  

  <div>
      
      {state.email.length!=0 ?<div>
          {state.email}
          <button className="btn btn-danger btn-sm" onClick={logout}>Logout</button>
      </div>:'You need to Login'}
  </div>
  </div>
</nav>
    );
}