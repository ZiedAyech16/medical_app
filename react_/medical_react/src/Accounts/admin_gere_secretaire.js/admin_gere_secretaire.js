import axios from "axios";
import { useEffect, useRef, useState } from "react";
import "./admin_gere_secretaire.css";
import Gerer_Secretaire_ByAdmin_Item from "./admin_gere_secretaire_item";

axios.defaults.baseURL = "http://127.0.0.1:5000";
export default function GereSecretairesByAdmin(){
    const [secretaire_,setSecretaire_] = useState("");
    const [secretaires_,setSecretaires_] = useState([]);
    const search = useRef();

    useEffect(()=>{
        search.current = secretaire_
        axios.get("/secretaires").then((result)=>setSecretaires_(result.data));
    },[secretaire_])
    return(
        <div>
            <div>
                <input type="text" placeholder="Nom:" value={secretaire_} onChange={(e)=>setSecretaire_(e.target.value)} />
            </div>
{
   // doctors_.filter(res=>res.User!==null&&res.User.nom.includes("zi")).map((result)=>console.log(result))
}

{
    //doctors_.map((result)=>console.log(result.User))
}
        <div className="cards_doctors">
            {
                secretaires_.filter(result=>result.User!==null&&result.User.nom.includes(secretaire_)).map((result)=><Gerer_Secretaire_ByAdmin_Item key={result.id} seretaire={result} />)
            }
        </div>

        </div>
    );
}