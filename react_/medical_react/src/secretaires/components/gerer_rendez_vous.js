import axios from "axios";
import { useEffect, useRef, useState } from "react";
import Rendezvous_Item from "./gere_rendevous_item";
import DatePicker, { Calendar, DateObject } from "react-multi-date-picker"

import "./gere_rendez_vous.css";
axios.defaults.baseURL ="http://127.0.0.1:5000";
export function ListRendez_vous(){
    const [rdvs,setRdvs] = useState([]);
    const rdvs_ = [];
    const [count,setCount] = useState(axios.get("/rdvs").then((result,index)=>{return result.data.length}));
    const [data_medecin,setData_medecin]=useState({medecinId:0,nom:'',prenom:'',specialite:'',email:'',contact:''});
    
    const [rendezvous,setRendezvous] = useState([]);
    const [rendezvous_medecin,setRendezvous_Medecin] = useState([]);
    const [rendezvous_patients,setRendezvous_Patients] = useState([]);

    const [medecinId,setmedecinId] =useState("");
    const [nom_med,setnom_med] = useState("");
    const [prenom_med,setprenom_med]=useState("");
    const [specialite,setspecialite]=useState("");
    const [email_med,setemail_med]=useState("");
    const [contact_med,setcontact_med]=useState("");
    const patientsearch=useRef("");
    const [searchPatient,setSearchPatient]=useState('');
    const datePickerRef = useRef()
    const [value, setValue] = useState(new Date());
    const [date__,setDate__]=useState({
        dd:'',
        mm:'',
        yyyy:''
    });

    const [search_patient,setSearch_patient]=useState('');
    const searchpatient=useRef();

    const  [all_patients,setAll_patients]=useState([]);

    console.log(date__);

    var fetchdata = async()=>{
        //const {data} =await axios.get("/rdvs").then((result)=>rdvs_.push(result.data));
    //   const {data,index} = await axios.get("/rdvs");
    //   setCount(data.length);
      await axios.get("/rdvs").then((result)=>{
        console.log(result.data);

  // console.log(result.data);
  setRdvs(result.data)
  
  rdvs.map((result)=>{

  console.log(result.Medecin.UserId);
 // axios.get(`/patients/${result.PatientId}`).then((res)=>{console.log(res);setRendezvous_Patients(res.data)});
 // axios.get(`/medecins/${result.MedecinId}`).then((res)=>{console.log(res.data);setRendezvous_Medecin(res.data)});
  });

  //console.log(rendezvous_medecin);
  //console.log(rendezvous_patients);

    });
      //  setRdvs(rdvs_);
    //   console.log(rdvs_[1].id);

    }

console.log(value.day);



const search_patient_condition = (valeur)=>{
    //console.log("ok1");
    const pats = all_patients.filter((res__)=>res__.User.nom.includes(valeur)).map((da)=>true)
    return pats.length
   // console.log("ok2");

//all_patients.inc.map((da)=>console.log("_____",da))

   // return false;
}

    useEffect(()=>{
        fetchdata();
        patientsearch.current=searchPatient;

        
            rdvs.map((d)=>setDate__({...date__,yyyy:d.date[0]+d.date[1]+d.date[2]+d.date[3]}))
        
            rdvs.map((d)=>setDate__({...date__,mm:d.date[5]+d.date[6]}))
        
            rdvs.map((d)=>setDate__({...date__,dd:d.date[8]+d.date[9]}))
        
            searchpatient.current=search_patient
            console.log(date__);

            axios.get("/patients").then((result)=>setAll_patients(result.data));
           // console.log("dddd",search_patient_condition(search_patient));

        // let date_ = datePickerRef.current.date;
        // setDate(new DateObject(date_));

        // console.log(date);
       // console.log(rdvs[0]);
     //   console.log(rdvs_);
    // axios.get(`/medecins/${2}`).then((data)=>{console.log( data.data.specialite)});
    },[search_patient]);
   // fetchdata();
   const medecin_details = async(index)=>{
    const medecinId ="";
    const nom = "";
    const prenom="";
    const specialite=await axios.get(`/medecins/${index}`).then((data)=>{return ("fff"+data.data.specialite)});
    const email="";
    const contact="";
    
    return[{medecinId:medecinId,nom:nom,prenom:prenom,specialite:specialite,email:email,contact:contact}];
   }
   //medecin_details();
   //console.log(medecin_details(2).then((result)=>console.log(result[0].specialite)));
   //console.log(axios.get(`medecins/${2}`).then((data)=>{console.log(data.data)}));
   //1//console.log(medecin_details(2).then((result)=>{ JSON.stringify(result)}).then((result)=>{return result[0].specialite}));
    return(
        <div>
            <div className="search_rdvs">
            <h1 className="rendez_vous_title">Gerer Rendez-Vous    
            {
   // console.log('tt',search_patient_condition(search_patient))
}
            </h1>
            <input className="search_nom_fc" type="text" value={search_patient}  onChange={(e)=>setSearch_patient(e.target.value)} />


            <DatePicker
     containerStyle={{ //datepicker container style
          width: "160px",
          margin: "auto",
          marginLeft:"80px",
          
        }}
        style={{ //input style
          width: "230px",
          height: "36px",
          boxSizing: "border-box",
          paddingLeft:"55px",
          border:"5px solid navy"

        }}

value={value} onChange={setValue}  className=" red " />
            </div>

       

{
   // rdvs.map((d)=>console.log(d.date.substr(0,10)+" "+d.date.substr(0,4)+" "+d.date.substr(5,6)+" "+d.date.substr(7,8)))
}
{/* {
    rdvs.map((d)=>console.log(d.date[0]+d.date[1]+d.date[2]+d.date[3]))
}

{
    rdvs.map((d)=>console.log(d.date[5]+d.date[6]))
}
{
    rdvs.map((d)=>console.log(d.date[8]+d.date[9]))
} */}

  {/* {value?.toDate?.().toString()} */}

            <table width="100%">
                <thead className="table bg-dark text-white"> 
                {/* <tr >
                    <th style={{border:"2px solid white",padding:"1%"}}>PatientID</th>
                    <th style={{border:"2px solid white",padding:"1%"}} colSpan={4}>Medecins</th>
                    <th style={{border:"2px solid white",padding:"1%"}} colSpan={4}>Patients</th>
                    <th style={{border:"2px solid white",padding:"1%"}} colSpan={2}>Rendez-vous</th>
                </tr>
                <tr><th style={{border:"2px solid white",paddingRight:"1%"}}>ID</th>
                <th>Nom</th>
                <th>Prenom</th>
                <th>Contact</th>
                <th  style={{borderRight:"2px solid white",paddingRight:"1%"}}>Email</th>

                 <th>Nom</th>
                <th>Prenom</th>
                <th>Contact</th>
                <th   style={{borderRight:"2px solid white",paddingRight:"1%"}}>Email</th> 
                <th>Date</th>
                <th   style={{borderRight:"2px solid white",paddingRight:"1%"}}>Heure</th>
                <th></th>
                </tr> */}

                </thead>

               


            {rdvs.filter((res)=>parseInt(res.date[8]+res.date[9])===value.day
            //  &&parseInt(res.date[5]+res.date[6])===convertoMonthToNumber(value.month)
            &&parseInt(res.date[0]+res.date[1]+res.date[2]+res.date[3])===value.year
           // &&res.Patient.User.UserId.includes(search_patient)
           &&search_patient_condition(search_patient)
           &&res.Medecin!==null&res.Patient!==null&&res.Medecin.UserId!==null&&res.Patient.UserId
            ).map((data)=><Rendezvous_Item rendezvous={data}  key={data.id} />

            // <tr key={data.id}>
            //     <td>{data.id}</td>
               
                //{
                    /* <td>ali</td>
                <td>ben ali</td>
                <td>22555544</td>
                <td>zied12@gmail.com</td>
                <td>ali</td>
                <td>Ahmed</td>
                <td>54444444</td>
                <td>{axios.get(`/users/${data.id}`).then((data_)=><p>{data_.data.nom} </p>)}</td>

                <td>17/11/2022</td>
                <td>14:00</td>
                <td>
                    <button className="btn_valid">valider</button>
                    <button className="btn_reject">refuser</button>
                </td> */
            //}


                //  </tr>
                 )}
            </table>
        </div>
    );
}


function convertoMonthToNumber(s){
    switch(s){
        case "Jan":
            return 1;
        case "Feb":
            return 2;
        case "Mar":
            return 3;
        case "Apr":
            return 4;
        case "May":
            return 5;
        case "Jun":
            return 6;
        case "Jul":
            return 7;
        case "Aug":
            return 8;
        case "Sep":
            return 9;
        case "Oct":
            return 10;

        case "Nov":
            return 11;
        case "Dec":
            return 12;
        default:
            return 0;
    }

}