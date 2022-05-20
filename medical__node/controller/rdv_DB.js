const Medecin = require("../model/medecin");
const Patient = require("../model/patient");
const RDV = require("../model/rdv");

async function findAllRDV(){
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

async function findOneRDV(id){
    return await RDV.findOne({where:{id:id}});
}

async function insertRDV(rdv){
    return await RDV.create({
        date:rdv.date,
        MedecinId:rdv.MedecinId,
        PatientId:rdv.PatientId
    });
}

async function updateRDV(rdv,id){
    return await RDV.update({
        date:rdv.date,
        MedecinId:rdv.MedecinId,
        PatientId:rdv.PatientId
    },{
        where:{id:id}
    });
}

async function removeRDV(id){
    return await RDV.destroy({
        
        where:{id:id}
    });
}

module.exports = {findAllRDV,findOneRDV,insertRDV,updateRDV,removeRDV};