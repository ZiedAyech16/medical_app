import { useNavigate } from "react-router";
import { createSearchParams } from "react-router-dom";
import "./Medecin.css";
import axios from "axios";

axios.defaults.baseURL = "http://127.0.0.1:5000";

export default function Medecin_Item(props){
    console.log(props);
    const navigate = useNavigate();


    const removeMedecin = (e)=>{
        e.preventDefault();
        axios.delete(`/medecins/${props.medecin.id}`);
        navigate("/gere/medecins");
    }
    
    const editer_medecin = (e)=>{
        e.preventDefault();
        navigate({
            pathname:"/register/medecin/editer",
            search:createSearchParams(
                {
                    id:props.medecin.id,
                    nom:props.medecin.nom,
                    prenom:props.medecin.prenom,
                    age:props.medecin.age,
                    email:props.medecin.email,
                    contact:props.medecin.contact,
                    num_order:props.medecin.num_order,
                    specialite:props.medecin.specialite,
                    username:props.medecin.username,
                    password:props.medecin.password,
                    image:props.medecin.image,
                    MedecinId:props.medecin.MedecinId
                }
            ).toString()
        })
    }
    return(
        // <div className="">
        //     <img className="" src={`http://127.0.0.1:5000/medecins/images/${props.medecin.image}`} alt="image 1"  />
        //     <div>
        //         <h3 className="">{props.medecin.nom} {props.medecin.prenom} </h3>
        //     </div>
        //     <div>
        //         <div>
        //             <p className="">Email:{props.medecin.email} </p>
        //             <p className="">Contact:{props.medecin.contact} </p>
        //             <p className="">Date de naisance: {props.medecin.age} </p>
        //         </div>
        //         <div>
        //             <button  className=" color_1" onClick={editer_medecin}>Editer</button>
        //             <button className=" color_2" onClick={removeMedecin}>Supprimer</button>
        //         </div>

        //     </div>
        // </div>
        <tr className="table_container_medecins_tr">
            <td className="">
                 <img className="table_container_medecins_image table_container_medecins_td" src={`http://127.0.0.1:5000/medecins/images/${props.medecin.image}`} width={80} height={80} alt="image 1"  />

            </td>
            <td>
               <span  className="text_style"> {props.medecin.nom}</span>
            </td>

            <td className="">
                <span  className="text_style">{props.medecin.prenom} </span>
            </td>

            <td className="">
                <span  className="text_style">{props.medecin.email} </span>
            </td>

            <td className="">
                <span  className="text_style">{props.medecin.contact} </span>
            </td>

            <td className="">
                <span  className="text_style">{props.medecin.age} </span>
            </td>
            <td>
             <button  className=" color_button" onClick={editer_medecin}><i class="fa fa-pencil-square" aria-hidden="true" style={{fontSize:'30px',color:"#bbb"}}></i></button>
             <button className=" color_button" onClick={removeMedecin}><i class="fa fa-trash" aria-hidden="true" style={{fontSize:'30px',color:"#bbb"}}></i></button>
        
            </td>
        </tr>
    
        );
}