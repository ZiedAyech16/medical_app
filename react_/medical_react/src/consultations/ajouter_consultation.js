import axios from "axios"
import { useEffect, useRef, useState } from "react"
import { useSearchParams } from "react-router-dom";
import {useParams} from "react-router";
import Swal from "sweetalert2";

axios.defaults.baseURL = "http://127.0.0.1:5000";
export default function AjouterConsultation(){
    const [searchparams] = useSearchParams();
    const parameter = useParams();
    const [consultation,setConsultation]=useState({
        date:'',
        duree:'',
        description:'',
        frais:'',
        apci:'',
        PatientId:0,
        SecretaireId:0
    })

    const [condition_pour_edite, setCondition_pour_edite] = useState(false);
    const [secretaire,setSecretaire] = useState([]);
    const searchPatient = useRef();

    const [patients, setPatients] = useState([])

    const [role, setRole] = useState(0);

    const parametre = useParams();
    const [secretaire__current, setSecretaire__current] = useState({});
    

    useEffect(()=>{
        setTimeout(() => {
        axios.get("/secretaires").then(re=>setSecretaire(re.data));
        axios.get("/patients").then((re)=>setPatients(re.data)); 

        if(localStorage.getItem("role")==="secretaire"){
            axios.get(`/secretaires/${localStorage.getItem("userId")}`).then(r=>setSecretaire__current(r.data));
        }

        if(parametre.role==="editer"&&condition_pour_edite===false){
            setConsultation({
                ...consultation,
                date:new Date(searchparams.get("date")),
                duree:searchparams.get("duree"),
                description:searchparams.get("description"),
                apci:searchparams.get("apci"),
                frais:searchparams.get("frais"),
                PatientId:searchparams.get("PatientId"),
                SecretaireId:searchparams.get("SecretaireId")
            });
            setCondition_pour_edite(true);
        }
        }, 2000);

        searchPatient.current = secretaire;
    },[secretaire])

   // secretaire.map((re)=>console.log(re));

    //console.log(consultation.SecretaireId)

    const user_role_event = (e)=>{
        if(e.target.checked){
        //setRole(e.target.value)}
        setConsultation({...consultation,apci:e.target.value});
        }
    }

    //console.log(consultation);
    

    const AjouterConsultation = (e)=>{
        e.preventDefault();
        const form = new FormData();
        form.append("date",consultation.date);
        form.append("duree",consultation.duree);
        form.append("description",consultation.description);
        form.append("frais",consultation.frais);
        form.append("apci",consultation.apci);
        form.append("SecretaireId",consultation.SecretaireId);
        form.append("PatientId",consultation.PatientId);
//normalement secretaire
console.log(searchparams.get("id"))
        if(parameter.role==="editer"){
            axios.put(`/consultations/${searchparams.get("id")}`,consultation).then(r=>{
                console.log("rr",r);
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Consultation a été modifié',
                    showConfirmButton: false,
                    timer: 2500
                  })
            });

        }else{

        axios.post("/consultations",consultation).then(r=>{
            console.log(r);
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Consultation a été crée!!',
                showConfirmButton: false,
                timer: 2500
              })

 


        });
        }

    }
    
    console.log(consultation);

    return(
    <div className="consultation_ajoute_">
        <h2 className="consultation_ajoute_title">Consultation</h2>
        <div className="consultation_ajoute_container">
            <div className="consultation_ajoute_item">
                <label className="consultation_ajoute_label" >Date :</label>
                <input className="consultation_ajoute_input" type="date" value={consultation.date} onChange={(e)=>setConsultation({...consultation,date:e.target.value})} name="date" />
            </div>
            <div className="consultation_ajoute_item">
                <label className="consultation_ajoute_label" >Duree :</label>
                <input className="consultation_ajoute_input" type="number" step={0.01} value={consultation.duree} onChange={(e)=>setConsultation({...consultation,duree:e.target.value})} name="duree" />
            </div>

            <div className="consultation_ajoute_item">
                <label  className="consultation_ajoute_label">Frais :</label>
                <input className="consultation_ajoute_input" type="number" step={0.01} value={consultation.frais} onChange={(e)=>setConsultation({...consultation,frais:e.target.value})} name="frais" />
            </div>

            <div className="consultation_ajoute_item">
                <label className="consultation_ajoute_label" >Description :</label>
                <textarea className="consultation_ajoute_input"  type="text" cols={60} rows={5} value={consultation.description} onChange={(e)=>setConsultation({...consultation,description:e.target.value})} name="description" />
            </div>
            <div className="consultation_ajoute_item">
                <label className="consultation_ajoute_label" >Apci :</label>
                <div className="consultation_ajoute_item">
                <div className="consultation_ajoute_input_radio">
                    <input className="" type="radio" checked={consultation.apci==="0"} value={0} onChange={(e)=>setConsultation({...consultation,apci:e.target.value})} name="apci"  />oui
                    <input className="" type="radio" checked={consultation.apci==="1"} value={1} onChange={(e)=>setConsultation({...consultation,apci:e.target.value})} name="apci" />non
                </div>
                </div>
                
            </div>

            <div className="consultation_ajoute_item">
                <label className="consultation_ajoute_label" >Secretaire :</label>
                <select className="consultation_ajoute_input" name="SecretaireId"  value={consultation.SecretaireId} onChange={(e)=>setConsultation({...consultation,SecretaireId:e.target.value})} >
                    <option></option>
                    {
                      localStorage.getItem("role")==="medecin"?secretaire.filter(r=>r.MedecinId===parseInt(localStorage.getItem("userId"))).map(re=><option value={re.id}> {re.nom} {re.prenom} </option>):<></>

                    }
                    {
                      localStorage.getItem("role")==="secretaire"?secretaire.filter(r=>r.MedecinId===parseInt(secretaire__current.MedecinId)).map(re=><option value={re.id}> {re.nom} {re.prenom} </option>):<></>

                    }
                </select>
            </div>

            <div className="consultation_ajoute_item">
                <label className="consultation_ajoute_label">Patient :</label>
                <select className="consultation_ajoute_input" name="PatientId" value={consultation.PatientId} onChange={(e)=>setConsultation({...consultation,PatientId:e.target.value})}>
                    <option></option>
                    {patients.filter(re=>re.SecretaireId===parseInt(consultation.SecretaireId)).map((re)=><option value={re.id}>{re.nom}{' '}{re.prenom} </option>)}
                </select>
            </div>

            <div className="consultation_ajoute_item">
                <button className="consultation_ajoute_button" onClick={AjouterConsultation}>Ajouter</button>
            </div>
        </div>

    </div>)
}