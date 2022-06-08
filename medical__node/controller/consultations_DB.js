const Consultaions = require("../model/consultation");
const Patient = require("../model/patient");
const Secretaire = require("../model/secretaire");
async function selectAllConsultation(){
    return await Consultaions.findAll({
        include:[
            {
            model:Patient
        },
        {
            model:Secretaire
        }
    ]
    })
}

async function selectOneConsultation(id){
    return await Consultaions.findOne({where:{id:id},include:[{model:Patient},{model:Secretaire}]});
}

async function ajouterConsultation(consultation){
    return await Consultaions.create({
                            date:consultation.date,
                            duree:consultation.duree,
                            description:consultation.description,
                            frais:consultation.frais,
                            apci:consultation.apci,
                            SecretaireId:consultation.SecretaireId,
                            PatientId:consultation.PatientId

    }
        );
}


async function updateConsultation(consultation,id){
    return await Consultaions.update({
                            date:consultation.date,
                            duree:consultation.duree,
                            description:consultation.description,
                            frais:consultation.frais,
                            apci:consultation.apci,
                            SecretaireId:consultation.SecretaireId,
                            PatientId:consultation.PatientId

    },{where:{id:id}}
        );
}

async function supprimerConsultation(id){
    return await Consultaions.destroy({where:{id:id}});
}



module.exports = {selectAllConsultation,selectOneConsultation, ajouterConsultation,updateConsultation,supprimerConsultation}