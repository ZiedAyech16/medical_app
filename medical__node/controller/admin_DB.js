const Admin = require("../model/admin");

async function findAllAdmin(){
    return await Admin.findAll();
}

async function ajouterAdmin(admin){
    return await Admin.create({
        UserId:admin.UserId
    })
}

async function findAdminById(id){
    return await Admin.findOne({where:{id:id}});
}

module.exports = {findAllAdmin,ajouterAdmin,findAdminById};