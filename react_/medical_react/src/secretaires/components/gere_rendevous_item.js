import axios from "axios";
import { useEffect, useRef, useState } from "react";
import "./gerer_rendez_vous_item.css";
export default function Rendezvous_Item(props){
    console.log(props);
    const [userMedecin,setUserMedecin]=useState({});
    const [userPatient,setUserPatient]=useState({});


    useEffect(()=>{
        axios.get(`/users/${props.rendezvous.Medecin.UserId}`).then((res)=>setUserMedecin(res.data));
        axios.get(`/users/${props.rendezvous.Patient.UserId}`).then((res)=>setUserPatient(res.data));
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
        <div className="def_">

                <h4><strong>{userMedecin.prenom} {userMedecin.nom} </strong></h4>
        <img className="image_" src="/images/calender.jpg" width="200px" ></img>
            <h4><strong>{userPatient.prenom} {userPatient.nom} </strong></h4>

        </div>


        <div className="card">

            <div>
            Medecin
                <p><span className="title_title">Email: </span><strong className="title_content">{userMedecin.email}</strong> </p>
                <p><span className="title_title">Contact: </span><strong className="title_content">{userMedecin.contact}</strong></p>
                <p><span className="title_title">Specialite: </span><strong className="title_content">{props.rendezvous.Medecin.specialite}</strong> </p>
                <p><span className="title_title">Num Order </span><strong className="title_content">{props.rendezvous.Medecin.num_order}</strong> </p>
            </div>
            <div>
            Pateint
            <p><span className="title_title">Email: </span><strong className="title_content">{userPatient.email}</strong> </p>
            <p><span className="title_title">Contact: </span><strong className="title_content">{userPatient.contact}</strong> </p>
            <p><span className="title_title">Age </span><strong className="title_content">{userPatient.age}</strong> </p>

            </div>
        </div>
    </div>


                /*{ </tr> }*/
    );
}