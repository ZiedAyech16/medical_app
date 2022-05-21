import axios from "axios";
import { useEffect, useState } from "react";
import Calender from "../../components/calender";
import { getAllMedecins } from "../gerer_medecin/all";
import { Link } from "react-router-dom";
import MedecinItem from "../../components/medecinItem";
import "./all_med.css";
axios.defaults.baseURL = "http://127.0.0.1:5000";

export default function AllMedecins(props){
    //const allmeds = getAllMedecins();
    //getAllMedecins();
    const [medecins,setAllMedecins]=useState([]);
    


    useEffect(()=>{
        axios.get("/medecins").then((data)=>{setAllMedecins( data.data)}).catch((err)=>{return err});
        console.log(medecins);
        //medecins.filter((user)=>user.specialite=props.specialite)
    },[])
    return (
        <div>
            <h2 style={{float:"left"}} className="all_med_title">Liste des <span className="all_med_title_">{props.specialite} </span></h2>
              <table className="table">
                        <thead className="tr_th">
                            <tr>
                            <th scope="col">num_order</th>
                            <th scope="col">specialite</th>
                            <th scope="col">Nom</th>
                            <th scope="col">Prenom</th>
                            <th scope="col">Contact</th>
                            <th scope="col">Address</th>
                            <th scope="col">Consulter Calendar</th>
                            </tr>
                            
                        </thead>
            {
                (medecins.filter((user)=>user.specialite===props.specialite).map((state,key)=>
                        <tbody key={state.id}>
                            
                            <MedecinItem medecin={state} />
                            
                        </tbody>
                  
                ))
            }
              </table>
        </div>
    );
}

