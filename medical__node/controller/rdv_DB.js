const RDV = require("../model/rdv");

async function findAllRDV(){
    return await RDV.findAll({});
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