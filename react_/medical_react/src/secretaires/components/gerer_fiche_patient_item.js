import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router";
import "./gerer_fiche_patient.css";
axios.defaults.baseURL = "http://127.0.0.1:5000";
export default function FichePatientItem(props){
    const navigate = useNavigate();
    const [validVisibility,setValidVisibility]=useState(true);
    const [medecin,setMedecin]=useState({});
    const [removed,setRemoved]=useState(false);


    useEffect(()=>{
        axios.get(`/medecins/${props.fiche_patient.MedecinId}`).then((result)=>setMedecin(result.data));
       // medecin.map((result)=>console.log(result));
       
        
    },[]);
    //console.log(medecin);


    const supprimerfichpat=()=>{
        console.log("ok",props.fiche_patient.id);
        setRemoved(true);
        axios.delete(`/fiche_patients/${props.fiche_patient.id}`).then(result=>console.log(result));
        navigate("/fiche_patients");
        
    }

    return (
   <div> {medecin.id ===parseInt(localStorage.getItem("id"))?
   <div className="fiche_card_container">

{/* <h1> {props.fiche_patient.sexe}</h1> */}


<img src="/images/medecin1.jpg" className="fiche_card_image"></img>
<div>
<div className="fiche_card_name">{props.fiche_patient.nom} {props.fiche_patient.prenom} </div>
<div className="fiche_card_container_sub">
    <div className="fiche_card_element">
        Date: <span>{props.fiche_patient.jour}</span>/<span>{props.fiche_patient.month}</span>/<span>{props.fiche_patient.year}</span>--<span>{props.fiche_patient.hour}:</span>00
    </div>
    <div className="fiche_card_element"><span>Contact: {props.fiche_patient.contact}</span></div>
    <div className="fiche_card_element"><span>Sexe: {props.fiche_patient.sexe}</span></div>
    <div className="fiche_card_element"><span>Date de creation: {props.fiche_patient.createdAt}</span></div>
    <div  className="fiche_card_element"><button className="button_supprimer" onClick={supprimerfichpat}>supprimer</button></div>
    <div  className="fiche_card_element"><button className="button_editer" onClick={supprimerfichpat}>Editer</button></div>
</div>
</div>
</div>

   
   :<></>}</div>

    
    );
}