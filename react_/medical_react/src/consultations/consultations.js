import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router";
import ConsultationItem from "./consultaion_item";

axios.defaults.baseURL = "http://127.0.0.1:5000";
export default function Consultation(){
    const [all_consultation,setAllConsultation]=useState([]);
    const [nom_,setNom_] = useState("");
    const [prenom_, setPrenom_] = useState("");
    const [date_,setDate_]= useState(new Date());
    const [secretaire,setSecretaire]=useState("");
    const search_nom = useRef();
    const search_prenom = useRef();
    const search_date = useRef();
    const search_secretaire=useRef();
    const [secretaires,setSecretaires] = useState([]);
    const navigate = useNavigate();

    const [secretaire_of_med, setSecretaire_of_med] = useState({});

    const [_date, set_date] = useState("");

    useEffect(()=>{
        axios.get("/consultations").then((re)=>setAllConsultation(re.data));
        search_nom.current = nom_;
        search_prenom.current = prenom_;
        search_date.current = date_;
        search_secretaire.current = secretaire;
        axios.get("/secretaires").then(r=>setSecretaires(r.data));

        if(localStorage.getItem("role")==="secretaire"){
            axios.get(`/secretaires/${localStorage.getItem("userId")}`).then(r=>setSecretaire_of_med(r.data));
        }
    },[]);

    console.log("date",date_);

    all_consultation.map((re)=>console.log((parseInt((new Date(re.date)).toISOString().substring(0,4))
+" "+parseInt((new Date(date_)).toISOString().substring(0,4))
    )));
    const ajouterConsultation = (e)=>navigate("/consultations/ajouter");

    return (
        <div>
            <div className="container_search_consultation">
            <input type="text" className="search_nom_consultation" placeholder="Nom :" value={nom_} onChange={(e)=>setNom_(e.target.value)} />
            <input type="text" className="search_nom_consultation" placeholder="Prenom :" value={prenom_} onChange={(e)=>setPrenom_(e.target.value)} />
            <input type="date" className="search_nom_consultation" value={date_} onChange={(e)=>{setDate_(e.target.value)}} />
            <select className="search_nom_consultation" name="secretaire" value={secretaire} onChange={(e)=>setSecretaire(e.target.value)}>
                <option placeholder="">Search Secretaire:</option>
               {localStorage.getItem("role")==="medecin"? secretaires.filter(t=>t.MedecinId===parseInt(localStorage.getItem("userId"))).map((r)=><option key={r.id} value={r.id}>
                   {r.nom} {r.prenom} 
                   </option>):<></>}

                   {localStorage.getItem("role")==="secretaire"? secretaires.filter(t=>t.MedecinId===secretaire_of_med.MedecinId).map((r)=><option key={r.id} value={r.id}>
                   {r.nom} {r.prenom} 
                   </option>):<></>}        
            </select>
                <button className="button_consultation" onClick={ajouterConsultation}>Ajouter Un Consultation</button>
            </div>

<h2>            {secretaire}</h2>

           {all_consultation.filter(r=>r.Patient!==null&&r.Patient.nom.includes(nom_)&&r.Patient.prenom.includes(prenom_)&&
           (parseInt((new Date(r.date)).toISOString().substring(0,4))===parseInt((new Date(date_)).toISOString().substring(0,4))&&
           (parseInt((new Date(r.date)).toISOString().substring(4,7))===parseInt((new Date(date_)).toISOString().substring(4,7)))&&
           (parseInt((new Date(r.date)).toISOString().substring(7,10))===parseInt((new Date(date_)).toISOString().substring(7,10)))&&
           r.Secretaire.id===parseInt(secretaire)
)).map(re=><ConsultationItem key={re.id} consultation={re} />)}
        </div>
    );
}