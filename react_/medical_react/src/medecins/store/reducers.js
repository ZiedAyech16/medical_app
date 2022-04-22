const initMed = {
    users:[]
}

const medecinReducers = (state=initMed,action)=>{
    switch(action.type){
        case "All_MEDECINS":
            return {
                ...state,
                users:action.payload
            }
        case "CREATE_MEDECIN":
            return {
                ...state,
                users:action.payload
            }
        default :
        return state;
    }
}
export default medecinReducers;