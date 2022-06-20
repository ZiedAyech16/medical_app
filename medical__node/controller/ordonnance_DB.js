const Ordonnance = require("../model/ordonance");
const Patient = require("../model/patient");
const Medecin = require("../model/medecin");

async function ajouterOrdanace(ordonance){
    return await Ordonnance.create(ordonance);
}

async function selectAllOrdonnace(){
    return await Ordonnance.findAll({
        include:[{model:Patient},{model:Medecin}]
    });
}


async function selectOneOrdonnace(id){
    return await Ordonnance.findOne({where:{id:id},include:[{model:Patient},{model:Medecin}]});
}

async function updateOrdonnace(ordonnance,id){
    return await Ordonnance.update(ordonnance,{where:{id:id}});
}

async function removeOrdonnace(id){
    return await Ordonnance.destroy({where:{id:id}})
}

module.exports = {ajouterOrdanace,selectOneOrdonnace,selectAllOrdonnace,removeOrdonnace,updateOrdonnace}