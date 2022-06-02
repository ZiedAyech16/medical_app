const UserRole = require("../model/user_role");

async function ajouterUserRole(email,userId,role){
    return UserRole.create({
        email:email,
        role:role,
        userId:userId
    })
}

async function selectAllUserRole(){
    return await UserRole.findAll();
}

async function selectOneUserRole(id){
    return await UserRole.findOne({where:{id:id}});
}

async function updateUserRole(user_role,id){
    return await UserRole.update({
        email:user_role.email,
        role:user_role.role,
        userId:user_role.userId
    },{
        where:{id:id}
    })
}

async function removeUserRole(id){
    return await UserRole.destroy({
        where:{id:id}
    })
}

module.exports = {ajouterUserRole,selectAllUserRole,selectOneUserRole,removeUserRole,updateUserRole};