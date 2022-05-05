const logging = (a) =>{
    return {
        type:"LOGIN",
        payload:a
    }
}

const register = (a)=>{
    return {
        type:"REGISTER",
        payload:a
    }
}

export {logging,register}