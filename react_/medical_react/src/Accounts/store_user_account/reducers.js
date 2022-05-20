const initState = {
    user:[{email:"",nom:"",prenom:"",age:'',username:'',password:'',id:0}]
}

const save_user_data_reducers = (state=initState,action)=>{
    switch(action.type){
        case "USER":
            return{
                ...state,
                user:action.payload
            }
        default:
            return state;
    }
}

export default save_user_data_reducers;