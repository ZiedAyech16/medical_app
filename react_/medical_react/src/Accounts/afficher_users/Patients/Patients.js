import axios from "axios";
import { useEffect, useRef, useState } from "react";
import Patient_Item from "./Patient_Item";
import "./Secretaire.css";

export default function Gere_Patients(){
    const [patients,setAllpatient] = useState([]);
    patients.map((result)=>console.log(result));

    const search = useRef();
    const [search_,setSearch_]=useState('');

    useEffect(()=>{
        axios.get("/patients").then(result=>setAllpatient(result.data));
        search.current=search_;
    },[search_]);
    return (
<div>
<div><input type="text" value={search_} onChange={(e)=>setSearch_(e.target.value)} placeholder="Patient :"></input></div>

        <div className="gere_secretaire_container">
           { patients.filter(res=>res.nom.includes(search_)).map((result)=> <Patient_Item key={result.id} patient={result} />)}

        </div></div>
        );
}