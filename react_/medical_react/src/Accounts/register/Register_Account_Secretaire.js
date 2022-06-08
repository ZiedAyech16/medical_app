import axios from "axios";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Swal from "sweetalert2";

axios.defaults.baseURL = "http://localhost:5000";
export default function RegisterSecretaire(props){
    const [searchparams]=useSearchParams();
    console.log(searchparams.get('id'));

    const [secretaire,setSecretaire]=useState({
        nom:'',
        prenom:'',
        age:0,
        email:'',
        contact:0,
        username:'',
        password:'',
        MedecinId:0
    })
    const [file,setFile]=useState(null);

    const onInputChange = (e)=>{
        setFile(e.target.files[0]);
    }
    const handleRegister = (e)=>{
        e.preventDefault();
        const form = new FormData();
        form.append("photo",file);
        form.append("nom",secretaire.nom);
        form.append("prenom",secretaire.prenom);
        form.append("age",secretaire.age);
        form.append("email",secretaire.email);
        form.append("contact",secretaire.contact);
        form.append("username",secretaire.username);
        form.append("password",secretaire.password);
        form.append("MedecinId",secretaire.MedecinId);

        const config = {
            headers:{
                'content-type':'multipart/form-data'
            }
        }

        console.log(secretaire);


        if(searchparams.get("id")!==null){
            axios.put(`/secretaires/${searchparams.get("id")}`,form,config).then(result=>{
                
                console.log(result);
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Secretaire a été modifié',
                    showConfirmButton: false,
                    timer: 2500
                  })
            });
        }else{

        

        axios.post("/secretaires",form,config).then((res)=>{
            console.log(res);
            axios.post("/users_role",{email:res.data.secretaire.email,userId:res.data.secretaire.id,role:'secretaire'});
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Secretaire a été ajouté',
                showConfirmButton: false,
                timer: 2500
              })
        }).catch((errr)=>console.log(errr));
    }
    }

    const [medecins,setMedecines]=useState([]);
const date_ = new Date();

    useEffect(()=>{
        axios.get("/medecins").then(result=>setMedecines(result.data));
        if(searchparams.get("id")!==null){
            setSecretaire({...secretaire,
                nom:searchparams.get("nom"),
                prenom:searchparams.get("prenom"),
                age:searchparams.get("age"),
                email:searchparams.get("email"),
                contact:parseInt(searchparams.get("contact")),
                username:searchparams.get("username"),
                password:searchparams.get("password"),
                image:searchparams.get("image"),
                MedecinId:searchparams.get("MedecinId")
                
            })
        }
    },[])

    return(
    <div className="formulaire_container">
        

        <div className="formulaire_">
            <h1 className="title_text">Secretaire</h1>
            <div>
                <input placeholder="Nom :" className="input_text_" type="text" name="nom" value={secretaire.nom} onChange={(e)=>setSecretaire({...secretaire,nom:e.target.value})} />
            </div>
            <div>
                <input placeholder="Prenom :" className="input_text_" type="text" name="prenom" value={secretaire.prenom} onChange={(e)=>setSecretaire({...secretaire,prenom:e.target.value})}  />
            </div>
            <div>
                <input placeholder="Age :" className="input_text_" type="date" name="age" min="1938-01-01" max={`${date_.toISOString().substring(0,10)}`} value={secretaire.age} onChange={(e)=>setSecretaire({...secretaire,age:e.target.value})}  />
            </div>
            <div>
                <input placeholder="Email :" className="input_text_" type="text" name="email"  value={secretaire.email} onChange={(e)=>setSecretaire({...secretaire,email:e.target.value})} />
            </div>
            <div>
                <input placeholder="Contact :" className="input_text_" type="number" name="contact" value={secretaire.contact} onChange={(e)=>setSecretaire({...secretaire,contact:e.target.value})}  />
            </div>

            <div>
                <input placeholder="Username :" className="input_text_" type="text" name="username"  value={secretaire.username} onChange={(e)=>setSecretaire({...secretaire,username:e.target.value})} />
            </div>
            <div>
                <input placeholder="Password :" className="input_text_" type="text" name="password"  value={secretaire.password} onChange={(e)=>setSecretaire({...secretaire,password:e.target.value})} />
            </div>
            <div>
                <input placeholder="Image :" className="input_text_" type="file" name="photo" onChange={onInputChange}  />
            </div>
            <div>
                <select className="input_text_" value={secretaire.MedecinId} name="MedecinId" onChange={(e)=>setSecretaire({...secretaire,MedecinId:e.target.value})}>
                    {medecins.map(result=><option value={`${result.id}`}>{result.prenom} {result.nom}</option>)}
                </select>
            </div>
             <div>
                <button className="btn_" onClick={handleRegister}>Register</button>
                
            </div>
        </div>

    
    </div>);
}