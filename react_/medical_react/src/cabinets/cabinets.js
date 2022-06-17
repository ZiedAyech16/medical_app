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
            <div>
               <div className="cabinet_container_search">
                <input className="cabinet_search_nom" type="text" value={cabinetnom} onChange={(e)=>setCabinetnom(e.target.value)} placeholder="Nom de la Cabinet :"></input>
                <button className="cabinet_cabinet_ajouter_" onClick={ajouterCabinet}>Ajouter Cabinet</button> 

                </div>
            </div>
            <div className="cabinet_card_cards">
               
                {
                    cabinets.filter(r=>r.nom.includes(cabinetnom)).map(r=><CabinetItem key={r.id} cabinet={r} />)
                }
            </div>
            
        </div>
    );
}