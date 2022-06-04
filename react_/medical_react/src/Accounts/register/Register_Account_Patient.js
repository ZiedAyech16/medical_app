import axios from "axios";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

axios.defaults.baseURL = "http://localhost:5000";
export default function RegisterPatient(){
    const [searchparams]=useSearchParams();

    const [patient,setPatient]=useState({
        nom:'',
        prenom:'',
        age:0,
        email:'',
        contact:0,
        username:'',
        password:'',
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

        const config = {
            headers:{
                'content-type':'multipart/form-data'
            }
        }

        if(searchparams.get("id")!==null){
            axios.put(`/patients/${searchparams.get("id")}`,form,config).then((res)=>{
                console.log(res);
                //axios.post("/users_role",{email:res.data.success.email,userId:res.data.success.id,role:'patient'});
            }).catch((errr)=>console.log(errr));
        }else{
        console.log(patient);
        axios.post("/patients",form,config).then((res)=>{
            console.log(res);
            axios.post("/users_role",{email:res.data.success.email,userId:res.data.success.id,role:'patient'});
        }).catch((errr)=>console.log(errr));
    }

    }



    useEffect(()=>{
        if(searchparams.get("id")!==null){
            setPatient({...patient,
                nom:searchparams.get("nom"),
                prenom:searchparams.get("prenom"),
                age:searchparams.get("age"),
                email:searchparams.get("email"),
                contact:parseInt(searchparams.get("contact")),
                username:searchparams.get("username"),
                password:searchparams.get("password"),
                image:searchparams.get("image")
                
            })
        }
    },[])

    return(
    <div className="formulaire_container">

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
                <button className="btn_" onClick={handleRegister}>Register</button>
                
            </div>
        </div>
   
    
    </div>);
}