import { useSelect } from "@mui/base";
import { VolunteerActivismOutlined } from "@mui/icons-material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import Swal from "sweetalert2";
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
    nom:patient.nom!==null?patient.nom:'',
    prenom:patient.prenom!==null?patient.prenom:'',
    age:patient.age!==null?patient.age:0,
    sexe:'',
    contact:patient.contact!==null?patient.contact:'',
    PatientId:localStorage.getItem("userId"),
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

  axios.get(`/patients/${localStorage.getItem("userId")}`).then(r=>setPatient(r.data));
}).catch((err)=>console.log(err));


 // user_doctor_id.map(res=>console.log(res));


  axios.get(`/patients/${localStorage.getItem("id")}`).then((response)=>setUser(response.data));
  // axios.get(`/users/${user_doctor_id}`)
  // .then((d)=>
  // setImage(d.data.image));
  axios.get(`/patients`).then((res)=>setPatients(res.data));
  patients.map((e)=>console.log(e.UserId===parseInt(localStorage.getItem("id"))));
  //patients.filter((res)=>res.UserId===parseInt(localStorage.getItem("id"))).map((data)=>setPatient(data));
  console.log(patient);


  setDemande_fiche({...demande_fiche,MedecinId:parseInt(props.doctor_id)});
  setDemande_fiche({...demande_fiche,PatientId:parseInt(localStorage.getItem("userId"))});
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
    nom:demande_fiche.nom,
    prenom:demande_fiche.prenom,
    age:demande_fiche.age,
    sexe:sexe_,
    contact:demande_fiche.contact,
    hour:props.heure,
    jour:params.day,
    month:params.month,
    year:params.year,
    PatientId:localStorage.getItem("userId"),
    MedecinId:params.medecin_id
  });

  axios.post("/rdvs",{
    nom:patient.nom,
    prenom:patient.prenom,
    age:patient.age,
    sexe:sexe_,
    contact:patient.contact,
    hour:props.heure,
    jour:params.day,
    month:params.month,
    year:params.year,
    PatientId:patient.id,
    MedecinId:parseInt(params.medecin_id)
  }).then((result)=>console.log(result));
  console.log(user);

  Swal.fire({
    position: 'center',
    icon: 'success',
    title: 'Rendez-vous a été ajouté',
    showConfirmButton: false,
    timer: 2500
  })
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
        
<div  class="modal fade  bd-example-modal-xl" id="exampleModalLong" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
<form>

  <div  className="modal-dialog modal-xl" role="document">
    <div  className="modal-content container_model">
      <div className="modal-header">
        {/* <img src="/images/medecin1.jpg" className="image"></img> */}

        <div className="">
            <div> 
              <div  className="date_rendevous">Date de rendez-vous</div><br/>
                <h6 className="date_rendevous_text">Date: {props.parameter.day} {afficheMonthLikeString(parseInt(props.parameter.month))} {parseInt(props.parameter.year)}</h6>
            </div>
            <div><h5 className="date_rendevous_text">Heure: {heure_dep}:00</h5></div>
        </div>

      </div>

      <div className="modal-body model_form">


      <div className="part_left">
        <img className="image__" src={`http://127.0.0.1:5000/medecins/images/${image}`}   />

        <div className="docteur_detail">
          <h5 className="modal-title text_docteur" id="exampleModalLongTitle">Nom de Medecin:</h5> <h6 className="text_docteur">{doctor_name}</h6>
          <br/>
          <h5 className="text_docteur">Specialite:</h5> <h6 className="text_docteur">{specialite}</h6>
        </div>

      </div>


        <div className="part_right">
                <div className="line___"><h6>Saissez vos Information</h6></div>
          
                <div className="line___">
                  <label  >Nom :</label>
                  <input type="text" value={demande_fiche.nom} onChange={(e)=>setDemande_fiche({...demande_fiche,nom:e.target.value})} className="form-control input_text"></input>

                </div>

                <div className="line___">
                  <label >Prenom :</label>
                  <input  value={demande_fiche.prenom} onChange={(e)=>setDemande_fiche({...demande_fiche,prenom:e.target.value})} type="text" className="form-control input_text"></input>

                </div>

                <div className="line___">
                  <label  >Contact :</label>
                  <input  value={demande_fiche.contact} onChange={(e)=>setDemande_fiche({...demande_fiche,contact:e.target.value})} type="number" className="form-control input_text"></input>

                </div>

                <div className="line___">
                  <div  className="radio_formulaire">
                  <label >Sexe :</label>

                  <input className="radio__" type="radio"  value={0} checked={demande_fiche.sexe==="0"}  onChange={user_role_event}  name="sexe"></input>Homme
                  <input className="radio__" type="radio"   value={1} checked={demande_fiche.sexe==="1"}   onChange={user_role_event}  name="sexe"></input>Femme
                  </div>
                </div>

        </div>
      </div>
      <div className="modal-footer">
        {/* <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button> */}
        <button type="button" className="button_ color__2" onClick={handeaddfiche_pat}>Enregistrer</button>
        <button type="button" className="button_ color__2" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">Fermer</span>
        </button>
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