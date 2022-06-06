const Medecin = require("../model/medecin");
const Patient = require("../model/patient");
const RDV = require("../model/fichepatient");

async function findAllFichePatient(){
    return await RDV.findAll({
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

async function findOneFichePatient(id){
    return await RDV.findOne({where:{id:id},
        include:[
            {
            model:Medecin,
             attributes:{exclude:[]}
        },
        {
            model:Patient,
             attributes:{exclude:[]}
        }
    ]});
}

async function insertFichePatient(rdv){
    return await RDV.create({
        date:rdv.date,
        MedecinId:rdv.MedecinId,
        PatientId:rdv.PatientId
    });
}

async function updateFichePatient(rdv,id){
    return await RDV.update({
        date:rdv.date,
        MedecinId:rdv.MedecinId,
        PatientId:rdv.PatientId
    },{
        where:{id:id}
    });
}

async function removeFichePatient(id){
    return await RDV.destroy({
        
        where:{id:id}
    });
}

module.exports = {findAllFichePatient,findOneFichePatient,insertFichePatient,updateFichePatient,removeFichePatient};