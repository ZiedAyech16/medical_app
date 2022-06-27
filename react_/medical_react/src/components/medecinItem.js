import Calender from "./calender";
import { Link } from "react-router-dom";
import { Navigate } from "react-router";
import { useNavigate } from "react-router-dom"
import "./medecin_item.css";
import { useEffect, useState } from "react";
import axios from "axios";

export default function MedecinItem(props){
    const navigate = useNavigate()

const onClickHandler = () => navigate(`/calender/${props.medecin.id}`)
const medecin=props.medecin;
const cabinet=props.cabinet;
console.log(props);
const [cabinets, setCabinets] = useState([]);
const [cabinet_, setCabinet_] = useState({});

const getCabinet = (med_id)=>{
       
    setTimeout(() => {
        cabinets.filter(cab=>cab.Medecin!==null&&cab.MedecinId===med_id).map(cab_=>setCabinet_(cab_));
       // return cabinet;

    }
    , 1500);


    // return {};
}



 getCabinet(medecin.id);
useEffect(()=>{
    axios.get("/cabinets").then(cabinet=>setCabinets(cabinet.data));
    cabinets.filter(cab=>cab.Medecin!==null&&cab.MedecinId===medecin.id).map(cab_=>setCabinet_(cab_));


},[])

    return(
        <tr className="tr__">
                                <td><img className="image_medecin" width={100} height={100} src={`http://127.0.0.1:5000/medecins/images/${medecin.image}`} /></td>
                                <td className="td__"> {medecin.num_order} </td>
                                <td className="td__"> {medecin.specialite} </td>
                                <td className="td__">{medecin.nom} </td>
                                <td className="td__"> {medecin.prenom} </td>
                                <td className="td__"> {medecin.contact} </td>
                                <td className="td__"> {medecin.email}</td>
                                <td className="td__"> {cabinet_.nom}</td>
                                <td className="td__"> {cabinet_.etablissement}</td>
                                <td  className="td__"><button className="btn_item_medecin" onClick={onClickHandler}><i class="fa fa-calendar-check-o" aria-hidden="true"   style={{fontSize:'30px',color:"#bbb"}}></i></button></td>
        </tr>
    );
}


const tr = {
    margin:"5px"
}