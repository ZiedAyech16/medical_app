const Fichepatient = require("../model/fichepatient");
const Medecin = require("../model/medecin");
const Patient = require("../model/patient");
const rdv = require("../model/rdv");

async function ajouterRdv(fp){
    return await rdv.create({
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

async function selectAllRdv(){
    return await rdv.findAll({
        include:[
            {
            model:Medecin,
             attributes:{exclude:[]}
        },
        {
            model:Patient,
             attributes:{exclude:[]}
        }
    ]
    });
}


async function removeRdv(id){
    return await rdv.destroy({where:{id:id}});
}


async function updateRdv(fp,id){
    return await rdv.update({
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


async function findOneRDV(id){
    return await rdv.findOne({where:{id:id}});
}


module.exports = {ajouterRdv,selectAllRdv,updateRdv,removeRdv,findOneRDV};