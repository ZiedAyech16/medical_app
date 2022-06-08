import { useState } from "react";
import { createSearchParams } from "react-router-dom";
import {  useNavigate } from "react-router";
import axios from "axios";
import Swal from "sweetalert2";

export default function CabinetItem(props){
    const cabinet = props.cabinet;
    const navigate = useNavigate();
    
    const editerCabinet = (e)=>navigate({
        pathname:"/cabinets/ajouter/medecin",
        search:createSearchParams(cabinet).toString()
    });


    const supprimerCabinet = ()=>{
        axios.delete(`/cabinets/${cabinet.id}`).then(re=>{
            Swal.fire({
                position:"center",
                title:"Cabinet supprimé",
                icon:"success",
                showConfirmButton:false,
                timer:2500
            })
        })
    }
    
    
    return (
        <div>
            <div className="cabinet_card">
                <div className="cabinet_card_item">
                <img  className="cabinet_card_image" src={`http://127.0.0.1:5000/cabinets/images/${cabinet.image}`}></img>
                <h4 className="cabinet_card_nom">{cabinet.nom} </h4>
                </div>

                <div className="cabinet_card_item">
               
                    <h5 className="cabinet_card_nom"><strong>Etablissement : </strong>{cabinet.etablissement} </h5>
                
                    <div className="cabinet_card_item">
                        <h5 className="cabinet_card_nom">Medecin Detail</h5>
                        <div className="cabinet_card_text">Nom :{cabinet.Medecin.nom} </div>
                        <div className="cabinet_card_text">Prenom :{cabinet.Medecin.prenom} </div>
                        <div className="cabinet_card_text">Contact :{cabinet.Medecin.contact} </div>

                    </div>
                    <div>
                        <button className="cabinet_card_button cabinet_card_color1" onClick={editerCabinet}>Editer</button>
                        <button className="cabinet_card_button cabinet_card_color2" onClick={supprimerCabinet}>Supprimer</button>
                    </div>
                </div>
        
            </div>
            
        </div>
    );
}