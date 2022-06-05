import axios from "axios";
import { useEffect, useRef, useState } from "react";
import FichePatientItem from "./gerer_fiche_patient_item";

export default function FichePatient(){
 const [fiches,setFiches]=useState([]);
 const [search_,setSearch_]=useState('');
 const [search_prenom,setSearch_Prenom]=useState('');
 const search = useRef();
 const searchprenom = useRef();
 useEffect(()=>{
    axios.get("/fiche_patients").then((result)=>setFiches(result.data));
    search.current = search_;
    searchprenom.current = search_prenom; 
 },[{search_,search_prenom}]);

    return (
     <div>
            <div className="container_search">
                <input type="text" className="search_nom" placeholder="Nom :" value={search_} onChange={(e)=>setSearch_(e.target.value)} /> 
                <input type="text" className="search_nom" placeholder="Prenom :" value={search_prenom} onChange={(e)=>setSearch_Prenom(e.target.value)} /> 
            </div>
            
            {fiches.filter((res__)=>(res__.nom!==null?res__.nom.includes(search_):false)&&(res__.prenom!==null?res__.prenom.includes(search_prenom):false)).map((result)=><FichePatientItem key={result.id} fiche_patient={result} />)}


     </div>
 );
}