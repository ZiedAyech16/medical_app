const initState = {
    email:'',
    token:'',
    password:''
}

const connexion = (state=initState,action)=>{
    switch(action.type){
        case "LOGIN":
            return{
                ...state,
                email:action.email,
                password:action.password,
                token:action.token
            }
            case "LOGOUT":
                return{
                    ...state,
                    email:"",
                    password:"",
                    token:""
                }
                default :
                return state;
    }
}

export default connexion;