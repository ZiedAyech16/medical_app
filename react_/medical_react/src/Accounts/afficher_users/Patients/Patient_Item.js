import { useNavigate } from "react-router";
import { createSearchParams } from "react-router-dom";
import "./Patient.css";
import axios from "axios";
import {  useState } from "react";
import Swal from "sweetalert2";
axios.defaults.baseURL = "http://127.0.0.1:5000";

export default function Patient_Item(props){
    console.log(props);

    const navigate = useNavigate();


    const removePatient = (e)=>{
        e.preventDefault();
        axios.delete(`/patients/${props.patient.id}`).then(d=>{
                  
        });
        Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Patient a été Supprimer',
                    showConfirmButton: false,
                    timer: 2000
                })
                navigate("/gere/patients");
    }
    
    const editer_patient = (e)=>{
        e.preventDefault();
        navigate({
            pathname:"/register/patient/editer",
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
    return(
        // <div className="gere_secretaire_card">
            
        //     <img className="image_card_" src={`http://127.0.0.1:5000/patients/images/${props.patient.image}`} alt="image 1" width={200} height={200} />
        //     <div>
        //         <h3 className="gere_secretaire_card_title">{props.patient.nom} {props.patient.prenom} </h3>
        //     </div>
        //     <div>
        //         <div>
        //             <p className="gere_secretaire_card_text">Email: {props.patient.email} </p>
        //             <p className="gere_secretaire_card_text">Contact: {props.patient.contact} </p>
        //             <p className="gere_secretaire_card_text">Date de naisance:  {props.patient.age} </p>
        //         </div>
        //         <div>
        //             <button  className="gere_secretaire_card_button color_1" onClick={editer_patient}>Editer</button>
        //             <button className="gere_secretaire_card_button color_2" onClick={removePatient}>Supprimer</button>
        //         </div>

        //     </div>
        // </div>
        <tr className="table_container_medecins_tr">
        <td className="">
             <img className="table_container_medecins_image table_container_medecins_td" src={`http://127.0.0.1:5000/patients/images/${props.patient.image}`} width={80} height={80} alt="image 1"  />

        </td>
        <td>
           <span  className="text_style"> {props.patient.nom}</span>
        </td>

        <td className="">
            <span  className="text_style">{props.patient.prenom} </span>
        </td>

        <td className="">
            <span  className="text_style">{props.patient.email} </span>
        </td>

        <td className="">
            <span  className="text_style">{props.patient.contact} </span>
        </td>

        <td className="">
            <span  className="text_style">{props.patient.age} </span>
        </td>
        
        <td className="">
            <span  className="text_style">{props.patient.Medecin!==null?props.patient.Medecin.nom+' '+props.patient.Medecin.prenom:<>{'non medecin'}</>} </span>
        </td>

        <td className="">
            <span  className="text_style">{props.patient.Secretaire!==null?props.patient.Secretaire.nom+' '+props.patient.Secretaire.prenom:<>{'non secretaire'}</>} </span>
        </td>
        <td>
         <button  className=" color_button" onClick={editer_patient}><i class="fa fa-pencil-square" aria-hidden="true" style={{fontSize:'30px',color:"#bbb"}}></i></button>
         <button className=" color_button" onClick={removePatient}><i class="fa fa-trash" aria-hidden="true" style={{fontSize:'30px',color:"#bbb"}}></i></button>
    
        </td>
    </tr>
    );
}