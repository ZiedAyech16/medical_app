import axios from "axios";
import { useEffect, useRef, useState } from "react";
import CabinetItem from "./cabinet_item";
import "./cabinet.css";
import { Navigate, useNavigate } from "react-router";
import { createSearchParams } from "react-router-dom";

export default function Cabinets(){
    const [cabinets,setCabinets]=useState([]);
    const [cabinetnom,setCabinetnom]=useState("");
    const searchcabinet = useRef();
    const navigate = useNavigate();

    useEffect(()=>{
        axios.get("/cabinets").then(r=>setCabinets(r.data));
        searchcabinet.current = cabinetnom;
    },[cabinetnom])


    const ajouterCabinet = (e)=>navigate("/cabinets/ajouter");

    return (
        <div>
 

            <div className="medecins_header">
    <div className="search__">
        <i class="fa fa-search" aria-hidden="true"></i>
        <input className="search__input" type="text" value={cabinetnom} onChange={(e)=>setCabinetnom(e.target.value)} placeholder="Cabinet :"></input>

    </div>
    <button className="color_button" onClick={ajouterCabinet}><i class="fa fa-plus-circle" aria-hidden="true"  style={{fontSize:'30px',color:"#bbb"}}></i></button> 

</div>
                        <div className="table__">
<div className="cabinet_card_cards">

                {
                    cabinets.filter(r=>r.nom.includes(cabinetnom)).map(r=><CabinetItem key={r.id} cabinet={r} />)
                }
                </div>
            </div>
            
        </div>
    );
}