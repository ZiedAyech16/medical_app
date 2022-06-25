import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router";
import OrdonnanceItem from "./ordonnance_item";

export default function Ordonnances(){
    const [ordonnances, setOrdonnances] = useState([]);
    const [ordonnance, setOrdonnance] = useState("");
    const search_pat = useRef();
    const navigate = useNavigate();
    const [user_,setUser_] = useState({});

    useEffect(()=>{
        if(localStorage.getItem("role")==="patient"){
            axios.get(`/patients/${localStorage.getItem("userId")}`).then(r=>setUser_(r.data));
        }
        axios.get("/ordonnances").then(r=>setOrdonnances(r.data));
        search_pat.current = ordonnance;
    },[ordonnance])

    const ajouterOrdonnance = ()=>navigate("/ordonnances/ajouter");
    
    return (
        <div className="">


            <div className="medecins_header">
                <div className="search__">
                    <i class="fa fa-search" aria-hidden="true"></i>

                    <input type="text" className="search__input" placeholder="Nom de patient :" value={ordonnance} onChange={(e)=>setOrdonnance(e.target.value)} />
 

           </div>
                              {localStorage.getItem("role")==="medecin"? 
                               <button className="color_button" onClick={ajouterOrdonnance}><i class="fa fa-plus-circle" aria-hidden="true"  style={{fontSize:'30px',color:"#bbb"}}></i></button>

                      :<></>}


</div>
            <div className="ordonnance_items">

               { localStorage.getItem("role")==="medecin"? ordonnances.filter(r_=>(r_.Patient!==null&&r_.Medecin!==null&&r_.Patient.nom.includes(ordonnance)&&r_.MedecinId===parseInt(localStorage.getItem("userId")))).map(r=><OrdonnanceItem key={r.id} ordonnance={r} />)

               :<></>
            //    ordonnances.filter(r_=>(r_.Patient!==null&&r_.Medecin!==null&&r_.Patient.nom.includes(ordonnance)&&r_.MedecinId===user_.MedecinId&&r_.MedecinId===parseInt(localStorage.getItem("userId")))).map(r=><OrdonnanceItem key={r.id} ordonnance={r} />)
               }

               { localStorage.getItem("role")==="patient"? ordonnances.filter(r_=>(r_.Patient!==null&&r_.Medecin!==null&&r_.Patient.nom.includes(ordonnance)&&r_.PatientId===parseInt(localStorage.getItem("userId")))).map(r=><OrdonnanceItem key={r.id} ordonnance={r} />):<></>
            //    ordonnances.filter(r_=>(r_.Patient!==null&&r_.Medecin!==null&&r_.Patient.nom.includes(ordonnance)&&r_.MedecinId===user_.MedecinId&&r_.PatientId===parseInt(localStorage.getItem("userId")))).map(r=><OrdonnanceItem key={r.id} ordonnance={r} />)
               }

            </div>

        </div>
    );
}