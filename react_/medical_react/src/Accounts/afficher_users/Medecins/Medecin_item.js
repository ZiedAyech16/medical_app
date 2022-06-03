import { useNavigate } from "react-router";
import { createSearchParams } from "react-router-dom";
import "./Medecin.css";
import axios from "axios";

axios.defaults.baseURL = "http://127.0.0.1:5000";

export default function Medecin_Item(props){
    console.log(props);
    const navigate = useNavigate();


    const removeMedecin = (e)=>{
        e.preventDefault();
        axios.delete(`/medecins/${props.medecin.id}`);
        navigate("/gere/medecins");
    }
    
    const editer_medecin = (e)=>{
        e.preventDefault();
        navigate({
            pathname:"/register/medecin",
            search:createSearchParams(
                {
                    id:props.medecin.id,
                    nom:props.medecin.nom,
                    prenom:props.medecin.prenom,
                    age:props.medecin.age,
                    email:props.medecin.email,
                    contact:props.medecin.contact,
                    num_order:props.medecin.num_order,
                    specialite:props.medecin.specialite,
                    username:props.medecin.username,
                    password:props.medecin.password,
                    image:props.medecin.image,
                    MedecinId:props.medecin.MedecinId
                }
            ).toString()
        })
    }
    return(
        <div className="gere_secretaire_card_m">
            <img className="image_card_" src={`http://127.0.0.1:5000/medecins/images/${props.medecin.image}`} alt="image 1"  />
            <div>
                <h3 className="gere_secretaire_card_title">{props.medecin.nom} {props.medecin.prenom} </h3>
            </div>
            <div>
                <div>
                    <p className="gere_secretaire_card_text">Email:{props.medecin.email} </p>
                    <p className="gere_secretaire_card_text">Contact:{props.medecin.contact} </p>
                    <p className="gere_secretaire_card_text">Age:{props.medecin.age} </p>
                </div>
                <div>
                    <button  className="gere_secretaire_card_button color_1" onClick={editer_medecin}>Editer</button>
                    <button className="gere_secretaire_card_button color_2" onClick={removeMedecin}>Supprimer</button>
                </div>

            </div>
        </div>
    );
}