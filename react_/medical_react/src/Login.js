import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { Login_ } from "./user/store/actions";


axios.defaults.baseURL = "http://127.0.0.1:5000/";
export default function Login(){
    const dispatch=useDispatch();
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const state = useSelector(state=>state);
    const [users,setUsers] =  useState({});

    const [token,setToken]=useState();

    console.log(state);
    function login(e){
        e.preventDefault();
        dispatch(Login_({email:email,token:token,password:password}));
        axios.get("api/login").then((data)=>{
            console.log(data.data);
            setToken(data.data.token)
            axios.get("api/posts",{headers:{
                Authorization:`Bearer ${token}`
            }}).then((data)=>console.log(data)).catch(err=>console.log(err));
    
        });
        console.log(token);
    
        if(password==="123"){
            const token="abc";
            localStorage.setItem("token",token);
            localStorage.setItem("email",email);
        }else{
            alert('wrong');
        }
    }

    return (<>
        <form className="m-5">
            <input type="email" className="form-control mb-2" placeholder="email :" value={email} onChange={e=>setEmail(e.target.value)}></input>
            <input type="password" className="form-control mb-2" placeholder="Password :" value={password} onChange={e=>setPassword(e.target.value)}></input>
            <button className="btn btn-primary" onClick={login}>Send</button>
        </form>
            <button onClick={login}>test</button>
</>
    );
}