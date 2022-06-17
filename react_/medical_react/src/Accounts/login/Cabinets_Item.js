
export default function CabinetItem(props){
    const cabinets = props.cabinets;

return(    <div className="cabinet__">
        <img className="cabinet__image" src={`http://127.0.0.1:5000/cabinets/images/${cabinets.image}`} />
        <h4 className="cabinet__title">{cabinets.nom} </h4>
        <p className="cabinet__text">{cabinets.etablissement} </p>
        <h6 className="cabinet__title_1">Sous responablite de </h6>
        <p className="cabinet__text">{cabinets.Medecin.nom}<span> </span> {cabinets.Medecin.prenom} </p>
    </div>)

}