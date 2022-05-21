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
        <tr className="tr__">
                                <td className="td__">{medecin.num_order} </td>
                                <td className="td__">{medecin.specialite} </td>
                                <td className="td__">{medecin.User.nom} </td>
                                <td className="td__">{medecin.User.prenom} </td>
                                <td className="td__">{medecin.User.contact} </td>
                                <td className="td__"></td>
                                <td  className="td__"><button className="btn_item_medecin" onClick={onClickHandler}>choisir rende-vous</button></td>
        </tr>
    );
}


const tr = {
    margin:"5px"
}