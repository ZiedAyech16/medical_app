import "./gerer_fiche_patient.css";
export default function FichePatientItem(props){

    return (<div className="fiche_card_container">

        {/* <h1> {props.fiche_patient.sexe}</h1> */}

        <img src="/images/medecin1.jpg" className="fiche_card_image"></img>
        <div className="fiche_card_name">{props.fiche_patient.nom} {props.fiche_patient.prenom} </div>
        <div className="fiche_card_container_sub">
            <div className="fiche_card_element">
                Date: <span>{props.fiche_patient.jour}</span>/<span>{props.fiche_patient.month}</span>/<span>{props.fiche_patient.year}</span>--<span>{props.fiche_patient.hour}:</span>00
            </div>
            <div className="fiche_card_element"><span>Contact: {props.fiche_patient.contact}</span></div>
            <div className="fiche_card_element"><span>Sexe: {props.fiche_patient.sexe}</span></div>
            <div className="fiche_card_element"><span>Date de creation: {props.fiche_patient.createdAt}</span></div>
        </div>

    </div>);
}