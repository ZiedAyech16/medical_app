import axios from "axios";
import { useEffect, useRef, useState } from "react";
import "./admin_gere_doctors.css";
import Gerer_Doctor_ByAdmin_Item from "./admin_gere_doctors_item";

axios.defaults.baseURL = "http://127.0.0.1:5000";
export default function GereDoctorByAdmin(){
    const [doctor_,setDoctor_] = useState("");
    const [doctors_,setDoctors_] = useState([]);
    const search = useRef();

    useEffect(()=>{
        search.current = doctor_
        axios.get("/medecins").then((result)=>setDoctors_(result.data));
    },[doctor_])
    return(
        <div>
            <div>
                <input type="text" placeholder="Nom:" value={doctor_} onChange={(e)=>setDoctor_(e.target.value)} />
            </div>
{
   // doctors_.filter(res=>res.User!==null&&res.User.nom.includes("zi")).map((result)=>console.log(result))
}

{
    //doctors_.map((result)=>console.log(result.User))
}
        <div className="cards_doctors">
            {
                doctors_.filter(result=>result.User!==null&&result.User.nom.includes(doctor_)).map((result)=><Gerer_Doctor_ByAdmin_Item key={result.id} doctor={result} />)
            }
        </div>

        </div>
    );
}