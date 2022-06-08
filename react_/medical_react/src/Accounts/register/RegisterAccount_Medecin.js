import axios from "axios";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Swal from "sweetalert2";

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
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Medecin a été modifié',
                    showConfirmButton: false,
                    timer: 2500
                  })
            }).catch((errr)=>console.log(errr));
        }
    else{
        console.log(medecin);
        axios.post("/medecins",form,config).then((res)=>{
            console.log(res);
            axios.post("/users_role",{email:res.data.medecin.email,userId:res.data.medecin.id,role:'medecin'});
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Medecin a été ajouté',
                showConfirmButton: false,
                timer: 2500
              })
        }).catch((errr)=>console.log(errr));
    }
    }


    const [specialtes,setAllspecialite]=useState([]);
    const date_ = new Date();

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
    <div className="formulaire_container">

        <div className="formulaire_">
            <h1 className="title_text">Medecin</h1>

            <div>
                <input placeholder="Nom :" className="input_text_" type="text" name="nom" value={medecin.nom} onChange={(e)=>setMedecin({...medecin,nom:e.target.value})} />
            </div>
            <div>
                <input placeholder="Prenom :" className="input_text_" type="text" name="prenom" value={medecin.prenom} onChange={(e)=>setMedecin({...medecin,prenom:e.target.value})}  />
            </div>
            <div>
                <input placeholder="Age :" className="input_text_" type="date" name="age" min="1938-01-01" max={`${date_.toISOString().substring(0,10)}`} value={medecin.age} onChange={(e)=>setMedecin({...medecin,age:e.target.value})}  />
            </div>
            <div>
                <input placeholder="Email :" className="input_text_" type="text" name="email"  value={medecin.email} onChange={(e)=>setMedecin({...medecin,email:e.target.value})} />
            </div>
            <div>
                <input placeholder="Contact :" className="input_text_" type="number" name="contact" value={medecin.contact} onChange={(e)=>setMedecin({...medecin,contact:e.target.value})}  />
            </div>
            <div>
                <input placeholder="Num order :" className="input_text_" type="number" name="num_order" value={medecin.num_order} onChange={(e)=>setMedecin({...medecin,num_order:e.target.value})}  />
            </div>
            <div>
                <select placeholder="Specialite :" className="input_text_" name="specialte" value={medecin.specialite} onChange={(e)=>setMedecin({...medecin,specialite:e.target.value})}>
                <option value="" readonly="true" hidden="true" selected>choisir la specialite :</option>
                    {specialtes.map((result=><option value={result.nom} >{result.nom} </option>))}
                </select>
            </div>
            <div>
                <input placeholder="Username :" className="input_text_" type="text" name="username"  value={medecin.username} onChange={(e)=>setMedecin({...medecin,username:e.target.value})} />
            </div>
            <div>
                <input placeholder="Password :" className="input_text_" type="text" name="password"  value={medecin.password} onChange={(e)=>setMedecin({...medecin,password:e.target.value})} />
            </div>
            <div>
                <input placeholder="Image :" className="input_text_" type="file" name="photo" onChange={onInputChange}  />
            </div>
            <div>
                <button className="btn_" onClick={handleRegister}>Register</button>
                
            </div>
        </div>
   
    
    </div>);
}