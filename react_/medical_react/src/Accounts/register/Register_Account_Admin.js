import axios from "axios";
import { useEffect, useState } from "react";

axios.defaults.baseURL = "http://localhost:5000";
export default function RegisterAdmin(){

    const [admin,setAdmin]=useState({
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
        form.append("nom",admin.nom);
        form.append("prenom",admin.prenom);
        form.append("age",admin.age);
        form.append("email",admin.email);
        form.append("contact",admin.contact);
        form.append("username",admin.username);
        form.append("password",admin.password);

        const config = {
            headers:{
                'content-type':'multipart/form-data'
            }
        }

        console.log(admin);
        axios.post("/admins",form,config).then((res)=>{
            console.log(res);
            axios.post("/users_role",{email:res.data.admin.email,userId:res.data.admin.id,role:'admin'});

        }).catch((errr)=>console.log(errr));

    }



    useEffect(()=>{
        
    },[])

    return(
    <div>
        <h1></h1>

        <div>
            <div>
                <label>Nom :</label>
                <input type="text" name="nom" value={admin.nom} onChange={(e)=>setAdmin({...admin,nom:e.target.value})} />
            </div>
            <div>
                <label>Prenom :</label>
                <input type="text" name="prenom" value={admin.prenom} onChange={(e)=>setAdmin({...admin,prenom:e.target.value})}  />
            </div>
            <div>
                <label>Age :</label>
                <input type="number" name="age" min={0} max={110} value={admin.age} onChange={(e)=>setAdmin({...admin,age:e.target.value})}  />
            </div>
            <div>
                <label>Email :</label>
                <input type="text" name="email"  value={admin.email} onChange={(e)=>setAdmin({...admin,email:e.target.value})} />
            </div>
            <div>
                <label>Contact :</label>
                <input type="number" name="contact" value={admin.contact} onChange={(e)=>setAdmin({...admin,contact:e.target.value})}  />
            </div>

            <div>
                <label>Username :</label>
                <input type="text" name="username"  value={admin.username} onChange={(e)=>setAdmin({...admin,username:e.target.value})} />
            </div>
            <div>
                <label>Password</label>
                <input type="text" name="password"  value={admin.password} onChange={(e)=>setAdmin({...admin,password:e.target.value})} />
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

