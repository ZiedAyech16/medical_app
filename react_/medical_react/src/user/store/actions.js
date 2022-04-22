const Login_ = (user)=>{
    return{
        type:"LOGIN",
        email:user.email,
        token:user.token,
        password:user.password
    }
}

const Logout_ = ()=>{
    return{
        type:"LOGOUT",
        email:"",
        token:"",
        password:""
    }
}

export {Login_,Logout_};