import { useSelect } from "@mui/base";
import { VolunteerActivismOutlined } from "@mui/icons-material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import "./formulaire_success.css";
axios.defaults.baseURL = "http://127.0.0.1:5000";
export default function LoginInvite(props){
  const [doctor_name,setDoctorName]=useState('');
  const [specialite,setSpecialite]=useState('');
  const [contact,setContact]=useState('');

  const [user_doctor_id,setUser_doctor_id]=useState(0);
  const [user,setUser] = useState([]);
  const [image,setImage]=useState('/images/medecin1.jpg');
  const [patients,setPatients]=useState([]);
  const [patient,setPatient] = useState({});


  const params = useParams();

  console.log("params fiche",params);


  const [demande_fiche,setDemande_fiche] = useState({
    nom:'',
    prenom:'',
    age:0,
    sexe:'',
    contact:'',
    PatientId:localStorage.getItem("id"),
    MedecinId:parseInt(params.medecin_id)
  });
  


console.log(params);
  console.log(props.doctor_id);


  //console.log("uid",user_doctor_id);
  // axios.get(`/users/${user_doctor_id}`)
  // .then((d)=>
  // console.log(null?'/images/medecin1.jpg':d.data.image));


useEffect(()=>{
  axios.get(`/medecins/${ params.medecin_id>0?params.medecin_id:props.doctor_id}`).then((data)=>setUser_doctor_id(data.data.UserId)).catch((err)=>console.log(err));
  axios.get(`/medecins/${params.medecin_id!=null||params.medecin_id>0 ?params.medecin_id:props.doctor_id}`).then((data)=>setSpecialite(data.data.specialite)).catch((err)=>console.log(err));
  console.log(user_doctor_id);
  axios.get(`/medecins/${params.medecin_id}`).then((data)=>{setDoctorName(data.data.nom+" "+data.data.prenom);setContact(data.data.contact);  setImage(data.data.image);
}).catch((err)=>console.log(err));


 // user_doctor_id.map(res=>console.log(res));


  axios.get(`/users/${localStorage.getItem("id")}`).then((response)=>setUser(response.data));
  // axios.get(`/users/${user_doctor_id}`)
  // .then((d)=>
  // setImage(d.data.image));
  axios.get(`/patients`).then((res)=>setPatients(res.data));
  patients.map((e)=>console.log(e.UserId===parseInt(localStorage.getItem("id"))));
  patients.filter((res)=>res.UserId===parseInt(localStorage.getItem("id"))).map((data)=>setPatient(data));
  console.log(patient);


  setDemande_fiche({...demande_fiche,MedecinId:parseInt(props.doctor_id)});
  setDemande_fiche({...demande_fiche,PatientId:parseInt(localStorage.getItem("id"))});
  setDemande_fiche({...demande_fiche,contact:user.contact});
  setDemande_fiche({...demande_fiche,nom:user.nom});
},[]);
//axios.get(`/patients`).then((res)=>setPatients(res.data));
//patients.filter((res)=>res.UserId===localStorage.getItem("id")).map((data)=>console.log(data));
///console.log("patient = ",patient);
  
const handeaddfiche_pat = (e)=>{
  e.preventDefault();
  const sexe_=demande_fiche.sexe===0?"Homme":"Femme";
  console.log({
    nom:user.nom,
    prenom:user.prenom,
    age:user.age,
    sexe:sexe_,
    contact:user.contact,
    hour:props.heure,
    jour:params.day,
    month:params.month,
    year:params.year,
    PatientId:localStorage.getItem("id"),
    MedecinId:params.medecin_id
  });

  axios.post("/fiche_patients",{
    nom:user.nom,
    prenom:user.prenom,
    age:user.age,
    sexe:sexe_,
    contact:user.contact,
    hour:props.heure,
    jour:params.day,
    month:params.month,
    year:params.year,
    PatientId:patient.id,
    MedecinId:parseInt(params.medecin_id)
  }).then((result)=>console.log(result));
  console.log(user);

}

const user_role_event = (e)=>{
  if(e.target.checked){
  setDemande_fiche({...demande_fiche,sexe:e.target.value})
}
}


//console.log(image);
//  console.log("props = "+props);
  const heure_dep = props.heure;

    return(

        <>
        
<div  className="modal fade" id="exampleModalLong" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
<form>

  <div  className="modal-dialog" role="document">
    <div  className="modal-content container_model">
      <div className="modal-header">
        {/* <img src="/images/medecin1.jpg" className="image"></img> */}
        <img className="image" src={`http://127.0.0.1:5000/medecins/images/${image}`}   />

        <div>
        <h5 className="modal-title" id="exampleModalLongTitle">{doctor_name}</h5>
        <h6 style={{float:"left"}}>{specialite}</h6>
        </div>
        <button type="button" className="close button_close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>

      <div className="modal-body model_form">
        <div className="">
         <div className="pb-4"> <div style={{float:"left"}}>Date de rendez-vous</div><br/>
               <h6 style={{float:"left"}}>{props.parameter.day} {afficheMonthLikeString(parseInt(props.parameter.month))} {parseInt(props.parameter.year)}</h6>
         </div>
         <div><h3 style={{float:"right"}}>{heure_dep}:00</h3></div>
        </div>
        <div>
          <h6>Saissez vos Information</h6>
            <div className="form-group">
              <label className="ms-3" style={{float:"left"}}>Nom :</label>
              <input type="text" value={user.nom} onChange={(e)=>setDemande_fiche({...demande_fiche,nom:e.target.value})} className="form-control input_text"></input>

            </div>

            <div className="form-group">
              <label style={{float:"left"}} className="ms-2" >Prenom :</label>
              <input style={{float:"left"}} value={user.prenom} onChange={(e)=>setDemande_fiche({...demande_fiche,prenom:e.target.value})} type="text" className="form-control input_text"></input>

            </div>

            <div className="form-group">
              <label style={{float:"left"}} className="ms-2" >Contact :</label>
              <input style={{float:"left"}} value={user.contact} onChange={(e)=>setDemande_fiche({...demande_fiche,contact:e.target.value})} type="number" className="form-control input_text"></input>

            </div>

            <div className="form-group">
              <label style={{float:"left"}} className="ms-2" >Sexe :</label>
              <div  style={{float:"left"}} className="input_text">
              <input type="radio"  value={0} checked={demande_fiche.sexe==="0"}  onChange={user_role_event}  name="sexe"></input>Homme
              <input type="radio"   value={1} checked={demande_fiche.sexe==="1"}   onChange={user_role_event}  name="sexe"></input>Femme
              </div>
            </div>

        </div>
      </div>
      <div className="modal-footer">
        {/* <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button> */}
        <button type="button" className="button_" onClick={handeaddfiche_pat}>Save changes</button>
      </div>
      
    </div>
  </div></form>
</div>
        </>
    );
}


function afficheMonthLikeString(index){
  switch(index){
    case 1:{
      return "Janvier";
    }

    case 2:{
      return "Fevrier";
    }

    case 3:{
      return "Mars";
    }

    case 4:{
      return "Avril";
    }

    case 5:{
      return "Mai";
    }

    case 6:{
      return "June";
    }

    case 7:{
      return "Juillet";
    }

    case 8:{
      return "Aoute";
    }

    case 9:{
      return "September";
    }

    case 10:{
      return "October";
    }

    case 11:{
      return "Novembre";
    }

    case 12:{
      return "Decembre";
    }

    default:{
      return "Nan";
    }
  }
}