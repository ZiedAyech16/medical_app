import axios from "axios";
import { useEffect, useRef, useState } from "react";
import Secretaire_Item from "./Secretaire_Item";
import "./Secretaire.css";
import { useNavigate } from "react-router";

export default function Gere_Secretaire(){
    const [secretaires,setAllseretaire] = useState([]);
    secretaires.map((result)=>console.log(result));

    const search = useRef();
    const [search_,setSearch_]=useState('');

    const navigate = useNavigate();

    const goto_register = ()=>{
       
        navigate("/register/secretaire/ajouter");
    }

    useEffect(()=>{
        axios.get("/secretaires").then(result=>setAllseretaire(result.data));
        search.current=search_;
    },[search_]);
    return (
<div>

<div className="medecins_header">
    <div className="search__">
        <i class="fa fa-search" aria-hidden="true"></i>
        <input className="search__input" type="text" value={search_} onChange={(e)=>setSearch_(e.target.value)} placeholder="Secretaire :"></input>
    </div>
    <button className="color_button" onClick={goto_register}><i class="fa fa-plus-circle" aria-hidden="true"  style={{fontSize:'30px',color:"#bbb"}}></i></button> 

</div>

<div className="">
 </div>

 <div className="table__">

 <table className="table_container_medecins">
    <caption style={{textAlign:"left",captionSide:"top"}}>Liste des Secretaires</caption>
    <thead className="table_container_medecins_head">
        <th>Image</th>
        <th>Nom</th>
        <th>Prenom</th>
        <th>Email</th>
        <th>Contact</th>
        <th>Date naisance</th>
        <th>Medecin</th>
        <th>Action</th>
    </thead>

           { secretaires.filter(res=>res.nom.includes(search_)).map((result)=> <Secretaire_Item key={result.id} secretaire={result} />)}

</table></div>
        </div>
        );
}