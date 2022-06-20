import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router";
import OrdonnanceItem from "./ordonnance_item";

export default function Ordonnances(){
    const [ordonnances, setOrdonnances] = useState([]);
    const [ordonnance, setOrdonnance] = useState("");
    const search_pat = useRef();
    const navigate = useNavigate();
    const [user_,setUser_] = useState({});

    useEffect(()=>{
        if(localStorage.getItem("role")==="patient"){
            axios.get(`/patients/${localStorage.getItem("userId")}`).then(r=>setUser_(r.data));
        }
        axios.get("/ordonnances").then(r=>setOrdonnances(r.data));
        search_pat.current = ordonnance;
    },[ordonnance])

    const ajouterOrdonnance = ()=>navigate("/ordonnances/ajouter");
    
    return (
        <div className="">
                        <div className="container_search_ordonnance">
            <input type="text" className="search_nom_ordonnance" placeholder="Nom de patient :" value={ordonnance} onChange={(e)=>setOrdonnance(e.target.value)} />
            {localStorage.getItem("role")==="medecin"? <button className="button_consultation" onClick={ajouterOrdonnance}>Ajouter Un Ordonnance</button>:<></>}

            </div>
            <div className="ordonnance_items">
               { localStorage.getItem("role")==="medecin"? ordonnances.filter(r_=>(r_.Patient!==null&&r_.Medecin!==null&&r_.Patient.nom.includes(ordonnance))).map(r=><OrdonnanceItem key={r.id} ordonnance={r} />):ordonnances.filter(r_=>(r_.Patient!==null&&r_.Medecin!==null&&r_.Patient.nom.includes(ordonnance)&&r_.MedecinId===user_.MedecinId&&r_.PatientId===parseInt(localStorage.getItem("userId")))).map(r=><OrdonnanceItem key={r.id} ordonnance={r} />)}
            </div>

        </div>
    );
}