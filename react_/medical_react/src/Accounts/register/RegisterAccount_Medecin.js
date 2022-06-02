import axios from "axios";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

axios.defaults.baseURL = "http://localhost:5000";
export default function RegisterMedecin(){
    const [searchparams]=useSearchParams();
    const [medecin,setMedecin]=useState({
        nom:'',
        prenom:'',
        age:0,
        email:'',
        contact:0,
        num_order:0,
        specialite:'',
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
        form.append("nom",medecin.nom);
        form.append("prenom",medecin.prenom);
        form.append("age",medecin.age);
        form.append("email",medecin.email);
        form.append("contact",medecin.contact);
        form.append("num_order",medecin.num_order);
        form.append("specialite",medecin.specialite);
        form.append("username",medecin.username);
        form.append("password",medecin.password);

        const config = {
            headers:{
                'content-type':'multipart/form-data'
            }
        }

        if(searchparams.get("id")!==null){
            axios.put(`/medecins/${searchparams.get("id")}`,form,config).then((res)=>{
                console.log(res);
                //axios.post("/users_role",{email:res.data.medecin.email,userId:res.data.medecin.id,role:'medecin'});
    
            }).catch((errr)=>console.log(errr));
        }
    else{
        console.log(medecin);
        axios.post("/medecins",form,config).then((res)=>{
            console.log(res);
            axios.post("/users_role",{email:res.data.medecin.email,userId:res.data.medecin.id,role:'medecin'});

        }).catch((errr)=>console.log(errr));
    }
    }


    const [specialtes,setAllspecialite]=useState([]);

    useEffect(()=>{
        axios.get("/specialites").then(result=>setAllspecialite(result.data));
        
        if(searchparams.get("id")!==null){
            setMedecin({...medecin,
                nom:searchparams.get("nom"),
                prenom:searchparams.get("prenom"),
                age:searchparams.get("age"),
                email:searchparams.get("email"),
                contact:parseInt(searchparams.get("contact")),
                num_order:parseInt(searchparams.get("num_order")),
                specialite:searchparams.get("specialite"),
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
                <input type="text" name="nom" value={medecin.nom} onChange={(e)=>setMedecin({...medecin,nom:e.target.value})} />
            </div>
            <div>
                <label>Prenom :</label>
                <input type="text" name="prenom" value={medecin.prenom} onChange={(e)=>setMedecin({...medecin,prenom:e.target.value})}  />
            </div>
            <div>
                <label>Age :</label>
                <input type="number" name="age" min={0} max={110} value={medecin.age} onChange={(e)=>setMedecin({...medecin,age:e.target.value})}  />
            </div>
            <div>
                <label>Email :</label>
                <input type="text" name="email"  value={medecin.email} onChange={(e)=>setMedecin({...medecin,email:e.target.value})} />
            </div>
            <div>
                <label>Contact :</label>
                <input type="number" name="contact" value={medecin.contact} onChange={(e)=>setMedecin({...medecin,contact:e.target.value})}  />
            </div>
            <div>
                <label>Num order :</label>
                <input type="number" name="num_order" value={medecin.num_order} onChange={(e)=>setMedecin({...medecin,num_order:e.target.value})}  />
            </div>
            <div>
                <label>Specialite :</label>
                <select name="specialte" value={medecin.specialite} onChange={(e)=>setMedecin({...medecin,specialite:e.target.value})}>
                    {specialtes.map((result=><option value={result.nom} >{result.nom} </option>))}
                </select>
            </div>
            <div>
                <label>Username :</label>
                <input type="text" name="username"  value={medecin.username} onChange={(e)=>setMedecin({...medecin,username:e.target.value})} />
            </div>
            <div>
                <label>Password</label>
                <input type="text" name="password"  value={medecin.password} onChange={(e)=>setMedecin({...medecin,password:e.target.value})} />
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