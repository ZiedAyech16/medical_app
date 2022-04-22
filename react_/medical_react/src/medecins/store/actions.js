const all_medecins = (medecins)=>{
    return{
        type:"All_MEDECINS",
        payload:medecins
    }
}

const createMedecin =(medecin)=> {
    return{
        type:"CREATE_MEDECIN",
        payload:medecin
    }
}

export {all_medecins,createMedecin};