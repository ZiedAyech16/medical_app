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
        <tr style={tr}>
                                <td>{medecin.num_order} </td>
                                <td>{medecin.specialite} </td>
                                <td>{medecin.User.nom} </td>
                                <td>{medecin.User.prenom} </td>
                                <td>{medecin.User.contact} </td>
                                <td></td>
                                <button className="btn_item_medecin" onClick={onClickHandler}>choisir rende-vous</button>
        </tr>
    );
}


const tr = {
    margin:"5px"
}