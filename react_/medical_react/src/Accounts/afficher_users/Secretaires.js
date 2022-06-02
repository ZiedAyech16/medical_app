import axios from "axios";
import { useEffect, useRef, useState } from "react";
import Secretaire_Item from "./Secretaire_Item";
import "./Secretaire.css";

export default function Gere_Secretaire(){
    const [secretaires,setAllseretaire] = useState([]);
    secretaires.map((result)=>console.log(result));

    const search = useRef();
    const [search_,setSearch_]=useState('');

    useEffect(()=>{
        axios.get("/secretaires").then(result=>setAllseretaire(result.data));
        search.current=search_;
    },[search_]);
    return (
<div>
<div><input type="text" value={search_} onChange={(e)=>setSearch_(e.target.value)} placeholder="Secretaire :"></input></div>

        <div className="gere_secretaire_container">
           { secretaires.filter(res=>res.nom.includes(search_)).map((result)=> <Secretaire_Item key={result.id} secretaire={result} />)}

        </div></div>
        );
}