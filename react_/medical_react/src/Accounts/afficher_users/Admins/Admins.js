import axios from "axios";
import { useEffect, useRef, useState } from "react";
import Patient_Item from "./Admin_Item";
import "./Secretaire.css";

export default function Gere_Admins(){
    const [admins,setAlladmin] = useState([]);
    admins.map((result)=>console.log(result));

    const search = useRef();
    const [search_,setSearch_]=useState('');

    useEffect(()=>{
        axios.get("/admins").then(result=>setAlladmin(result.data));
        search.current=search_;
    },[search_]);
    return (
<div>
<div><input type="text" value={search_} onChange={(e)=>setSearch_(e.target.value)} placeholder="Admin :"></input></div>

        <div className="gere_secretaire_container">
           { admins.filter(res=>res.nom.includes(search_)).map((result)=> <Patient_Item key={result.id} admin={result} />)}

        </div></div>
        );
}