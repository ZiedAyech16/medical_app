import axios from "axios";
import { useEffect, useState } from "react";
import FichePatientItem from "./gerer_fiche_patient_item";

export default function FichePatient(){
 const [fiches,setFiches]=useState([]);
 useEffect(()=>{
    axios.get("/fiche_patients").then((result)=>setFiches(result.data));
 },[]);

    return (
     <div>
 {fiches.map((result)=><FichePatientItem key={result.id} fiche_patient={result} />)}


     </div>
 );
}