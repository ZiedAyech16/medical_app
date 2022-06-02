import { useNavigate } from "react-router";
import "./admin_gere_secretaire.css";

export default function Gerer_Secretaire_ByAdmin_Item(props){
    const navigate=useNavigate();

    const editer_secretaire = ()=>navigate(`/editer/${props.seretaire.id}/secretaire`)
    return (
        <div className="card_doctor">
            <img  src={`http://127.0.0.1:5000/users/images/${props.seretaire.image}`} width={100} height={100} />
            <div className="card_nom_prenom">{props.seretaire.nom} {props.seretaire.prenom}</div>
            <div className="card_div"><div className="card_text">Specialite: </div><div className="card_text">{props.seretaire.specialite}</div></div>
            <div className="card_div"><div className="card_text">contact: </div><div className="card_text">{props.seretaire.contact}</div></div>
            <div className="card_div"><div className="card_text">Email: </div><div className="card_text">{props.seretaire.email}</div></div>
            <div className="card_div"><div className="card_text">Age: </div><div className="card_text">{props.seretaire.age}</div></div>
            <div className="card_div"><button className="card_button_editer" onClick={editer_secretaire}>Editer</button><button className="card_button_supprimer">Supprimer</button> </div>

        </div>

    );
}