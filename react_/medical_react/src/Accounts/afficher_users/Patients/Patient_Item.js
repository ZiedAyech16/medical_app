import { useNavigate } from "react-router";
import { createSearchParams } from "react-router-dom";
import "./Secretaire.css";
import axios from "axios";

axios.defaults.baseURL = "http://127.0.0.1:5000";

export default function Patient_Item(props){
    console.log(props);
    const navigate = useNavigate();


    const removePatient = (e)=>{
        e.preventDefault();
        axios.delete(`/patients/${props.patient.id}`);
        navigate("/gere/patients");
    }
    
    const editer_patient = (e)=>{
        e.preventDefault();
        navigate({
            pathname:"/register/patient",
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
                }
            ).toString()
        })
    }
    return(
        <div className="gere_secretaire_card">
            <img src={`http://127.0.0.1:5000/patients/images/${props.patient.image}`} alt="image 1" width={200} height={200} />
            <div>
                <h3 className="gere_secretaire_card_title">{props.patient.nom} {props.patient.prenom} </h3>
            </div>
            <div>
                <div>
                    <p className="gere_secretaire_card_text">Email:{props.patient.email} </p>
                    <p className="gere_secretaire_card_text">Contact:{props.patient.contact} </p>
                    <p className="gere_secretaire_card_text">Age:{props.patient.age} </p>
                </div>
                <div>
                    <button  className="gere_secretaire_card_button color_1" onClick={editer_patient}>Editer</button>
                    <button className="gere_secretaire_card_button color_2" onClick={removePatient}>Supprimer</button>
                </div>

            </div>
        </div>
    );
}