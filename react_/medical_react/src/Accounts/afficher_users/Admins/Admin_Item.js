import { useNavigate } from "react-router";
import { createSearchParams } from "react-router-dom";
import "./Secretaire.css";
import axios from "axios";

axios.defaults.baseURL = "http://127.0.0.1:5000";

export default function Admin_Item(props){
    console.log(props);
    const navigate = useNavigate();


    const removeAdmin = (e)=>{
        e.preventDefault();
        axios.delete(`/admins/${props.admin.id}`);
        navigate("/gere/admins");
    }
    
    const editer_admin = (e)=>{
        e.preventDefault();
        navigate({
            pathname:"/register/admin",
            search:createSearchParams(
                {
                    id:props.admin.id,
                    nom:props.admin.nom,
                    prenom:props.admin.prenom,
                    age:props.admin.age,
                    email:props.admin.email,
                    contact:props.admin.contact,
                    username:props.admin.username,
                    password:props.admin.password,
                    image:props.admin.image,
                }
            ).toString()
        })
    }
    return(
        <div className="gere_secretaire_card">
            <img src={`http://127.0.0.1:5000/admins/images/${props.admin.image}`} alt="image 1" width={200} height={200} />
            <div>
                <h3 className="gere_secretaire_card_title">{props.admin.nom} {props.admin.prenom} </h3>
            </div>
            <div>
                <div>
                    <p className="gere_secretaire_card_text">Email:{props.admin.email} </p>
                    <p className="gere_secretaire_card_text">Contact:{props.admin.contact} </p>
                    <p className="gere_secretaire_card_text">Age:{props.admin.age} </p>
                </div>
                <div>
                    <button  className="gere_secretaire_card_button color_1" onClick={editer_admin}>Editer</button>
                    <button className="gere_secretaire_card_button color_2" onClick={removeAdmin}>Supprimer</button>
                </div>

            </div>
        </div>
    );
}