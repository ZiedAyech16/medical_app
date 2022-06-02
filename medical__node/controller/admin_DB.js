const Admin = require("../model/admin");

async function findAllAdmin(){
    return await Admin.findAll();
}

async function ajouterAdmin(admin,image){
    return await Admin.create({
        nom:admin.nom,
        prenom:admin.prenom,
        email:admin.email,
        contact:admin.contact,
        age:admin.age,
        username:admin.username,
        password:admin.password,
        image:image

    })
}

async function findAdminById(id){
    return await Admin.findOne({where:{id:id}});
}

module.exports = {findAllAdmin,ajouterAdmin,findAdminById};