import axios from "axios";
import { useEffect, useState } from "react";
import "./gere_rendez_vous.css";
axios.defaults.baseURL ="http://127.0.0.1:5000";
export function ListRendez_vous(){
    const [rdvs,setRdvs] = useState([]);
    const rdvs_ = [];
    const [count,setCount] = useState(axios.get("/rdvs").then((result,index)=>{return result.data.length}));
    const [data_medecin,setData_medecin]=useState({medecinId:0,nom:'',prenom:'',specialite:'',email:'',contact:''});
    

    const [medecinId,setmedecinId] =useState("");
    const [nom_med,setnom_med] = useState("");
    const [prenom_med,setprenom_med]=useState("");
    const [specialite,setspecialite]=useState("");
    const [email_med,setemail_med]=useState("");
    const [contact_med,setcontact_med]=useState("");

    var fetchdata = async()=>{
        //const {data} =await axios.get("/rdvs").then((result)=>rdvs_.push(result.data));
    //   const {data,index} = await axios.get("/rdvs");
    //   setCount(data.length);
      await axios.get("/rdvs").then((result)=>{setRdvs(result.data)});
      //  setRdvs(rdvs_);
    //   console.log(rdvs_[1].id);
    }
    useEffect(()=>{
        fetchdata();
       // console.log(rdvs[0]);
     //   console.log(rdvs_);
    // axios.get(`/medecins/${2}`).then((data)=>{console.log( data.data.specialite)});
    },[]);
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
            <h1 className="rendez_vous_title">Gerer Rendez-Vous</h1>
           
            <table width="100%">
                <thead className="table bg-dark text-white"> 
                <tr >
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
                </tr>

                </thead>
            {rdvs.map((data)=><tr key={data.id}>
                <td>{data.id}</td>
               
                <td>ali</td>
                <td>ben ali</td>
                <td>22555544</td>
                <td>zied12@gmail.com</td>
                <td>ali</td>
                <td>Ahmed</td>
                <td>54444444</td>
                <td>sami@hotmail.com</td>

                <td>17/11/2022</td>
                <td>14:00</td>
                <td>
                    <button className="btn_valid">valider</button>
                    <button className="btn_reject">refuser</button>
                </td>

                 </tr>)}
            </table>
        </div>
    );
}