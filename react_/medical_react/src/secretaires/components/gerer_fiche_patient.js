import axios from "axios";
import { useEffect, useRef, useState } from "react";
import FichePatientItem from "./gerer_fiche_patient_item";
import { useNavigate } from "react-router";

export default function FichePatient(){
 const [fiches,setFiches]=useState([]);
 const [search_,setSearch_]=useState('');
 const [medecin,setMedecin] = useState({});
 const [patients,setPatients] = useState([]);
 const [search_prenom,setSearch_Prenom]=useState('');
 const search = useRef();
 const searchprenom = useRef();
 const [secretaire_of_med, setSecretaire_of_med] = useState({});

 const navigate = useNavigate();

 const goto_register = ()=>{
       
    navigate(`/register/patient/ajouter`);
}

 useEffect(()=>{
    axios.get("/fiche_patients").then((result)=>setFiches(result.data));
    axios.get("/patients").then((result)=>setPatients(result.data));
    axios.get(`/medecins/${localStorage.getItem("userId")}`).then((result)=>setMedecin(result.data));
    search.current = search_;
    searchprenom.current = search_prenom; 
    if(localStorage.getItem("role")==="secretaire"){
        axios.get(`/secretaires/${localStorage.getItem("userId")}`).then(r=>setSecretaire_of_med(r.data));
    }
 },[search_,search_prenom]);

    return (
     <div>
            <div className="medecins_header">
              <div className="search__">
                <i class="fa fa-search" aria-hidden="true"></i>
                 <input type="text" className="search__input" placeholder="Nom :" value={search_} onChange={(e)=>setSearch_(e.target.value)} /> 
            </div>
            <div className="search__">
                <i class="fa fa-search" aria-hidden="true"></i>

                <input type="text" className="search__input" placeholder="Prenom :" value={search_prenom} onChange={(e)=>setSearch_Prenom(e.target.value)} /> 

            </div>
            <button className="color_button" onClick={goto_register}><i class="fa fa-plus-circle" aria-hidden="true"  style={{fontSize:'30px',color:"#bbb"}}></i></button> 



        </div>

        <table className="table_container_medecins">
            <thead className="table_container_medecins_head">
                <th>Image</th>
                <th>Nom</th>
                <th>Prenom</th>
                <th>Contact</th>
                <th>Email</th>
                <th>Date de creation</th>
                <th>Action</th>
                
            </thead>
            
            <tbody className="">
            {/* {fiches.filter((res__)=>(res__.Patient.nom!==null?res__.Patient.nom.includes(search_):false)&&(res__.Patient.prenom!==null?res__.Patient.prenom.includes(search_prenom):false)).map((result)=><FichePatientItem key={result.id} fiche_patient={result} />)} */}
            {localStorage.getItem("role")==="medecin"? patients.filter((res__)=>(res__.nom!==null?res__.nom.includes(search_):false)&&(res__.prenom!==null?res__.prenom.includes(search_prenom):false)&&(res__.MedecinId===parseInt(localStorage.getItem("userId")))).map((result)=><FichePatientItem key={result.id} fiche_patient={result} patient={result} />):<></>}
            {localStorage.getItem("role")==="secretaire"? patients.filter((res__)=>(res__.nom!==null?res__.nom.includes(search_):false)&&(res__.prenom!==null?res__.prenom.includes(search_prenom):false)&&(res__.MedecinId===secretaire_of_med.MedecinId)).map((result)=><FichePatientItem key={result.id} fiche_patient={result} patient={result} />):<></>}
            
            

            </tbody>
        </table>

     </div>
 );
}