import { useNavigate } from "react-router";
import "./admin_gere_doctors.css";

export default function Gerer_Doctor_ByAdmin_Item(props){
    const navigate=useNavigate();

    const editer_doctor = ()=>navigate(`/editer/${props.doctor.id}/doctor`)
    return (
        <div className="card_doctor">
            <img  src={`http://127.0.0.1:5000/users/images/${props.doctor.User.image}`} width={100} height={100} />
            <div className="card_nom_prenom">{props.doctor.User.nom} {props.doctor.User.prenom}</div>
            <div className="card_div"><div className="card_text">Specialite: </div><div className="card_text">{props.doctor.specialite}</div></div>
            <div className="card_div"><div className="card_text">contact: </div><div className="card_text">{props.doctor.User.contact}</div></div>
            <div className="card_div"><div className="card_text">Email: </div><div className="card_text">{props.doctor.User.email}</div></div>
            <div className="card_div"><div className="card_text">Age: </div><div className="card_text">{props.doctor.User.age}</div></div>
            <div className="card_div"><button className="card_button_editer" onClick={editer_doctor}>Editer</button><button className="card_button_supprimer">Supprimer</button> </div>

        </div>

    );
}