import axios from "axios";
import { useEffect, useRef, useState } from "react";
import "./fiche_comptabilite.css";

export default function FicheComptabilite(){
    const [date_, setDate_] = useState("");
    const [old_date_, setOldDate_] = useState("");
    const [consultations, setConsultations] = useState([]);
    const [totale, setTotale] = useState(0);
    const search_date = useRef();

    const getTotale = ()=>{

        setTimeout(()=>{
            consultations.filter(co=>date_!==""&&new Date(co.date).toISOString().substring(0,7)===new Date(date_).toISOString().substring(0,7)).map(re=>setTotale(parseInt(totale)+parseInt(re.frais)))

        },1200);
    }

    useEffect(()=>{
        axios.get("/consultations").then(cons=>setConsultations(cons.data));
        search_date.current = date_;
        consultations.filter(co=>date_!==""&&new Date(co.date).toISOString().substring(0,7)===new Date(date_).toISOString().substring(0,7)&&parseInt(localStorage.getItem("userId"))===co.Secretaire.MedecinId).map(re=>setTotale(parseInt(totale)+parseInt(re.frais)));



    },[date_]);
    console.log("cond",old_date_!==date_);
    if(old_date_!==date_){
        setOldDate_(date_);
        setTotale(0);
    }
    console.log("cur"+search_date.current,"normal"+date_);

    return(
        <div className="fichecomptabilite">
            <h2>Fiche Comptabilite</h2>
            <div>
                <input className="date___" placeholder="frais" type="month" value={date_} onChange={(e)=>setDate_(e.target.value)} />
            </div>
            <div>
                <h3 className="totale_date">Totale en {date_}</h3>
            </div>
            <div>
                <h3>{totale}dt</h3>
            </div>

     


    


        </div>
    );
}