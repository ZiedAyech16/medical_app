import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Logout_ } from "./user/store/actions";
import "./Header.css";
import { useNavigate, useParams } from "react-router";
import axios from "axios";
import Home_ from "./homepage/routes/Home";

export default function Header(){
    const [currentEmail,setCurrentEmail]=useState('');
    //setCurrentEmail(localStorage.getItem("email"));
    const navigate = useNavigate();
    const state=useSelector(state=>state.auth);
    console.log("my data",state.email);
    const [user, setUser] = useState({});
    const dispatch = useDispatch();
    const logout = ()=>{
       // console.log(localStorage.getItem("email"));
       // localStorage.setItem("email","");
       // localStorage.setItem("token","");
               
       localStorage.setItem("token", "");

       localStorage.setItem("email","");
       localStorage.setItem("password","");
       localStorage.setItem("role","");
       localStorage.setItem("userId","");
       localStorage.setItem("id","");
       dispatch(Logout_());
       localStorage.setItem("application_state","homepage");
       navigate("/");

       
    }

    const toprofile = ()=>navigate("/profile");
    const tordvs = ()=>navigate("/rdvs");
    const posertime = ()=>navigate("/poser_time");
    const gerefichespatient = () =>navigate("/fiche_patients");
    const gereadmins = ()=>navigate("/gere/admins");
    const geremedecins = ()=>navigate("/gere/medecins");
    const geresecretaires = ()=>navigate("/gere/secretaires");
    const gerepatients = ()=>navigate("/gere/patients");
    const gerecabinets = ()=>navigate("/cabinets");
    const gereconsultations = ()=>navigate("/consultations");
    const gereordonnances = ()=>navigate("/ordonnances");
    const tolistmeds = ()=>navigate("/list_medecin");
    const gerecomptabilite = ()=>navigate("/fiche_comptabilite");

    

    
    
    
    const [users_role,setUser_Role]=useState([]);
    const [user_admin,setUser_admin]=useState(false);

    const [admin_,setAdmin_] = useState(true);

    useEffect(()=>{
        axios.get("/users_role").then(result=>setUser_Role(result.data));
        users_role.filter((res)=>res.role!==null&&res.role==="admin"&&res.email===localStorage.getItem("email")).map((res)=>setUser_admin(true));


        if(localStorage.getItem("role")==="admin"){
            axios.get(`/admins/${localStorage.getItem("userId")}`).then(r=>setUser(r.data));
        }

        if(localStorage.getItem("role")==="medecin"){
            axios.get(`/medecins/${localStorage.getItem("userId")}`).then(r=>setUser(r.data));
        }

        if(localStorage.getItem("role")==="patient"){
            axios.get(`/patients/${localStorage.getItem("userId")}`).then(r=>setUser(r.data));
        }

        if(localStorage.getItem("role")==="secretaire"){
            axios.get(`/secretaires/${localStorage.getItem("userId")}`).then(r=>setUser(r.data));
        }
    },[]);

    const _cabinets = (e)=>navigate("/liste_cabinets");

//    users_role.map(result=>console.log(result));
    
// localStorage.setItem("application_state","homepage");
    return (
        <div className="">




            <div>

            {localStorage.getItem("email")!==""?
  <div className="navbar">


  <div  className="navbar_part_2">
      
      {localStorage.getItem("email")!=='' ?<div className="navbar_part_2_">
      {/* <Link to="/profile" >Profile</Link> */}
    
      
     <div>
      <ul className="navbar_part_2_1">
      <li>
      { localStorage.getItem("role")==="admin"? <img className="logo_" src={`http://127.0.0.1:5000/admins/images/${user.image}`} width={120} height={120} alt="Gestion Cabinet Medical" />:<></>}        
      { localStorage.getItem("role")==="medecin"? <img className="logo_" src={`http://127.0.0.1:5000/medecins/images/${user.image}`} width={120} height={120} alt="Gestion Cabinet Medical" />:<></>}        
      { localStorage.getItem("role")==="secretaire"? <img className="logo_" src={`http://127.0.0.1:5000/secretaires/images/${user.image}`} width={120} height={120} alt="Gestion Cabinet Medical" />:<></>}        
      { localStorage.getItem("role")==="patient"? <img className="logo_" src={`http://127.0.0.1:5000/patients/images/${user.image}`} width={120} height={120} alt="Gestion Cabinet Medical" />:<></>}        
        </li>
      <li className="email-design">{localStorage.getItem("email")}</li>

        {
            localStorage.getItem("role")==="admin"?
            <div className="navbar_admin">
                {/* <li><button className="btn-design log_out btn-sm" onClick={gereadmins}>Gerer Admins</button></li> */}
                <li><button className="btn-design log_out btn-sm" onClick={geremedecins}><i className='fa fa-user-md icon_' style={{fontSize:'36px'}}></i> Medecins</button></li>
                <li><button className="btn-design log_out btn-sm" onClick={geresecretaires}><i className='fa fa-user-circle icon_' style={{fontSize:'36px'}}></i> Secretaires</button></li>
                <li><button className="btn-design log_out btn-sm" onClick={gerepatients}><i className='fa fa-user icon_' style={{fontSize:'36px'}}></i> Patients</button></li>
                <li><button className="btn-design log_out btn-sm" onClick={gerecabinets}><i className='fa fa-home icon_' style={{fontSize:'36px'}}></i> Cabinets</button></li>

            </div>
            :<></>
        }

{localStorage.getItem("role")==="medecin"||localStorage.getItem("role")==="secretaire"?

<>
        <li><button className="btn-design log_out btn-sm" onClick={gereconsultations}><i className="fa fa-users icon_" style={{fontSize:'36px'}} aria-hidden="true"></i> Consultation</button></li>

        {localStorage.getItem("role")==="medecin"?<li><button className="btn-design log_out btn-sm" onClick={posertime}><i className="fa fa-clock-o icon_" style={{fontSize:'36px'}} aria-hidden="true"></i>Poser Time</button></li>:<></>}
        <li><button className="btn-design log_out btn-sm" onClick={gerefichespatient}><i className="fa fa-address-book icon_" style={{fontSize:'36px'}} aria-hidden="true"></i> Fiche Patients</button></li>
        <li><button className="btn-design log_out btn-sm" onClick={tordvs}><i className="fa fa-address-card icon_" style={{fontSize:'36px'}} aria-hidden="true"></i>Rdvs</button></li>

    </>:<></>}


    {localStorage.getItem("role")==="medecin"||localStorage.getItem("role")==="patient"?
        <li><button className="btn-design log_out btn-sm" onClick={gereordonnances}><i className='fa fa-user-md icon_' style={{fontSize:'36px'}}></i>
Ordonnances</button></li>

    :<></>}

{localStorage.getItem("role")==="medecin"?
        <li><button className="btn-design log_out btn-sm" onClick={gerecomptabilite}><i className='fa fa-money icon_' style={{fontSize:'36px'}}></i>
Fiche Comptabilite</button></li>

    :<></>}


    {localStorage.getItem("role")!=="admin"?<>
        <li><button className="btn-design log_out btn-sm" onClick={toprofile}><i className='fa fa-user-circle icon_' style={{fontSize:'36px'}}></i>Profile</button></li></>:<></>}
    
        {localStorage.getItem("role")==="patient"?<>
        <li>
        <button className="btn-design log_out btn-sm"  onClick={tolistmeds}><i className="fa fa-list-alt icon_" aria-hidden="true" style={{fontSize:'36px'}}></i>Liste des Medecin</button>
        </li></>:<></>}
      </ul>
      
      </div>
      <ul className="navbar_part_2_2">

            <li><button className="btn-design" onClick={logout}><i className='fa fa-times-circle icon_' style={{fontSize:'36px'}}></i>Logout</button></li>
      </ul>
      </div>:<div className="needtologin">
        {/* <span>You need to Login</span> */}
        {/* <span><button onClick={_cabinets}>Cabinets</button></span> */}
        </div>}
    
     </div>
  </div>:<></>}

  </div>
</div>
    );
}