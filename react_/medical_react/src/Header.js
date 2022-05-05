import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Logout_ } from "./user/store/actions";
import "./Header.css";
export default function Header(){
    const [currentEmail,setCurrentEmail]=useState('');
    //setCurrentEmail(localStorage.getItem("email"));
    const state=useSelector(state=>state.auth);
    console.log("my data",state.email);
    const dispatch = useDispatch();
    const logout = ()=>{
       // console.log(localStorage.getItem("email"));
       // localStorage.setItem("email","");
       // localStorage.setItem("token","");
               
       localStorage.setItem("token", "");

       localStorage.setItem("email","");
       localStorage.setItem("password","");
       dispatch(Logout_());
       
    }

    
    return (
        <nav className="navbar navbar-light nav_bar">
  <div className="container-fluid">
    <a className="navbar-brand text-light">Medical</a>
  

  <div>
      
      {localStorage.getItem("email").length!==0 ?<div>
          {localStorage.getItem("email")}
          <button className=" log_out btn-sm" onClick={logout}>Logout</button>
      </div>:'You need to Login'}
  </div>
  </div>
</nav>
    );
}