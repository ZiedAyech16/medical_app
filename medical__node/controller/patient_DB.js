const { isRequired } = require("nodemon/lib/utils");
const User = require("../model/user");
const Patient = require("../model/patient");

function insertPatient(patient){
    //const user = User.findOne({where:{id:id}});
   return Patient.create({
        // nom:user.nom,
        // prenom:user.prenom,
        // email:user.email,
        // contact:user.contact,
        // username:user.username,
        // password:user.password
        UserId:patient.UserId});
}

async function findAllPatients(){
   return await  Patient.findAll({
    include:[{
        model:User,
       attributes:{exclude:[]}
       }]
   });
}

async function findOnePatient(id){
    return await Patient.findOne({where:{id:id},include:{model:User,attributes:{exclude:["createdAt","updatedAt"]}}});
}

async function updatePatient(new_patient,id){
    return await Patient.update({
        UserId:new_patient.UserId
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