const Medecin = require("../model/medecin");
const User = require("../model/user");

async function insertMedecin(medecin){
    return await Medecin.create({
        num_order:medecin.num_order,
        specialite:medecin.specialite,
        UserId:medecin.UserId
    });
}


async function findAllMedecin(){
    return await Medecin.findAll({
        include:{
            model:User,
            attributes:{exclude:["createAt","updateAt"]}
        }
    });
}

async function findOneMedecin(id){
    return await Medecin.findOne({where:{id:id}});
}

async function updateMedecin(new_med,id){
    //const med = await Medecin.findOne({where:{id:new_med.id}});
    await Medecin.update({
        num_order:new_med.num_order,
        specialite:new_med.specialite,
        UserId:new_med.UserId

    },{
        where:{id:id}
    });
    return await Medecin.findOne({where:{id:id}});
}

async function removeMedecin(med_id){
   await Medecin.destroy({where:{id:med_id}});
}


//  updateMedecin({
//     "num_order": "25252",
//     "specialite": "dfdffffffff"
// },1);

module.exports = {insertMedecin,findAllMedecin,findOneMedecin,updateMedecin,removeMedecin};