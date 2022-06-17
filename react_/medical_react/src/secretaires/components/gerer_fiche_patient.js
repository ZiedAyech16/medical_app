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

 const navigate = useNavigate();

 const goto_register = ()=>{
       
    navigate(`/register/patient/${medecin.id}/${localStorage.getItem("role")}`);
}

 useEffect(()=>{
    axios.get("/fiche_patients").then((result)=>setFiches(result.data));
    axios.get("/patients").then((result)=>setPatients(result.data));
    axios.get(`/medecins/${localStorage.getItem("userId")}`).then((result)=>setMedecin(result.data));
    search.current = search_;
    searchprenom.current = search_prenom; 
 },[search_,search_prenom]);

    return (
     <div>
            <div className="container_search">
                <input type="text" className="search_nom" placeholder="Nom :" value={search_} onChange={(e)=>setSearch_(e.target.value)} /> 
                <input type="text" className="search_nom" placeholder="Prenom :" value={search_prenom} onChange={(e)=>setSearch_Prenom(e.target.value)} /> 
                <button className="ajouter_" onClick={goto_register}>Ajouter Patient</button> 

            </div>
            
            <div className="fiche_pat_cards">
            {/* {fiches.filter((res__)=>(res__.Patient.nom!==null?res__.Patient.nom.includes(search_):false)&&(res__.Patient.prenom!==null?res__.Patient.prenom.includes(search_prenom):false)).map((result)=><FichePatientItem key={result.id} fiche_patient={result} />)} */}
            {patients.filter((res__)=>(res__.nom!==null?res__.nom.includes(search_):false)&&(res__.prenom!==null?res__.prenom.includes(search_prenom):false)&&(res__.MedecinId===medecin.id)).map((result)=><FichePatientItem key={result.id} fiche_patient={result} patient={result} />)}
            </div>

     </div>
 );
}