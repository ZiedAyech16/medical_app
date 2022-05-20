import { useSelect } from "@mui/base";
import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./formulaire_success.css";
axios.defaults.baseURL = "http://127.0.0.1:5000";
export default function LoginInvite(props){
  const [doctor_name,setDoctorName]=useState('');
  const [specialite,setSpecialite]=useState('');
  const [user_doctor_id,setUser_doctor_id]=useState(0);
  const [user,setUser] = useState([]);

  
  axios.get(`/medecins/${props.doctor_id}`).then((data)=>{setSpecialite(data.data.specialite);setUser_doctor_id(data.data.UserId)}).catch((err)=>console.log(err));
  axios.get(`/medecins/${props.doctor_id}`).then((data)=>setSpecialite(data.data.specialite)).catch((err)=>console.log(err));
  axios.get(`/users/${user_doctor_id}`).then((data)=>setDoctorName(data.data.nom+" "+data.data.prenom)).catch((err)=>console.log(err));

useEffect(()=>{
  axios.get(`/users/${localStorage.getItem("id")}`).then((response)=>setUser(response.data));

},[]);

  
  console.log("props = "+props);
  const heure_dep = props.heure;

    return(

        <>
        
<div  className="modal fade" id="exampleModalLong" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
<form>

  <div  className="modal-dialog" role="document">
    <div  className="modal-content container_model">
      <div className="modal-header">
        <img src="/images/medecin1.jpg" className="image"></img>
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
              <input type="text" value={user.nom} className="form-control input_text"></input>

            </div>

            <div className="form-group">
              <label style={{float:"left"}} className="ms-2" >Prenom :</label>
              <input style={{float:"left"}} value={user.prenom} type="text" className="form-control input_text"></input>

            </div>

            <div className="form-group">
              <label style={{float:"left"}} className="ms-2" >Contact :</label>
              <input style={{float:"left"}} value={user.contact} type="number" className="form-control input_text"></input>

            </div>

        </div>
      </div>
      <div className="modal-footer">
        {/* <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button> */}
        <button type="button" className="button_">Save changes</button>
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