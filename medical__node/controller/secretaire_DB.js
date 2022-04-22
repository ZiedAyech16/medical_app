const Secretaire = require("../model/secretaire");
const User = require("../model/user");

async function findAllSecretaire(){
    return await Secretaire.findAll(
       { include:{
            model:User,
            attributes:{exclude:["createAt","updateAt"]}
        }}
    );
}

async function findOneSecretaire(id){
    return await Secretaire.findOne({where:{id:id},include:{model:User}})
} 


async function insertSecretaire(secretaire){
    return await Secretaire.create({
        UserId:secretaire.UserId
    });
}

async function updateSecretaire(secretaire,id){
    return await Secretaire.update({
        UserId:secretaire.UserId

    },{where:{id:id}});
}

async function removeSecretaire(id){
    return await Secretaire.destroy({where:{id:id}});
}

module.exports = {findAllSecretaire,findOneSecretaire,insertSecretaire,updateSecretaire,removeSecretaire};