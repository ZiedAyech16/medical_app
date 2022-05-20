const stateinit = {
    etat:true
}
const changestatebetweenLogAndReg=(state=stateinit,action)=>{
    switch(action.type){
        case "LOGIN":
            return{
                etat:action.payload
            }
            case "REGISTER":
                return{
                    etat:action.payload
                }
                default:
                    return state;
    }
}

export default changestatebetweenLogAndReg;