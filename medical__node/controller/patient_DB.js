const { isRequired } = require("nodemon/lib/utils");
const User = require("../model/user");
const Patient = require("../model/patient");

function insertPatient(patient,image){
    //const user = User.findOne({where:{id:id}});
   return Patient.create({
    nom:patient.nom,
    prenom:patient.prenom,
    email:patient.email,
    contact:patient.contact,
    age:patient.age,
    username:patient.username,
    password:patient.password,
    image:image});
}

async function findAllPatients(){
   return await  Patient.findAll({
    // include:[{
    //     //model:User,
    //    attributes:{exclude:["createAt","updateAt"]}
    //    }]
   });
}

async function findOnePatient(id){
    return await Patient.findOne({where:{id:id}
    //     ,include:{
    //   //  model:User
    //     //,
    //     attributes:{exclude:["createdAt","updatedAt"]}
    // }
});
}

async function updatePatient(new_patient,id){
    return await Patient.update({
        nom:new_patient.nom,
        prenom:new_patient.prenom,
        email:new_patient.email,
        contact:new_patient.contact,
        age:new_patient.age,
        password:new_patient.password,
        image:new_patient.image
    },
    {
        where:{id:id}
    });


} 

async function removePatient(patient_id){
    const patient = Patient.findOne({where:{id:patient_id}});
    if(!patient){return {"message":"patient n'exist pas!"}};
    await Patient.destroy({where:{id:patient_id}});
     patient = Patient.findOne({where:{id:patient_id}});

    if(!patient){
        return {"message":"patient removed!"};
    }
}

// console.log("findAllPatients()");
// console.log(findAllPatients().then(data=>console.log(data)));

//removePatient(8);

module.exports = {insertPatient,findAllPatients,findOnePatient,updatePatient,removePatient};