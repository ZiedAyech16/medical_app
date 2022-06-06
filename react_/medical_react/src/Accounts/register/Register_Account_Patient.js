import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router";

import { useSearchParams } from "react-router-dom";
import Swal from "sweetalert2";

axios.defaults.baseURL = "http://localhost:5000";
export default function RegisterPatient(){
       const parametre = useParams();
 const [searchparams]=useSearchParams();

    const [medecins,setMedecins] = useState([]);
    const [medecin,setMedecin] = useState();
    const searchMedecin = useRef();
    const [list_secretaire,setListSecretaire] = useState([]);
    const  [secretaire,setSecretaire]=useState();

    console.log("parametre",parametre.id);

    const [patient,setPatient]=useState({
        nom:'',
        prenom:'',
        age:0,
        email:'',
        contact:0,
        username:'',
        password:'',
        MedecinId:0,
        SecretaireId:0
    })
    const [file,setFile]=useState(null);

    const onInputChange = (e)=>{
        setFile(e.target.files[0]);
    }
    const handleRegister = (e)=>{
        e.preventDefault();
        const form = new FormData();
        form.append("photo",file);
        form.append("nom",patient.nom);
        form.append("prenom",patient.prenom);
        form.append("age",patient.age);
        form.append("email",patient.email);
        form.append("contact",patient.contact);
        form.append("username",patient.username);
        form.append("password",patient.password);
        form.append("MedecinId",patient.MedecinId);
        form.append("SecretaireId",patient.SecretaireId);

        const config = {
            headers:{
                'content-type':'multipart/form-data'
            }
        }

        if(searchparams.get("id")!==null){
            axios.put(`/patients/${searchparams.get("id")}`,form,config).then((res)=>{
                console.log(res);
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Patient a été ajouté',
                    showConfirmButton: false,
                    timer: 2500
                  })
                //axios.post("/users_role",{email:res.data.success.email,userId:res.data.success.id,role:'patient'});
            }).catch((errr)=>console.log(errr));
        }else{
        console.log(patient);
        axios.post("/patients",form,config).then((res)=>{
            console.log(res);
            axios.post("/users_role",{email:res.data.success.email,userId:res.data.success.id,role:'patient'});
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Patient a été modifié',
                showConfirmButton: false,
                timer: 2500
              })
        }).catch((errr)=>console.log(errr));
    }

    }



    useEffect(()=>{

        axios.get("/medecins").then(result=>setMedecins(result.data));
        searchMedecin.current=patient.MedecinId;
        axios.get("/secretaires").then(r=>setListSecretaire(r.data));

        if(searchparams.get("id")!==null){
            setPatient({...patient,
                nom:searchparams.get("nom"),
                prenom:searchparams.get("prenom"),
                age:searchparams.get("age"),
                email:searchparams.get("email"),
                contact:parseInt(searchparams.get("contact")),
                username:searchparams.get("username"),
                password:searchparams.get("password"),
                image:searchparams.get("image"),
                MedecinId:searchparams.get("MedecinId"),
                SecretaireId:searchparams.get("SecretaireId")
            })
        }
    },[medecin])

    const check_med_sectraire = (e)=>{
        e.preventDefault();
        if(parametre.role_!==undefined&&parametre.role_!==null){
            
        }
    }

    

    return(
    <div className="formulaire_container">

{medecin}
        <div className="formulaire_">  
            <h1 className="title_text">Patient</h1>

            <div>
                <input  placeholder="Nom :" className="input_text_" type="text" name="nom" value={patient.nom} onChange={(e)=>setPatient({...patient,nom:e.target.value})} />
            </div>
            <div>
                <input placeholder="Prenom :" className="input_text_" type="text" name="prenom" value={patient.prenom} onChange={(e)=>setPatient({...patient,prenom:e.target.value})}  />
            </div>
            <div>
                <input placeholder="Age :" className="input_text_" type="number" name="age" min={0} max={110} value={patient.age} onChange={(e)=>setPatient({...patient,age:e.target.value})}  />
            </div>
            <div>
                <input placeholder="Email :" className="input_text_" type="text" name="email"  value={patient.email} onChange={(e)=>setPatient({...patient,email:e.target.value})} />
            </div>
            <div>
                <input placeholder="Contact :" className="input_text_"  type="number" name="contact" value={patient.contact} onChange={(e)=>setPatient({...patient,contact:e.target.value})}  />
            </div>

            <div>
                <input placeholder="Username :" className="input_text_" type="text" name="username"  value={patient.username} onChange={(e)=>setPatient({...patient,username:e.target.value})} />
            </div>
            <div>
                <input placeholder="Password :" className="input_text_"  type="text" name="password"  value={patient.password} onChange={(e)=>setPatient({...patient,password:e.target.value})} />
            </div>
            <div>
                <input placeholder="Image :" className="input_text_"  type="file" name="photo" onChange={onInputChange}  />
            </div>

            <div>
                <select className="input_text_" value={patient.MedecinId} onChange={(e)=>setPatient({...patient,MedecinId:e.target.value})} name="medecin">
                    <option value="" readOnly={true} hidden={true} selected="selected">Choisir Un Medecin</option>

                    {parametre.role_!==undefined&&parametre.role_!==null?
                      medecins.filter(r=>r.id===parseInt(parametre.id)).map((r)=><option key={r.id} value={r.id}>{r.prenom}{' '}{r.nom} </option>)

                    :medecins.map((r)=><option key={r.id} value={r.id}>{r.prenom}{' '}{r.nom} </option>)}
                </select>
            </div>
            <div>
                <select className="input_text_" name="secretaires" value={patient.SecretaireId} onChange={(e)=>setPatient({...patient,SecretaireId:e.target.value})}>
                                <option  readOnly={true} hidden={true} value="" selected="selected">Choisir Une Secretiare</option>
                                {list_secretaire.filter((r)=>r.MedecinId ===parseInt(patient.MedecinId)&&r.MedecinId !==null).map((r)=><option key={r.id} value={r.id}>{r.nom}{' '}{r.prenom} </option>)}

                </select>
            </div>
                 <div>
                <button className="btn_" onClick={handleRegister}>Register</button>
                
            </div>
        </div>
   
    
    </div>);
}