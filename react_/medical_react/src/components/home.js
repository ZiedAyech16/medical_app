import { Route, Routes  } from "react-router";
import { Link ,BrowserRouter} from "react-router-dom";
import GereDoctorByAdmin from "../Accounts/admin_gere_doctors/admin_gere_doctors";
import GereSecretairesByAdmin from "../Accounts/admin_gere_secretaire.js/admin_gere_secretaire";
import Login from "../Accounts/login/Login";
import Profile from "../Accounts/profile/profile";
import RegisterAccount from "../Accounts/register/RegisterAccount";
import RegisterMedecin from "../Accounts/register/RegisterAccount_Medecin";
import RegisterPatient from "../Accounts/register/Register_Account_Patient";
import RegisterSecretaire from "../Accounts/register/Register_Account_Secretaire";
import RegisterAdmin from "../Accounts/register/Register_Account_Admin";
import App from "../App";
import AllMedecins from "../medecins/components/all_meds";
import Poser_Time from "../medecins/poser_disponibilite/poser_disponibilite";
import FichePatient from "../secretaires/components/gerer_fiche_patient";
import FichePatientItem from "../secretaires/components/gerer_fiche_patient_item";
import { ListRendez_vous } from "../secretaires/components/gerer_rendez_vous";
import Calender from "./calender";
import { CalenderHour } from "./calender_hours";

import "./home.css";
import Gere_Secretaire from "../Accounts/afficher_users/Secretaires";
import Gere_Medecin from "../Accounts/afficher_users/Medecins/Medecins";
import Gere_Patients from "../Accounts/afficher_users/Patients/Patients";
import Gere_Admins from "../Accounts/afficher_users/Admins/Admins";
import Consultation from "../consultations/consultations";
import AjouterConsultation from "../consultations/ajouter_consultation";
import Cabinets from "../cabinets/cabinets";
import AjouterCabinet from "../cabinets/ajouter_cabinet";

export default function Home(){
    return(
        <div className="mt-4 row">
        {/* <table className="container_items col-sm-2">
            <tr className="item">
                <td>
                    <div className=" border-0">
                        <img src="/images/medecin1.jpg" width={40} height={40}></img>
                      <h6> <Link to="/pediatres" className=" text-dark">Pédiatre</Link></h6>
                    </div>
                </td>
                </tr>
                <tr  className="item">
                <td>
                    <div className=" border-0">
                        <img src="/images/medecin2.jpg" width={40} height={40}></img>
                        <h6><Link to="/psychotherapie" className=" text-dark">Psychothérapie</Link></h6>
                    </div>
                </td>
    </tr><tr className="item">
            <td >
                    <div className=" bg-gradient-warning border-0">
                        <img src="/images/medecin3.png" width={40} height={40}></img>
                        <h6><Link to="/dentiste" className=" text-dark">Dentiste</Link></h6>
                    </div>
                </td>
                </tr>
        


            <tr className="item">
                <td >
                    <div className=" border-0">
                        <img src="/images/Allergists.jpg" width={40} height={40}></img>
                        <h6><Link to="/allergists" className=" text-dark">Allergists</Link></h6>
                    </div>
                </td>

            </tr>

            <tr className="item">
                <td >
                    <div className=" border-0">
                        <img src="/images/Dermatologists.webp" width={40} height={40}></img>
                        <h6><Link to="/dermatologists" className=" text-dark">Dermatologists</Link></h6>
                    </div>
                </td>

            </tr>

      

            <tr className="item">
                <td >
                    <div className=" border-0">
                        <img src="/images/gynecologists.jpg" width={40} height={40}></img>
                        <h6><Link to="/gynecologists" className=" text-dark">gynecologists</Link></h6>
                    </div>
                </td>

            </tr>

   

            <tr className="item">
                <td >
                    <div className=" border-0">
                        <img src="/images/cardiologists.jpg" width={40} height={40}></img>
                        <h6><Link to="/cardiologists" className=" text-dark">Cardiologists</Link></h6>
                    </div>
                </td>

            </tr>
             
                 
                 
                
                 
                
        </table> */}

<div className="col-sm-9">
        <Routes>

<Route path="/" element={<AllMedecins specialite="" />}  exact>
    </Route>

    <Route path="/cardiologists" element={<AllMedecins specialite="cardiologists" />}  exact></Route>
    <Route path="/gynecologists" element={<AllMedecins specialite="gynecologists" />}  exact></Route>
    <Route path="/dermatologists" element={<AllMedecins specialite="dermatologists" />}  exact></Route>
    <Route path="/allergists" element={<AllMedecins specialite="allergists" />}  exact></Route>
    <Route path="/psychotherapie" element={<AllMedecins specialite="psychotherapie" />}  exact></Route>
    {/* <Route path="/gynecologue" element={<AllMedecins specialite="gynecologue" />}  exact></Route> */}
    {/* <Route path="/obstetrician" element={<AllMedecins specialite="obstetrician" />}  exact></Route> */}
    <Route path="/pediatres" element={<AllMedecins specialite="pediatre" />}  exact>
    </Route>
    <Route path="/dentiste" element={<AllMedecins specialite="dentiste" />}  exact></Route>
    <Route path="/calender/:id" element={<Calender specialite="Calender" />}  exact></Route>
    <Route path="/hours/:day/:month/:year/:medecin_id" element={<CalenderHour />}></Route>
    <Route path="/register"  element={<RegisterAccount />}></Route>
    <Route path="/login"  element={<Login />}></Route>
    <Route path="/profile"  element={<Profile />} exact></Route>
        <Route path="/rdvs" element={<ListRendez_vous />}></Route>
        <Route path="/poser_time" element={<Poser_Time />} exact></Route>
        <Route path="/fiche_patients" element={<FichePatient />} exact></Route>
        <Route path="/fiche_patients/:id" element={<FichePatientItem />}></Route>
        <Route path="/admin_gere_doctors" element={<GereDoctorByAdmin/>}  exact></Route>
        <Route path="/editer/:id/:specialite"  element={<RegisterAccount />}></Route>
        <Route path="/admin_gere_secretaires" element={<GereSecretairesByAdmin />} ></Route>

        <Route path="/register/medecin" element={<RegisterMedecin />}></Route>
        <Route path="/register/patient" element={<RegisterPatient />}></Route>
        <Route path="/register/secretaire" element={<RegisterSecretaire />}></Route>
        <Route path="/register/admins" element={<RegisterAdmin />}></Route>
        <Route path="/gere/secretaires" element={<Gere_Secretaire />} exact></Route>
        <Route path="/gere/medecins" element={<Gere_Medecin />} exact></Route>
        <Route path="/gere/patients" element={<Gere_Patients />} exact></Route>
        <Route path="/gere/admins" element={<Gere_Admins />} exact></Route>
        <Route path="/register/patient/:id/:role_" element={<RegisterPatient />}></Route>
        <Route path="/consultations" element={<Consultation />}></Route>
        <Route path="/consultations/ajouter" element={<AjouterConsultation />}></Route>
        <Route path="/consultations/ajouter/:role" element={<AjouterConsultation />}></Route>
        <Route path="/cabinets" element={<Cabinets />}></Route>
        <Route path="/cabinets/ajouter" element={<AjouterCabinet />} ></Route>
        <Route path="/cabinets/ajouter/:role" element={<AjouterCabinet />} ></Route>
        

        
        
        
</Routes></div>
        
        
        </div>
    );
}