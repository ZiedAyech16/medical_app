import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Logout_ } from "./user/store/actions";
import "./Header.css";
import { useNavigate, useParams } from "react-router";
import axios from "axios";
import HomeAdmin from "./Accounts/home/home_admin";

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
    const gereadmins = ()=>navigate("/gere/admins");
    const geremedecins = ()=>navigate("/gere/medecins");
    const geresecretaires = ()=>navigate("/gere/secretaires");
    const gerepatients = ()=>navigate("/gere/patients");

    
    
    
    const [users_role,setUser_Role]=useState([]);
    const [user_admin,setUser_admin]=useState(false);

    const [admin_,setAdmin_] = useState(true);

    useEffect(()=>{
        axios.get("/users_role").then(result=>setUser_Role(result.data));
        users_role.filter((res)=>res.role!==null&&res.role==="admin"&&res.email===localStorage.getItem("email")).map((res)=>setUser_admin(true));

    },[]);

//    users_role.map(result=>console.log(result));
    
    return (
        <div className="">
  <div className="navbar">


  <div  className="navbar_part_2">
      
      {localStorage.getItem("email").length!==0 ?<div className="navbar_part_2_">
      {/* <Link to="/profile" >Profile</Link> */}
    
   {   user_admin?<HomeAdmin />:
     <div>
      <ul className="navbar_part_2_1">
      <li><img className="logo_" src="/images/sante.jpg" width={45} height={45} alt="Gestion Cabinet Medical" /></li>

        {
            admin_?
            <div className="navbar_admin">
                <li><button className="btn-design log_out btn-sm" onClick={gereadmins}>Gerer Admins</button></li>
                <li><button className="btn-design log_out btn-sm" onClick={geremedecins}>Gerer Medecins</button></li>
                <li><button className="btn-design log_out btn-sm" onClick={geresecretaires}>Gerer Secretaires</button></li>
                <li><button className="btn-design log_out btn-sm" onClick={gerepatients}>Gerer Patients</button></li>

            </div>
            :<></>
        }


        <li><button className="btn-design log_out btn-sm" onClick={posertime}>Poser Time</button></li>
        <li><button className="btn-design log_out btn-sm" onClick={gerefichespatient}>Gerer Fiche Patients</button></li>
        <li><button className="btn-design log_out btn-sm" onClick={tordvs}>Rdvs</button></li>
        <li><button className="btn-design log_out btn-sm" onClick={toprofile}>Profile</button></li>
        <li>
        <ul  className="btn-design log_out btn-sm">
            <li className="dropdown">   
            <a className="dropdown_ btn-design">list</a>

            <table className="container_items col-sm-2">
                <tr className="item">
                    <td>
                        <div className="display_item border-0">
                            <img src="/images/medecin1.jpg" width={40} height={40}></img>
                        <h6> <Link to="/pediatres" className=" text-dark">Pédiatre</Link></h6>
                        </div>
                    </td>
                    </tr>
                    <tr  className="item">
                    <td>
                        <div className="display_item border-0">
                            <img src="/images/medecin2.jpg" width={40} height={40}></img>
                            <h6><Link to="/psychotherapie" className=" text-dark">Psychothérapie</Link></h6>
                        </div>
                    </td>
        </tr><tr className="item">
                <td >
                        <div className="display_item bg-gradient-warning border-0">
                            <img src="/images/medecin3.png" width={40} height={40}></img>
                            <h6><Link to="/dentiste" className=" text-dark">Dentiste</Link></h6>
                        </div>
                    </td>
                    </tr>



                <tr className="item">
                    <td >
                        <div className="display_item border-0">
                            <img src="/images/Allergists.jpg" width={40} height={40}></img>
                            <h6><Link to="/allergists" className=" text-dark">Allergists</Link></h6>
                        </div>
                    </td>

                </tr>

                <tr className="item">
                    <td >
                        <div className="display_item border-0">
                            <img src="/images/Dermatologists.webp" width={40} height={40}></img>
                            <h6><Link to="/dermatologists" className=" text-dark">Dermatologists</Link></h6>
                        </div>
                    </td>

                </tr>



                <tr className="item">
                    <td >
                        <div className="display_item border-0">
                            <img src="/images/gynecologists.jpg" width={40} height={40}></img>
                            <h6><Link to="/gynecologists" className=" text-dark">gynecologists</Link></h6>
                        </div>
                    </td>

                </tr>

    

                <tr className="item">
                    <td >
                        <div className="display_item border-0">
                            <img src="/images/cardiologists.jpg" width={40} height={40}></img>
                            <h6><Link to="/cardiologists" className=" text-dark">Cardiologists</Link></h6>
                        </div>
                    </td>

                </tr>
                
                    
                    
                    
                    
                    
            </table>
            </li>
        </ul>
        </li>
      </ul></div>}
      <ul className="navbar_part_2_2">

            <li className="email-design">{localStorage.getItem("email")}</li>
            <li><button className="btn-design log_out btn-sm" onClick={logout}>Logout</button></li>
      </ul>
      </div>:<div className="needtologin">You need to Login</div>}
    
     </div>
  </div>
</div>
    );
}