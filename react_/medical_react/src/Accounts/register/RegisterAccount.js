import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logging } from "../store_reg_log/actions";
import "./registerAcount.css";
axios.defaults.baseURL = "http://127.0.0.1:5000";
export default function RegisterAccount(){
    const etatlogin = useSelector(state=>state.etatlogin);
    const dispatch = useDispatch();

    const [user_role,setUserRole]=useState(-1);
    const [userExist,setUserExist]=useState(false);
    const [users,setUsers]=useState([]);
    const [user,setUser] =useState(
        {
            nom:'',
            prenom:'',
            email: '',
            contact:'',
            username:'',
            password:''
        }
    ); 
    const [medecin,setMedecin]=useState({
        UserId:null,
        num_order:'',
        specialite: ''
    });

    const [secretaire,setSecretaire]=useState(
        {
            UserId:0,

        }
    );

  const [patient,setPatient]=useState(
        {
            UserId:0,
            
        }
    );

    console.log(etatlogin);


const [file,setFile]=useState(null);

const onFormSubmit = (e)=>{
    e.preventDefault();
    const form = new FormData();
    form.append("photo",file);
    form.append("nom",user.nom);
    form.append("prenom",user.prenom);
    form.append("age",user.age);
    form.append("email",user.email);
    form.append("username",user.username);
    form.append("password",user.password);
    form.append("contact",user.contact);
    const config = {
        headers:{
            'content-type':'multipart/form-data'
        },
    };
//    axios.post('http://127.0.0.1:3002/upload',form,config)
    axios.post('/users',form,config)
    .then((response)=>{
      console.log(response);
      setSecretaire({...secretaire,UserId:response.data.userId})
      setPatient({...patient,UserId:response.data.userId})
      setMedecin({...medecin,UserId:response.data.userId})
      alert('Image Uploaded Successfully')
    })
    .catch((err)=>{
     // console.log('err ',err);
    })
}

const onInputChange = (e)=>{
    setFile(e.target.files[0]);
}



//console.log(localStorage.getItem("email"));

useEffect(()=>{
    axios.get("/users").then((response)=>setUsers(response.data));
    console.log(user_role);
},[]);
//console.log(user_role);

const interface_Medecin = ()=>{
    return(
        <div className="user_role_fenetre">
            <h1>You are doctor</h1>
            <label>Num Order :</label>

            {/* <img src="http://127.0.0.1:5000/users/images/image-1652972961873.jpeg" /> */}

            <div style={{width:"95%"}}>
                <input style={{width:"100%"}} value={medecin.num_order} onChange={(e)=>setMedecin({...medecin,num_order:e.target.value})} type="number" name="num_order" />
            </div>
            <label>specialite :</label>

            
                <select  name="specialite" onChange={(e)=>setMedecin({...medecin,specialite:e.target.value})}>
                <option value={"pediatre"}>Pediatre</option>
                <option value={"psychotherapie"}>Psychothérapie</option>
                <option value={"dentiste"}>dentiste</option>
                <option value={"gynecologue"}>Gynecologue</option>
                {/* <option value={"gynecologue"}>Gynecologue</option> */}
                <option value={"Allergists"}>Allergists</option>
                <option value={"Dermatologists"}>Dermatologists</option>
                <option value={"Ophthalmologists"}>Ophthalmologists</option>
                {/* <option value={"Obstetrician"}>Obstetrician</option> */}
                <option value={"gynecologists"}>gynecologists</option>
                <option value={"Cardiologists"}>Cardiologists</option>  


                </select>
            
            <button className="button_valide" onClick={ajouterMedecin}>Ajouter</button>
        </div>
    );
}

const interface_Secretaire = ()=>{
    return(
        <div className="user_role_fenetre">
            <h1>You are Secretaire</h1>
            <button className="button_valide" onClick={ajouterSecretaire}>Ajouter</button>

        </div>
    );
}

const interface_Patient = ()=>{
    return(
        <div className="user_role_fenetre">
            <h1>You are Patient</h1>
           
            <button className="button_valide" onClick={ajouterPatient}>Ajouter</button>

        </div>
    );
}


const ajouterMedecin = (e)=>{
    e.preventDefault();
    axios.post("/medecins",{
        ...medecin
    });
    console.log(medecin);
}

const ajouterSecretaire = (e)=>{
    e.preventDefault();
    axios.post("/secretaires",{
        ...secretaire
    });
}


const ajouterPatient = (e)=>{
    e.preventDefault();
    axios.post("/patients",{
        ...patient
    });
}


    const handleChange = ()=>{
        dispatch(logging(true));
    }


    const signIn = (e)=>{
        e.preventDefault();
        console.log("ok");
        console.log(user);
        console.log(user_role)
         axios.post("/users",{
             ...user
         })
         .then((response)=>{setMedecin({...medecin,UserId:response.data.id});setPatient({...patient,UserId:response.data.id});setSecretaire({...secretaire,UserId:response.data.id});});
         //.then((response)=>console.log(response.data));
        users.filter((user__)=>user__.email===user.email).map((response) => {console.log("user exist",response.email);setUserExist(true)});
       // interface_();
    }



const user_role_event = (e)=>{
    if(e.target.checked){
    setUserRole(e.target.value)}
}


    return(
        <div>
        <div style={url} ></div>

        <div className="container__">
        {/* <form className="container"> */}
            <div><h1>Sign in :</h1></div>

            <div>
                  <input className="input_" type="text" value={user.nom} name="nom" onChange={(e)=>setUser({...user,nom:e.target.value})} placeholder="Nom :"></input>
            </div>

            <div>
                  <input className="input_" type="text" value={user.prenom} name="prenom" onChange={(e)=>setUser({...user,prenom:e.target.value})}  placeholder="Prenom :"></input>
            </div>

            <div>
                 <input className="input_" type="number" value={user.age} name="age" onChange={(e)=>setUser({...user,age:e.target.value})} placeholder="Age :"></input>
            </div>

            <div>
                  <input className="input_" type="text" value={user.email} name="email" onChange={(e)=>setUser({...user,email:e.target.value})} placeholder="Email :"></input>
            </div>

            <div>
                 <input className="input_" type="number" value={user.contact} name="contact" onChange={(e)=>setUser({...user,contact:e.target.value})} placeholder="Contact :"></input>
            </div>

            <div>
                <input className="input_" type="file" name="photo" onChange={onInputChange} />
            </div>

            <div>
                <input className="input_" type="text" value={user.username} name="username" onChange={(e)=>setUser({...user,username:e.target.value})} placeholder="Username :"></input>
            </div>

            <div>
                 <input className="input_" type="text" value={user.password} name="password" onChange={(e)=>setUser({...user,password:e.target.value})} placeholder="Password :"></input>
            </div>

            <div>
            {
                userExist===false?<div className="radio_fields">
                <div><input type="radio" value={0} checked={user_role==="0"} onChange={user_role_event} name="user_etat"/></div><div>Medecin</div>
                <div> <input type="radio" value={1} checked={user_role==="1"}  onChange={user_role_event} name="user_etat"/></div><div>Secretaire</div>
                <div><input type="radio" value={2} checked={user_role==="2"}  onChange={user_role_event} name="user_etat"/></div><div>Patient</div></div>
                :<></>
            }


            {
                user_role==="0"?interface_Medecin():<></>
            }

{
                user_role==="1"?interface_Secretaire():<></>
            }


{
                user_role==="2"?interface_Patient():<></>
            }
</div>
            <div>
            <button className="btn" onClick={signIn}> Sign In</button>
            <button className="btn" onClick={onFormSubmit}> Login</button>

            {
                      <div>
          
        </div>
            }
            </div>
        {/* </form> */}
        </div>
        </div>
    );
}


const url = {
    backgroundImage: `url(${process.env.PUBLIC_URL+ "/images/image_med2.jpg"})`,
    width:"100%",
    height:"140%",
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    position:"fixed",
    zIndex:"-1"


}