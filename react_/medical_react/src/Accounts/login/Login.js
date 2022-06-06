import "./Login.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { Login_ } from "../../user/store/actions";
import RegisterAccount from "../register/RegisterAccount";
import { logging, register } from "../store_reg_log/actions";
import save_user_data_reducers from "../store_user_account/reducers";
import save_user_data_action from "../store_user_account/action";


axios.defaults.baseURL = "http://127.0.0.1:5000/";
export default function Login(){
    const dispatch=useDispatch();
    const userstate = useSelector(state=>state.user);
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const state = useSelector(state=>state.auth);
    const etatlogin = useSelector(state=>state.etatlogin);
    const [users,setUsers] =  useState({});

    const [token,setToken]=useState('');

    const [change,setChange]=useState(true);
    const [users__,setUsers__]=useState([]);

    console.log(userstate);

    const [all_user,setAll_user]=useState([]);


    const [users_role,setUsers_role]=useState([]);


const handleChange = ()=>{
    dispatch(logging(false));
}

    console.log(state);

     function login(e){    

        e.preventDefault();


        
      //  users__.map((response)=>console.log(response));
        users__.filter((res)=>res.email===email).map((response)=>{
            
            dispatch(save_user_data_action({email:response.email,nom:response.nom,prenom:response.prenom,age:response.age,username:response.username,password:response.password,id:response.id}))
            localStorage.setItem("id",response.id);
        });

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
                localStorage.setItem("id",userstate.id)
                localStorage.setItem("email",email);
                localStorage.setItem("password",password);
            }).catch(err=>console.log(err));

        });
        console.log(token);
        
        // all_user.filter((res)=>res.email===email).map((response)=>{
        //             localStorage.setItem("token", token);
        //             localStorage.setItem("id",response.id)
        //     console.log("user = ",response);
        // localStorage.setItem("email",response.email);
        // localStorage.setItem("password",response.password);
        // })

       // localStorage.setItem("id",userstate.user.id)

      
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

        axios.get("/users_role").then(r=>setUsers_role(r.data));
  
        axios.get("/users").then((response)=>setAll_user(response.data));
        axios.get("/users").then((response)=>console.log(response.data));
        axios.get("/users").then((response)=>setUsers__(response.data));


    },[]);
//console.log(all_user);
users_role.map(r=>console.log(r));

users_role.filter((res)=>res.email===email).map((response)=>{
    localStorage.setItem("token", token);
    localStorage.setItem("id",response.id)
    console.log("user = ",response);
    localStorage.setItem("email",response.email);
    localStorage.setItem("password",response.password);
    localStorage.setItem("role",response.role);
    localStorage.setItem("userId",response.userId);
})

    return (<div >
        <div className="container___"></div>
        <div  style={url} ></div>
        {change?<form className="login-container">
            <div className="menu_login">
                        <div className="item_login">

                            <h3 className="login_page__">Gestion Medical Login Page</h3>
                        </div>
                        
                        <div className="item_login">
                        
                            <i className="fas fa-user"></i>
                            
                            <input type="email"  className="input__" placeholder="email :" value={email} onChange={e=>setEmail(e.target.value)}></input>
                        </div>

                        <div className="item_login">
                            <i className="fas fa-lock"></i>
                            <input type="password" className="input__" placeholder="Password :" value={password} onChange={e=>setPassword(e.target.value)}></input>
                        </div>
         
                        <div className="item_login">
                            <button className="btn__" onClick={login}>Login</button>
                            {/* <button onClick={()=>setChange(false)} className="btn__">Sign in</button> */}

                        </div>

                        </div>
            
        </form>:<RegisterAccount />}





</div>
    );
}

const url = {
    backgroundImage: `url(${process.env.PUBLIC_URL+ "/images/background_.jpg"})`,
    width:"100%",
    height:"140%",
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    position:"fixed",
    zIndex:"-1"


}