const Specialite = require("../model/specialite");

async function selectAllSpecialite(){
    return await Specialite.findAll();
}

async function insertSpecialte(specialite){
    return await Specialite.create({
        nom:specialite.nom
    })
}

async function selectOneSpecialite(id){
    return await Specialite.findOne({where:{id:id}});
}

async function updateSpecialite(ud,specialite){
    return await Specialite.update({
        nom:specialite.nom
    },{
        where:{id:id}
    })
}

async function supprimerSpecialite(id){
    return await Specialite.destroy({
        where:{id:id}
    })
};

module.exports =  {selectAllSpecialite,selectOneSpecialite,insertSpecialte,updateSpecialite,supprimerSpecialite};