import axios from "axios";
import { useEffect, useRef, useState } from "react";
import Calender from "../../components/calender";
import { Link } from "react-router-dom";
import MedecinItem from "../../components/medecinItem";
import "./all_med.css";
axios.defaults.baseURL = "http://127.0.0.1:5000";

export default function AllMedecins(props){
    //const allmeds = getAllMedecins();
    //getAllMedecins();
    const search = useRef();
    const [medecins,setAllMedecins]=useState([]);
    const [search_,setSearch_]=useState("");


    useEffect(()=>{
        axios.get("/medecins").then((data)=>{setAllMedecins( data.data)}).catch((err)=>{return err});
        console.log(medecins);
        search.current=search_;
        //medecins.filter((user)=>user.specialite=props.specialite)
    },[search_])
    return (
        <div>
           <div className="container_search"> 
               <h2  className="all_med_title">Liste des <span className="all_med_title_">{props.specialite} </span></h2>
            <input type="text" className="search_nom" value={search_} onChange={(e)=>setSearch_(e.target.value)} />
           
           </div>
              <div  className="cards">
             
            {
               // medecins.map((us)=>console.log(us.User!==null?us.User.nom:{}))
                medecins.filter((user)=>user.specialite===props.specialite&&user!==null?user.nom.includes(search_):false).map((state,key)=>
                        <div className="card" key={state.id}>
                            {console.log(state)}
                            <MedecinItem  medecin={state} />
                            
                        </div>
                  
                )
            }
              </div>
        </div>
    );
}

