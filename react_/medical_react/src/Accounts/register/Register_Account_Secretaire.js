import axios from "axios";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

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
        MedecinId:1
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

        const config = {
            headers:{
                'content-type':'multipart/form-data'
            }
        }

        console.log(secretaire);


        if(searchparams.get("id")!==null){
            axios.put(`/secretaires/${searchparams.get("id")}`,form,config).then(result=>console.log(result));
        }else{

        

        axios.post("/secretaires",form,config).then((res)=>{
            console.log(res);
            axios.post("/users_role",{email:res.data.secretaire.email,userId:res.data.secretaire.id,role:'secretaire'});

        }).catch((errr)=>console.log(errr));
    }
    }



    useEffect(()=>{
        if(searchparams.get("id")!==null){
            setSecretaire({...secretaire,
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
    <div>
        <h1></h1>

        <div>
            <div>
                <label>Nom :</label>
                <input type="text" name="nom" value={secretaire.nom} onChange={(e)=>setSecretaire({...secretaire,nom:e.target.value})} />
            </div>
            <div>
                <label>Prenom :</label>
                <input type="text" name="prenom" value={secretaire.prenom} onChange={(e)=>setSecretaire({...secretaire,prenom:e.target.value})}  />
            </div>
            <div>
                <label>Age :</label>
                <input type="number" name="age" min={0} max={110} value={secretaire.age} onChange={(e)=>setSecretaire({...secretaire,age:e.target.value})}  />
            </div>
            <div>
                <label>Email :</label>
                <input type="text" name="email"  value={secretaire.email} onChange={(e)=>setSecretaire({...secretaire,email:e.target.value})} />
            </div>
            <div>
                <label>Contact :</label>
                <input type="number" name="contact" value={secretaire.contact} onChange={(e)=>setSecretaire({...secretaire,contact:e.target.value})}  />
            </div>

            <div>
                <label>Username :</label>
                <input type="text" name="username"  value={secretaire.username} onChange={(e)=>setSecretaire({...secretaire,username:e.target.value})} />
            </div>
            <div>
                <label>Password</label>
                <input type="text" name="password"  value={secretaire.password} onChange={(e)=>setSecretaire({...secretaire,password:e.target.value})} />
            </div>
            <div>
                <label>Image :</label>
                <input type="file" name="photo" onChange={onInputChange}  />
            </div>
        </div>
        <div>
                <button onClick={handleRegister}>Register</button>
                
            </div>
    
    </div>);
}