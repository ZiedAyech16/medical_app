import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router";
import { createSearchParams } from "react-router-dom";
import "./gerer_fiche_patient.css";
axios.defaults.baseURL = "http://127.0.0.1:5000";
export default function FichePatientItem(props){
    const navigate = useNavigate();
    const [validVisibility,setValidVisibility]=useState(true);
    const [medecin,setMedecin]=useState({});
    const [removed,setRemoved]=useState(false);


    const removePatient = (e)=>{
        e.preventDefault();
        axios.delete(`/patients/${props.patient.id}`);
        navigate("/gere/patients");
    }
    
    const editer_patient = (e)=>{
        e.preventDefault();
        //navigate(`/register/patient/${medecin.id}/${localStorage.getItem("role")}`);

        navigate({
            pathname:`/register/patient/editer`,
            search:createSearchParams(
                {
                    id:props.patient.id,
                    nom:props.patient.nom,
                    prenom:props.patient.prenom,
                    age:props.patient.age,
                    email:props.patient.email,
                    contact:props.patient.contact,
                    username:props.patient.username,
                    password:props.patient.password,
                    image:props.patient.image,
                    MedecinId:props.patient.MedecinId,
                    SecretaireId:props.patient.SecretaireId
                }
            ).toString()
        })
    }

    console.log(props.fiche_patient);
    useEffect(()=>{
        axios.get(`/medecins/${props.fiche_patient.MedecinId}`).then((result)=>setMedecin(result.data));
       // medecin.map((result)=>console.log(result));
       
        
    },[]);
    //console.log(medecin);

    //console.log(props.fiche_patient);
    console.log(props.fiche_patient.prenom);

    const supprimerfichpat=()=>{
        console.log("ok",props.fiche_patient.id);
        setRemoved(true);
        axios.delete(`/fiche_patients/${props.fiche_patient.id}`).then(result=>console.log(result));
        navigate("/fiche_patients");
        
    }
//medecin.id ===parseInt(localStorage.getItem("id"))
    return (
   <tr className="table_container_medecins_tr"> {true?
   <>

{/* <h1> {props.fiche_patient.sexe}</h1> */}


<td><img src={`http://127.0.0.1:5000/patients/images/${props.fiche_patient.image}`} className="fiche_card_image"></img></td>
    <td className="text_style">{props.fiche_patient.nom}</td>
    <td className="text_style">{props.fiche_patient.prenom} </td>

    {/* <div className="fiche_card_element">
        Date: <span>{props.fiche_patient.jour}</span>/<span>{props.fiche_patient.month}</span>/<span>{props.fiche_patient.year}</span>--<span>{props.fiche_patient.hour}:</span>00
    </div> */}
    <td className="text_style"> {props.fiche_patient.contact}</td>
    <td className="text_style">{props.fiche_patient.email}</td>
    {/* <div className="fiche_card_element"><span>Sexe: {props.fiche_patient.Patient.sexe}</span></div> */}
    <td className="text_style">{props.fiche_patient.createdAt}</td>
    <td  className="">
        <button className="color_button" onClick={editer_patient}><i class="fa fa-pencil-square" aria-hidden="true" style={{fontSize:'30px',color:"#bbb"}}></i></button>
        <button className="color_button" onClick={supprimerfichpat}><i class="fa fa-trash" aria-hidden="true" style={{fontSize:'30px',color:"#bbb"}}></i></button>
    </td>
</>


   
   :<td colSpan={5}>
       No Rdv pou aujordhui{ Date.now()?.toString()}
   </td>}</tr>

    
    );
}