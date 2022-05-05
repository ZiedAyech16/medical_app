const stateinit = {
    etat:true
}
const changestatebetweenLogAndReg=(state=stateinit,action)=>{
    switch(action.type){
        case "LOGIN":
            return{
                state:action.payload
            }
            case "REGISTER":
                return{
                    state:action.payload
                }
                default:
                    return state;
    }
}

export default changestatebetweenLogAndReg;