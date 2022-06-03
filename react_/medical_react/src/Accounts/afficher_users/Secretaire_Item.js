import { useNavigate } from "react-router";
import { createSearchParams } from "react-router-dom";
import "./Secretaire.css";
import axios from "axios";

axios.defaults.baseURL = "http://127.0.0.1:5000";

export default function Secretaire_Item(props){
    console.log(props);
    const navigate = useNavigate();


    const removeSecretaire = (e)=>{
        e.preventDefault();
        axios.delete(`/secretaires/${props.secretaire.id}`);
        navigate("/gere/secretaires");
    }
    
    const editer_secretaire = (e)=>{
        e.preventDefault();
        navigate({
            pathname:"/register/secretaire",
            search:createSearchParams(
                {
                    id:props.secretaire.id,
                    nom:props.secretaire.nom,
                    prenom:props.secretaire.prenom,
                    age:props.secretaire.age,
                    email:props.secretaire.email,
                    contact:props.secretaire.contact,
                    username:props.secretaire.username,
                    password:props.secretaire.password,
                    image:props.secretaire.image,
                }
            ).toString()
        })
    }
    return(
        <div className="gere_secretaire_card">
            <img className="image_card_" src={`http://127.0.0.1:5000/secretaires/images/${props.secretaire.image}`} alt="image 1" width={200} height={200} />
            <div>
                <h3 className="gere_secretaire_card_title">{props.secretaire.nom} {props.secretaire.prenom} </h3>
            </div>
            <div>
                <div>
                    <p className="gere_secretaire_card_text">Email: {props.secretaire.email} </p>
                    <p className="gere_secretaire_card_text">Contact: {props.secretaire.contact} </p>
                    <p className="gere_secretaire_card_text">Age: {props.secretaire.age} </p>
                </div>
                <div>
                    <button  className="gere_secretaire_card_button color_1" onClick={editer_secretaire}>Editer</button>
                    <button className="gere_secretaire_card_button color_2" onClick={removeSecretaire}>Supprimer</button>
                </div>

            </div>
        </div>
    );
}