import { createSearchParams, Link } from "react-router-dom";
import "./consultation.css";
import { useNavigate } from "react-router";
import axios from "axios";
import Swal from "sweetalert2";

axios.defaults.baseURL = "http://127.0.0.1:5000";
export default function ConsultationItem(props){
    const consultation = props.consultation;
    const navigate = useNavigate();
    const toDetailPage = ()=>navigate({
       // pathname:`/consultations/ajouter/${localStorage.getItem('role')}`,
        pathname:`/consultations/editer`,
        search:createSearchParams(consultation).toString()});
    const date_ = new Date(consultation.date);

    const remove_consultation = (e)=>{
        e.preventDefault();
        axios.delete(`/consultations/${consultation.id}`).then(r=>{
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Consultation a été crée!!',
                showConfirmButton: false,
                timer: 2500
              })
            Swal.fire({
                position: 'center',
                icon:'success',
                title:"Consultation a supprimé",
                showConfirmButton:false,
                timer:2500
            })
        })
    }
    return(
        <div>
        {consultation.Patient!==null?
        <div className="card_consultation">


            <div className="container_consultation_detail">
            <h4 className='title_consultation'>Consultation</h4>
                <div className="consultation_item_1">
                    <div className="">
                    <img className="image_consultation_detail" src={`${`http://127.0.0.1:5000/patients/images/${consultation.Patient.image}`}`}></img>

                    </div>
                    <div><h3  className='date_consultation'>{consultation.Patient.nom}{' '}{consultation.Patient.prenom} </h3> </div>
                    <div className='date_consultation'>Date :{date_.toISOString().substring(0,10)} </div>

                </div>

                <div className="consultation_item_2">
                    <div className='_item2'>
                    <div className="_item"><small className='consultation_text_1'>APCI: </small><div className='consultation_text_2'>{consultation.apci==="0"?"non":"oui"} </div></div>
                    <div className="_item"><small className='consultation_text_1'>Frais: </small><div className='consultation_text_2'>{consultation.frais}</div> </div>
                    <div className="_item"><small className='consultation_text_1'>Duree: </small><div className='consultation_text_2'>{consultation.duree}</div></div>
                    </div>
                    <div className="_item2">
                        <div><small className='consultation_text_1'>Age: </small><div className='consultation_text_2'>{consultation.Patient.age}</div></div>
                        <div><small className='consultation_text_1'>Contact: </small><div className='consultation_text_2'>{consultation.Patient.contact}</div></div>
                        <div><small className='consultation_text_1'>Email: </small><div className='consultation_text_2'>{consultation.Patient.email}</div></div>
                    </div>
                    <div>
                        <h6>Secretaire :</h6>
                        <h5>{consultation.Secretaire.nom}{' '}{consultation.Secretaire.prenom} </h5>
                    </div>

                </div>

                <div className="consultation_item_3">
                    <div className='consultation_text_1'>Description: </div>
                    <div>{consultation.description} </div>
                </div>


            </div>
            <div className="consultation_text">
               <button className="btn_item_medecin button_detail" onClick={toDetailPage}><i class="fa fa-pencil-square" aria-hidden="true" style={{fontSize:'30px',color:"#bbb"}}></i></button>
                <button className="btn_item_medecin button_detail" onClick={remove_consultation}><i class="fa fa-trash" aria-hidden="true" style={{fontSize:'30px',color:"#bbb"}}></i>
                </button>


        
            </div>

        </div>:<></>}
        </div>
    );
}