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
       
        navigate("/register/secretaire");
    }

    useEffect(()=>{
        axios.get("/secretaires").then(result=>setAllseretaire(result.data));
        search.current=search_;
    },[search_]);
    return (
<div>
<div className="container_search"><input className="search_nom" type="text" value={search_} onChange={(e)=>setSearch_(e.target.value)} placeholder="Secretaire :"></input>
<button className="ajouter_" onClick={goto_register}>Ajouter Admin</button>
 </div>



        <div className="gere_secretaire_container">
           { secretaires.filter(res=>res.nom.includes(search_)).map((result)=> <Secretaire_Item key={result.id} secretaire={result} />)}

        </div></div>
        );
}