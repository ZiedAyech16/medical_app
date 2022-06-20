import axios from "axios"
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { createSearchParams, useSearchParams } from "react-router-dom";
import Swal from "sweetalert2";
import "./ordonnance.css";




axios.defaults.baseURL = "http://127.0.0.1:5000";

export default function AjouterOrdonnace(){
    const navigate = useNavigate();
    const [searchparams] = useSearchParams();
    const parametre = useParams();
    const [ordonnance, setOrdonnance] = useState({
        MedecinId:localStorage.getItem("userId"),
        PatientId:0,
        medicament:'',
        apci:''
    });

    const [medecins, setMedecins] = useState([]);
    const [medecin, setMedecin] = useState({});
    const [patients, setPatients] = useState([]);


    const medecin_ = ()=>{
        if(medecin===null||medecin_.email===undefined){
        medecins.filter(r=>r.email===localStorage.getItem("email")).map(r=>setMedecin(r));
        }
    }

  
    patients.filter(r=>r.MedecinId===localStorage.getItem("userId")).map(t=>console.log("ojjjjjjjjjjjjjj",t));

    useEffect(()=>{
        axios.get("/medecins").then(e=>setMedecins(e.data));


        medecins.filter(r=>r.email===localStorage.getItem("email")).map(r=>setMedecin(r));
        axios.get("/patients").then(e_=>setPatients(e_.data));
        medecins.filter(r=>r.email===localStorage.getItem("email")).map(r1=>setMedecin(r1));

          medecin_();

          patients.filter(r=>r.MedecinId===localStorage.getItem("userId")).map(t=>console.log("ojjjjjjjjjjjjjj",t));

        if(parametre.type ==="editer"){
            console.log(searchparams.get("PatientId"));
            setOrdonnance({...ordonnance,MedecinId:parseInt(searchparams.get("MedecinId")),PatientId:parseInt(searchparams.get("PatientId")),medicament:searchparams.get("medicament"),apci:searchparams.get("apci")});
        }

    },[])


    const enregistrer_ordonnace = (e)=>{
        e.preventDefault();
        var form = new FormData();
        form.append("medicament",ordonnance.medicament);
        form.append("apci",ordonnance.apci);
        form.append("MedecinId",ordonnance.MedecinId);
        form.append("PatientId",ordonnance.PatientId);
        console.log(ordonnance);

        if(ordonnance.PatientId===0||ordonnance.medicament.length===0){
            Swal.fire({
                title: 'Problem',
                text: "vous n'avez pas des patients!!",
                icon: 'warning',
             //   showCancelButton: true,
                confirmButtonColor: '#3085d6',
              //  cancelButtonColor: '#d33',
                confirmButtonText: 'Retour!'
            }).then((result) => {
                if (result.isConfirmed) {
                navigate("/ordonnances")
                // Swal.fire(
                //     'Imprimer!',
                //     'Ajouter au base de données',
                //     'success'
                // )
                }
            })
          }else{


        if(parametre.type==="ajouter"){
            axios.post("/ordonnances",ordonnance,{}).then(r=>console.log(r));

            Swal.fire({
                title: 'Imprimer Les Données?',
                text: "pour imprimer cliquer ai boutton imprimer!",
                icon: 'question',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Imprimer!'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate({
                        pathname:"/ordonnances/imprimer",
                        search:createSearchParams(ordonnance).toString()
                    })
                Swal.fire(
                    'Imprimer!',
                    'Ajouter au base de données',
                    'success'
                )
                }
            })

        }

        if(parametre.type ==="editer"){
            axios.put(`/ordonnances/${searchparams.get("id")}`,ordonnance,{}).then(r=>console.log(r));

            Swal.fire({
                title: 'Imprimer Les Données?',
                text: "pour imprimer cliquer ai boutton imprimer!",
                icon: 'question',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Imprimer!!'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate({
                        pathname:"/ordonnances/imprimer",
                        search:createSearchParams(ordonnance).toString()
                    })
                Swal.fire(
                    'Info!',
                    'modifier au base de données',
                    'success'
                )
                }
            })

        }

    }
    }



    return (
        <div className="ordonnance_container">
            <div className="ordonnance_item">
                <label>Medecin :</label>
                <h4 className="ordonnance_medecin" name="MedecinId">{medecins.filter(r=>r.id===parseInt(localStorage.getItem("userId"))).map(re=>re.nom+" "+re.prenom)}</h4>
            </div>

            <div className="ordonnance_item">
                <label>Patient :</label>
                <select name="PatientId" className="ordonnance_text_input" onChange={(e)=>setOrdonnance({...ordonnance,PatientId:e.target.value})}>
                    <option></option>
                    {patients.filter(r=>r.MedecinId===parseInt(localStorage.getItem("userId"))).map(re=><option value={re.id} key={re.id}>{re.nom} {re.prenom} </option>)}
                </select>
            </div>
            <div className="ordonnance_item">
                <label>Medicament :</label>
                <textarea rows={5} cols={60} type="text"  className="ordonnance_text_input" name="medicament" value={ordonnance.medicament} onChange={(e)=>setOrdonnance({...ordonnance,medicament:e.target.value})} />
            </div>

            <div className="ordonnance_item">
                <label>Apci</label>
                <div className="ordonnance_radio">
                    <input type="radio" name="apci" checked={ordonnance.apci==="0"} value={0} onChange={(e)=>setOrdonnance({...ordonnance,apci:e.target.value})} /><label>Oui</label>
                    <input type="radio" name="apci" checked={ordonnance.apci==="1"} value={1} onChange={(e)=>setOrdonnance({...ordonnance,apci:e.target.value})} /><label>Non</label></div>
            </div>

            <div className="ordonnance_item">
                <button className="ordonnance_button" onClick={enregistrer_ordonnace}>Enregistrer</button>
            </div>


        </div>
    );
}

