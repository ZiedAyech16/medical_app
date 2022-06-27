const Cabinet = require("../model/cabinet");
const Medecin = require("../model/medecin");

async function selectAllCabinet(){
    return await Cabinet.findAll({
        include:{
            model:Medecin
        }
    })
}

async function selectOneCabinet(id){
    return await Cabinet.findOne({
        where:{id:id},
                include:{
            model:Medecin
        }
    })
}

async function ajouterCabinet(cabinet,image){
    return Cabinet.create({
        nom:cabinet.nom,
        etablissement:cabinet.etablissement,
        image:image,
        MedecinId:cabinet.MedecinId
    });
}

async function updateCabinet(cabinet,id,image){
    return await Cabinet.update({
        nom:cabinet.nom,
        etablissement:cabinet.etablissement,
        image:image,
        MedecinId:cabinet.MedecinId
    },{
        where:{id:id}
    })
}

async function removeCabinet(id){
    return await Cabinet.destroy({
        where:{id:id}
    })
}

module.exports = {selectAllCabinet,selectOneCabinet,ajouterCabinet,updateCabinet,removeCabinet}