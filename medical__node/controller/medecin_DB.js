const Medecin = require("../model/medecin");
const User = require("../model/user");

async function insertMedecin(medecin,image){
    return await Medecin.create({
        nom:medecin.nom,
        prenom:medecin.prenom,
        email:medecin.email,
        contact:medecin.contact,
        age:medecin.age,
        username:medecin.username,
        password:medecin.password,
        image:image,
        num_order:medecin.num_order,
        specialite:medecin.specialite,
    });
}



async function findAllMedecin(){
    return await Medecin.findAll({
        // include:{
        //    // model:User,
        //     attributes:{exclude:["createAt","updateAt"]}
        // }
    });
}

//findAllMedecin().then((result)=>console.log(result));

async function findOneMedecin(id){
    return await Medecin.findOne({where:{id:id}
        // ,include:{model:User}
    });
}

async function updateMedecin(new_med,id){
    //const med = await Medecin.findOne({where:{id:new_med.id}});
    await Medecin.update({
        nom:new_med.nom,
        prenom:new_med.prenom,
        email:new_med.email,
        contact:new_med.contact,
        age:new_med.age,
        password:new_med.password,
        image:new_med.image,
        num_order:new_med.num_order,
        specialite:new_med.specialite,
        

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