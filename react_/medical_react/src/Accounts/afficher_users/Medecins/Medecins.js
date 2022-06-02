import axios from "axios";
import { useEffect, useRef, useState } from "react";
import "./Secretaire.css";
import Medecin_Item from "./Medecin_item";

export default function Gere_Medecin(){
    const [medecins,setAllMedecins] = useState([]);
    medecins.map((result)=>console.log(result));

    const search = useRef();
    const [search_,setSearch_]=useState('');

    useEffect(()=>{
        axios.get("/medecins").then(result=>setAllMedecins(result.data));
        search.current=search_;
    },[search_]);
    return (
<div>
<div><input type="text" value={search_} onChange={(e)=>setSearch_(e.target.value)} placeholder="Medecin :"></input></div>

        <div className="gere_secretaire_container">
           { medecins.filter(res=>res.nom.includes(search_)).map((result)=> <Medecin_Item key={result.id} medecin={result} />)}

        </div></div>
        );
}