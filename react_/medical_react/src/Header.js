import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Logout_ } from "./user/store/actions";
import "./Header.css";
import { useNavigate, useParams } from "react-router";

export default function Header(){
    const [currentEmail,setCurrentEmail]=useState('');
    //setCurrentEmail(localStorage.getItem("email"));
    const navigate = useNavigate();
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

    const toprofile = ()=>navigate("/profile");
    const tordvs = ()=>navigate("/rdvs");
    const posertime = ()=>navigate("/poser_time");
    const gerefichespatient = () =>navigate("/fiche_patients");
    
    return (
        <nav className="navbar navbar-light nav_bar">
  <div className="container-fluid">
    <a className="navbar-brand text-light">Gestion Cabinet Medical</a>

  <div>
      
      {localStorage.getItem("email").length!==0 ?<div>
      {/* <Link to="/profile" >Profile</Link> */}
      <button className=" log_out btn-sm" onClick={posertime}>Poser Time</button>
      <button className=" log_out btn-sm" onClick={gerefichespatient}>Gerer Fiche Patients</button>
      <button className=" log_out btn-sm" onClick={tordvs}>Rdvs</button>
      <button className=" log_out btn-sm" onClick={toprofile}>Profile</button>

         <span className="email_">{localStorage.getItem("email")}</span>
          <button className=" log_out btn-sm" onClick={logout}>Logout</button>
      </div>:'You need to Login'}
  </div>
  </div>
</nav>
    );
}