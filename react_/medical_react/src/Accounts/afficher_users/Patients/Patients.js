import axios from "axios";
import { useEffect, useRef, useState } from "react";
import Patient_Item from "./Patient_Item";
import "./Patient.css";
import { useNavigate } from "react-router";

export default function Gere_Patients(){
    const [patients,setAllpatient] = useState([]);
    patients.map((result)=>console.log(result));

    const search = useRef();
    const [search_,setSearch_]=useState('');

    const navigate = useNavigate();

    const goto_register = ()=>{
       
        navigate("/register/patient");
    }

    useEffect(()=>{
        axios.get("/patients").then(result=>setAllpatient(result.data));
        search.current=search_;
    },[search_]);
    return (
<div>
<div className="container_search"><input className="search_nom"  type="text" value={search_} onChange={(e)=>setSearch_(e.target.value)} placeholder="Patient :"></input>
<button className="ajouter_" onClick={goto_register}>Ajouter Patient</button> 

</div>

        <div className="gere_secretaire_container">
           { patients.filter(res=>res.nom.includes(search_)).map((result)=> <Patient_Item key={result.id} patient={result} />)}

        </div></div>
        );
}