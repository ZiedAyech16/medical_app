import axios from "axios";
import { useEffect, useRef, useState } from "react";
import Admin_Item from "./Admin_Item";
import "./Admin.css";
import { useNavigate } from "react-router";

export default function Gere_Admins(){
    const [admins,setAlladmin] = useState([]);
    admins.map((result)=>console.log(result));

    const navigate = useNavigate();

    const search = useRef();
    const [search_,setSearch_]=useState('');

    const goto_register = ()=>{
       
        navigate("/register/admins");
    }

    useEffect(()=>{
        axios.get("/admins").then(result=>setAlladmin(result.data));
        search.current=search_;
    },[search_]);
    return (
<div>
<div className="container_search"><input className="search_nom" type="text" value={search_} onChange={(e)=>setSearch_(e.target.value)} placeholder="Admin :"></input>
<button className="ajouter_" onClick={goto_register}>Ajouter Admin</button> </div>

        <div className="gere_secretaire_container">
           { admins.filter(res=>res.nom.includes(search_)).map((result)=> <Admin_Item key={result.id} admin={result} />)}

        </div></div>
        );
}