import axios from "axios";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Swal from "sweetalert2";
import { useParams } from "react-router";
import "./cabinet.css";

axios.defaults.baseURL="http://localhost:5000";
export default function AjouterCabinet(){
    const [searchparams] = useSearchParams();
    const parametre = useParams();
    const [cabinets,caninets]=useState();
    const [medecins,setMedecins] = useState([]);
    const [file,setFile] = useState(null);
    const [title,setTitle]=useState("Ajouter ");
    const [cabinet,setCabinet] = useState({
        nom:'',
        etablissement:'',
        MedecinId:0
    });
    useEffect(()=>{
        axios.get("/medecins").then(r=>setMedecins(r.data));

        if(parametre.role==="medecin"){
            setTitle("Editer ");
            setCabinet({...cabinet,
            nom:searchparams.get("nom"),
            etablissement:searchparams.get("etablissement"),
            MedecinId:searchparams.get("MedecinId")
            })
        }
    },[])

    const file_state = (e)=>{
        setFile(e.target.files[0]);
    }



const ajouterCabinet = ()=>{
    const form = new FormData();
    form.append("photo",file);
    form.append("etablissement",cabinet.etablissement);
    form.append("nom",cabinet.nom);
    form.append("MedecinId",cabinet.MedecinId);

    const config = {
        headers:{"content-type":"mutipart/form-data"}
    }

    console.log(cabinet);

    if(parametre.role==="medecin"){
        axios.put(`/cabinets/${searchparams.get("id")}`,form,config).then(cabinet=>{
            console.log(cabinet);
            Swal.fire({
                position:'center',
                icon:"success",
                timer:2500,
                showConfirmButton:false,
                title:"Cabinet Modifier"
            })
        })
    }else{

    axios.post("/cabinets",form,config).then(r=>{
        console.log(r.data);
        Swal.fire({
            position:'center',
            icon:"success",
            title:"Cabinet ajoutée",
            timer:2000,
            showConfirmButton:false
        })
    
    });
    }
}


    return (
        <div className="cabinet_ajouter_">
            <div className="cabinet_ajouter_container"> 
               <h3 className="cabinet_ajoute_title">{title} Cabinet</h3>

                <div className="cabinet_ajouter_item">
                    <label className="cabinet_ajouter_label">Nom :</label>
                    <input className="cabinet_ajouter_input" type="text" name="nom" value={cabinet.nom} onChange={(e)=>setCabinet({...cabinet,nom:e.target.value})}  />
                </div>
                <div className="cabinet_ajouter_item">
                    <label className="cabinet_ajouter_label">Etablissment :</label>
                    <input className="cabinet_ajouter_input" type="text" name="etablissement" value={cabinet.etablissement} onChange={(e)=>setCabinet({...cabinet,etablissement:e.target.value})}  />
                </div>
                <div className="cabinet_ajouter_item">
                    <label className="cabinet_ajouter_label">Medecin :</label>
                    <select className="cabinet_ajouter_input" name="MedecinId" value={cabinet.MedecinId} onChange={(e)=>setCabinet({...cabinet,MedecinId:e.target.value})}>
                       <option>Selectioinnez cabinet</option>
                        {medecins.map(r=><option key={r.id} value={r.id}>{r.nom} {r.prenom} </option>)}
                        
                    </select>
                </div>
                <div className="cabinet_ajouter_item">
                    <label className="cabinet_ajouter_label">Photo :</label>
                    <input className="cabinet_ajouter_input" type="file" name="photo"  onChange={file_state} />
                </div>

                <div className="cabinet_ajouter_item">
                    <button className="cabinet_ajouter_button" onClick={ajouterCabinet}>Ajouter</button>
                </div>
            </div>
            
        </div>
    );
}