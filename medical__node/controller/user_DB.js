const Patient = require("../model/patient");
const User = require("../model/user");

 function insertUser(nom,prenom,email,contact,username,password){

    return new Promise((resolve,reject)=>{

        const res = User.create({nom,prenom,email,contact,username,password});
        resolve(res);
        reject("err");
    })
    //await User.create({nom,prenom,email,contact,username,password}).then((data)=>console.log(data)).catch((err)=>console.log(err));
}


async function findAllUsers(){
   
      return await User.findAll({
            //  include:[{
            //      model:Patient,
            //     attributes:{exclude:[]}
            //     }]
            //   //attributes: [""]
             
        })
    
    
}


function findUser(id){
    return User.findOne({where:{id:id}});
}

function findUserByPasswordEmail(email,password){
    return User.count({where:{email:email,password:password}});
}

function findUserByPasswordEmail2(email,password){
    return User.findOne({where:[{email:{$eq:email},password:{$eq:password}}]})==null?true:false;
}

async function updateUser(id,nom,prenom,email,contact,username,password){
    const found_user =  User.findOne({where:{id:id}});
    const user = await User.update({nom:nom,prenom:prenom,email:email,contact:contact,username:username,password:password},{where:{id:id}});
    //.success(result=>console.log(result)).error(err=>console.log(err));
    return user;
}



async function removeUser(id){
   await User.destroy({where:{id:id}});
//     const user = User.findOne({where:{id:id}});
//     if(!user){
//         return {"message":"user not exist!"};
//        }else
//    if(user){
//     user.destroy();
//     return {"message":"user deleted!"};
//    }
}

//insertUser("aaaa","bbbb","nnnnn",13165,"ijnj@","kk").then((res)=>console.log(res)).catch((err)=>console.log(err));
//console.log(findAllUsers().then((res)=>console.log(res)));
//updateUser(12,"aaaa","bbbb","nnn1545nn",13165,"ijnj@","kk");
//.then((res)=>console.log(res)).catch((err)=>console.log(err));

module.exports = {insertUser,findAllUsers,findUser,updateUser,removeUser,findUserByPasswordEmail,findUserByPasswordEmail2};