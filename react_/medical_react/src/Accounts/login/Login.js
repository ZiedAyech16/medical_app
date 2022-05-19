import "./Login.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { Login_ } from "../../user/store/actions";
import RegisterAccount from "../register/RegisterAccount";
import { logging, register } from "../store_reg_log/actions";


axios.defaults.baseURL = "http://127.0.0.1:5000/";
export default function Login(){
    const dispatch=useDispatch();
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const state = useSelector(state=>state.auth);
    const etatlogin = useSelector(state=>state.etatlogin);
    const [users,setUsers] =  useState({});

    const [token,setToken]=useState('');

    const [change,setChange]=useState(true);

const handleChange = ()=>{
    dispatch(logging(false));
}

    console.log(state);

     function login(e){    

        e.preventDefault();

        axios.get("api/login",{
            data:{"email":email,"password":password}
        }).then((data)=>{
           // console.log(data.data);
           console.log("res====>"+data.email);
            setToken(data.data.token)
            axios.get("api/posts",{headers:{
                Authorization:`Bearer ${token}`
            }}).then((data)=>{
                console.log("res====>"+data.email);
                dispatch(Login_({email:email,token:token,password:password}));
                localStorage.setItem("token", token);

                localStorage.setItem("email",email);
                localStorage.setItem("password",password);
            }).catch(err=>console.log(err));

        });
        console.log(token);
        
        localStorage.setItem("token", token);

        localStorage.setItem("email",email);
        localStorage.setItem("password",password);
      
    }


    useEffect(()=>{
  //if(password.length>0){
            //const token="abc";
          //  localStorage.setItem("token", token);

            // localStorage.setItem("email",email);
            // localStorage.setItem("password",password);
        // }else{
        //     alert('wrong');
        // }
    },[]);

    return (<div style={url}>
        {change?<form className="login-container">
            <h3 className="login_page">Medical Login Page :</h3>
          <div >
              
                  <i className="fas fa-user"></i>
                  
                  <input type="email"  className="input_" placeholder="email :" value={email} onChange={e=>setEmail(e.target.value)}></input>
                  </div>
            <div>
            <i className="fas fa-lock"></i>
                <input type="password" className="input_" placeholder="Password :" value={password} onChange={e=>setPassword(e.target.value)}></input>
            </div>
            <div>
                <button className="btn" onClick={login}>Login</button>
                <button onClick={()=>setChange(false)} className="btn">Sign in</button>

            </div>
            
        </form>:<RegisterAccount />}





</div>
    );
}

const url = {
    backgroundImage: `url(${process.env.PUBLIC_URL+ "/images/image_med2.jpg"})`,
    width:"100%",
    height:"600px",
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    filter:'opacity(0.8px)'

}