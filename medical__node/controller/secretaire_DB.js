const Secretaire = require("../model/secretaire");
const User = require("../model/user");

async function findAllSecretaire(){
    return await Secretaire.findAll(
    //    { include:{
    //        // model:User,
    //         attributes:{exclude:["createAt","updateAt"]}
    //     }}
    );
}

async function findOneSecretaire(id){
    return await Secretaire.findOne({where:{id:id},
    //     include:{
    //     //model:User
    // }
})
} 


async function insertSecretaire(secretaire,image){
    return await Secretaire.create({
        nom:secretaire.nom,
        prenom:secretaire.prenom,
        email:secretaire.email,
        contact:secretaire.contact,
        age:secretaire.age,
        username:secretaire.username,
        password:secretaire.password,
        image:image
    });
}

async function updateSecretaire(secretaire,id){
    return await Secretaire.update({
        nom:secretaire.nom,
        prenom:secretaire.prenom,
        email:secretaire.email,
        contact:secretaire.contact,
        age:secretaire.age,
        username:secretaire.username,
        password:secretaire.password,
        image:secretaire.image

    },{where:{id:id}});
}

async function removeSecretaire(id){
    return await Secretaire.destroy({where:{id:id}});
}

module.exports = {findAllSecretaire,findOneSecretaire,insertSecretaire,updateSecretaire,removeSecretaire};