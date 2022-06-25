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
       
        navigate("/register/patient/ajouter");
    }

    useEffect(()=>{
        axios.get("/patients").then(result=>setAllpatient(result.data));
        search.current=search_;
    },[search_]);
    return (
<div>


<div className="medecins_header">
    <div className="search__">
        <i class="fa fa-search" aria-hidden="true"></i>
        <input className="search__input"  type="text" value={search_} onChange={(e)=>setSearch_(e.target.value)} placeholder="Patient :"></input>

    </div>
    <button className="color_button" onClick={goto_register}><i class="fa fa-plus-circle" aria-hidden="true"  style={{fontSize:'30px',color:"#bbb"}}></i></button> 

</div>




<table className="table_container_medecins">
    <caption style={{textAlign:"left",captionSide:"top"}}>Liste des patients</caption>
    <thead className="table_container_medecins_head">
        <th>Image</th>
        <th>Nom</th>
        <th>Prenom</th>
        <th>Email</th>
        <th>Contact</th>
        <th>Date naisance</th>
        <th>Medecin</th>
        <th>Secretaire</th>
        <th>Action</th>
    </thead> 
     { patients.filter(res=>res.nom.includes(search_)).map((result)=> <Patient_Item key={result.id} patient={result} />)}

        </table></div>
        );
}