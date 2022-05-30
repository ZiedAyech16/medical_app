const Fichepatient = require("../model/fichepatient");

async function ajouterFichePatient(fp){
    return await Fichepatient.create({
        nom:fp.nom,
        prenom:fp.prenom,
        age:fp.age,
        sexe:fp.sexe,
        hour:fp.hour,
        jour:fp.jour,
        month:fp.month,
        year:fp.year,
        contact:fp.contact,
        MedecinId:fp.MedecinId,
        PatientId:fp.PatientId
    });
}

async function selectAllFichePatient(){
    return await Fichepatient.findAll({
        
    });
}


async function removeFichePatient(id){
    return await Fichepatient.destroy({where:{id:id}});
}


async function updateFichePatient(fp,id){
    return await Fichepatient.update({
        nom:fp.nom,
        prenom:fp.prenom,
        age:fp.age,
        sexe:fp.sexe,
        hour:fp.hour,
        jour:fp.jour,
        month:fp.month,
        year:fp.year,
        contact:fp.contact,
        MedecinId:fp.MedecinId,
        PatientId:fp.PatientId
    },{
        where:{id:id}
    });
}


module.exports = {ajouterFichePatient,selectAllFichePatient,updateFichePatient,removeFichePatient};