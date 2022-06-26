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
<div className="">

<div className="medecins_header">
    <div className="search__">
        <i class="fa fa-search" aria-hidden="true"></i>
        <input className="search__input" type="text" value={search_} onChange={(e)=>setSearch_(e.target.value)} placeholder="Medecin :"></input>
    </div>
    <button className="color_button" onClick={goto_register}><i class="fa fa-plus-circle" aria-hidden="true"  style={{fontSize:'30px',color:"#bbb"}}></i></button> 

</div>


</div>

<div className="table__">
    <table className="table_container_medecins ">
        <caption style={{textAlign:"left",captionSide:"top"}}>Liste des Medecins</caption>
        <thead className="table_container_medecins_head">
            <th>Image</th>
            <th>Nom</th>
            <th>Prenom</th>
            <th>Email</th>
            <th>Contact</th>
            <th>Date naisance</th>
            <th>Action</th>
        </thead>
            {/* <tr className="gere_secretaire_container"> */}
            <tbody>  { medecins.filter(res=>res.nom.includes(search_)).map((result)=> <Medecin_Item key={result.id} medecin={result} />)}</tbody>

            {/* </tr> */}
            
            </table>
        </div>
        </div>
        );
}