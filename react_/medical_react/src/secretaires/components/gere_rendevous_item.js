import axios from "axios";
import { useEffect, useRef, useState } from "react";
import Swal from "sweetalert2";
import "./gerer_rendez_vous_item.css";

axios.defaults.baseURL ="http://127.0.0.1:5000";

export default function Rendezvous_Item(props){
    console.log(props);
    const [userMedecin,setUserMedecin]=useState({});
    const [userPatient,setUserPatient]=useState({});

    const ajouterfiche_patient = (e)=>{
        e.preventDefault();

        Swal.fire({
            title: 'Do you want to save the changes?',
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: 'Save',
            denyButtonText: `Don't save`,
          }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                axios.post("/fiche_patients",{})
              Swal.fire('Saved!', '', 'success')
            } else if (result.isDenied) {
              Swal.fire('Changes are not saved', '', 'info')
            }
          })
    }

    useEffect(()=>{
        axios.get(`/medecins/${props.rendezvous.MedecinId}`).then((res)=>setUserMedecin(res.data));
        axios.get(`/patients/${props.rendezvous.PatientId}`).then((res)=>setUserPatient(res.data));
    },[]);

    console.log(userMedecin);
    console.log(userPatient);
    return(
        // <tr>
                      //{
                          /* <td>{userMedecin.nom} </td>
                <td>{userMedecin.prenom}</td>
                <td>{userMedecin.contact}</td>
                <td>zied12@gmail.com</td>
                <td>ali</td>
                <td>Ahmed</td>
                <td>54444444</td>
                <td>
                    </td>

                <td>17/11/2022</td>
                <td>14:00</td>
                <td>
                    <button className="btn_valid">valider</button>
                    <button className="btn_reject">refuser</button>
                </td> */
            //}


    <div className="card_principal">



       
            <div>

                     <img className="image_card_rdv" src={`http://127.0.0.1:5000/patients/images/${userPatient.image}`}></img>

            </div>

            <div className="card_rdv">
            

                <h4><strong>{userPatient.prenom} {userPatient.nom} </strong></h4>

                <p><span className="title_title">Email: </span><strong className="title_content">{userPatient.email}</strong> </p>
                <p><span className="title_title">Contact: </span><strong className="title_content">{userPatient.contact}</strong> </p>
                <p><span className="title_title">Age </span><strong className="title_content">{userPatient.age}</strong> </p>
                <button onClick={ajouterfiche_patient} >ajouter au fiche patient</button>

            </div>
        
    </div>


                /*{ </tr> }*/
    );
}