import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router";
import "./Medecin.css";
import Medecin_Item from "./Medecin_item";

export default function Gere_Medecin(){
    const [medecins,setAllMedecins] = useState([]);
    medecins.map((result)=>console.log(result));

    const search = useRef();
    const [search_,setSearch_]=useState('');

    const navigate = useNavigate();

    const goto_register = ()=>{
       
        navigate("/register/medecin/ajouter");
    }

    useEffect(()=>{
        axios.get("/medecins").then(result=>setAllMedecins(result.data));
        search.current=search_;
    },[search_]);
    return (
<div >
<div className="container_search">
<input className="search_nom" type="text" value={search_} onChange={(e)=>setSearch_(e.target.value)} placeholder="Medecin :"></input>
<button className="ajouter_" onClick={goto_register}>Ajouter Medecin</button> 

</div>
<h2 className="title_liste">Liste des Medecins</h2>


        <div className="gere_secretaire_container">
           { medecins.filter(res=>res.nom.includes(search_)).map((result)=> <Medecin_Item key={result.id} medecin={result} />)}

        </div></div>
        );
}