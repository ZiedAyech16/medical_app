import axios from "axios";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Swal from "sweetalert2";

axios.defaults.baseURL = "http://localhost:5000";
export default function RegisterAdmin(){
    const [searchparams]=useSearchParams();
    const [usersrole, setUsersrole] = useState([]);
    const [countuserrole, setCountuserrole] = useState(0);
    const [admin,setAdmin]=useState({
        nom:'',
        prenom:'',
        age:0,
        email:'',
        contact:0,
        username:'',
        password:'',
     //   MedecinId:1
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

        usersrole.filter(re=>re.email===admin.email).map((a)=>setCountuserrole(countuserrole+1));

        if(searchparams.get("id")!==null){
            console.log("not null");
            axios.put(`/admins/${searchparams.get("id")}`,form,config).then((res)=>{
                console.log(res);
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Admin Modifier',
                    showConfirmButton: false,
                    timer: 2500
                  })
                //axios.post("/users_role",{email:res.data.success.email,userId:res.data.success.id,role:'patient'});
            }).catch((errr)=>console.log(errr));
        }else{
            console.log(" null");

        console.log(admin);
        if(countuserrole===0){
        axios.post("/admins",form,config).then((res)=>{
            console.log(res);
            axios.post("/users_role",{email:res.data.admin.email,userId:res.data.admin.id,role:'admin'});


            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Admin a été ajouté',
                showConfirmButton: false,
                timer: 2500
              })
        }).catch((errr)=>console.log(errr));

    }else{
        
        Swal.fire({
            position: 'center',
            icon: 'warning',
            title: 'Admin est déja ajouté',
            showConfirmButton: false,
            timer: 2500
          })
    }
    }

     

    }

    const date_ = new Date();

console.log(date_.toISOString().substring(0,10));

    useEffect(()=>{
        if(searchparams.get("id")!==null){
            setAdmin({...admin,
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
        
        axios.get("/users_role").then(re=>setUsersrole(re.data));
    },[])

    return(
    <div className="formulaire_container">
        <h1 className="title_text">Admin</h1>

        <div className="formulaire_">
            <div>
                <input placeholder="Nom :" className="input_text_" type="text" name="nom" value={admin.nom} onChange={(e)=>setAdmin({...admin,nom:e.target.value})} />
            </div>
            <div>
                <input placeholder="Prenom :" className="input_text_" type="text" name="prenom" value={admin.prenom} onChange={(e)=>setAdmin({...admin,prenom:e.target.value})}  />
            </div>
            <div>
                <input placeholder="Age :" className="input_text_" type="date" name="age" min="1938-07-22" max={`${date_.toISOString().substring(0,10)}`} value={admin.age} onChange={(e)=>setAdmin({...admin,age:e.target.value})}  />
            </div>
            <div>
                <input placeholder="Email :" className="input_text_" type="text" name="email"  value={admin.email} onChange={(e)=>setAdmin({...admin,email:e.target.value})} />
            </div>
            <div>
                <input placeholder="Contact :" className="input_text_" type="number" name="contact" value={admin.contact} onChange={(e)=>setAdmin({...admin,contact:e.target.value})}  />
            </div>

            <div>
                <input placeholder="Username :" className="input_text_" type="text" name="username"  value={admin.username} onChange={(e)=>setAdmin({...admin,username:e.target.value})} />
            </div>
            <div>
                <input placeholder="Password :" className="input_text_"  type="text" name="password"  value={admin.password} onChange={(e)=>setAdmin({...admin,password:e.target.value})} />
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

