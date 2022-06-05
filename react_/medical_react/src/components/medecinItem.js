import Calender from "./calender";
import { Link } from "react-router-dom";
import { Navigate } from "react-router";
import { useNavigate } from "react-router-dom"
import "./medecin_item.css";

export default function MedecinItem(props){
    const navigate = useNavigate()

const onClickHandler = () => navigate(`/calender/${props.medecin.id}`)
    const medecin=props.medecin;
    console.log(props);
    return(
        <div className="tr__">
                                <div><img className="image_medecin" width={200} height={200} src={`http://127.0.0.1:5000/medecins/images/${medecin.image}`} /></div>
                                <div className="td__">Num Order: {medecin.num_order} </div>
                                <div className="td__">Specialite: {medecin.specialite} </div>
                                <div className="td__">Nom: {medecin.nom} </div>
                                <div className="td__">Prenom: {medecin.prenom} </div>
                                <div className="td__">Contact: {medecin.contact} </div>
                                <div className="td__">Email: {medecin.email}</div>
                                <div  className="td__"><button className="btn_item_medecin" onClick={onClickHandler}>choisir rende-vous</button></div>
        </div>
    );
}


const tr = {
    margin:"5px"
}