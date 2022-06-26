import "./Login.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { Login_ } from "../../user/store/actions";
import RegisterAccount from "../register/RegisterAccount";
import { logging, register } from "../store_reg_log/actions";
import save_user_data_reducers from "../store_user_account/reducers";
import save_user_data_action from "../store_user_account/action";
import { Divider } from "@mui/material";
import CabinetItem from "./Cabinets_Item";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { useNavigate } from "react-router";
import Home_ from "../../homepage/routes/Home";


axios.defaults.baseURL = "http://127.0.0.1:5000/";
export default function Login(){
    const navigate=useNavigate();
    const dispatch=useDispatch();
    const userstate = useSelector(state=>state.user);
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [user_role_id,setUser_role_id] = useState("");
    const [password_for_compare,setPassword_for_compare]=useState({});
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

//        e.preventDefault();

        // axios.get("/users_role/login").then(user=>{
        //     console.log("login:",user.data.token);
            users_role.filter(re=>re.email===email).map(r=>{
                setUser_role_id(r.id);
                if(r.role==="medecin"){
                axios.get(`/medecins/${r.userId}`).then(res=>{
                    if(res.data.password===password){
                        console.log("user","medecine");
                        console.log("med password",res.data.password);

                        // axios.get(`/users_role/login_success/${user_role_id}`,{headers:{
                        //     Authorization:`Bearer ${user.data.token}`
                        // }}).then((data)=>{
                        //    console.log("data",data);
                        // })

                        // localStorage.setItem("token", user.data.token);
                        localStorage.setItem("id",r.id)
                        console.log("user = ",r);
                        localStorage.setItem("email",r.email);
                        localStorage.setItem("password",res.data.password);
                        localStorage.setItem("role",r.role);
                        localStorage.setItem("userId",r.userId);
                    }
                })}

                if(r.role==="secretaire"){
                    axios.get(`/secretaires/${r.userId}`).then(res=>{
                        if(res.data.password===password){
                            console.log("user","secretaire");
                            console.log("sect password",res.data.password);

                            // axios.get(`/users_role/login_success/${user_role_id}`,{headers:{
                            //     Authorization:`Bearer ${user.data.token}`
                            // }}).then((data)=>{
                            //    console.log("data",data);
                            // })

                            // localStorage.setItem("token", user.data.token);
                            localStorage.setItem("id",r.id)
                            console.log("user = ",r);
                            localStorage.setItem("email",r.email);
                        localStorage.setItem("password",res.data.password);
                            localStorage.setItem("role",r.role);
                            localStorage.setItem("userId",r.userId);
                        }
                    })}

                if(r.role==="patient"){
                     axios.get(`/patients/${r.userId}`).then(res=>{
                        if(res.data.password===password){
                             console.log("user","patient");
                             console.log("pat password",res.data.password);

                            //  axios.get(`/users_role/login_success/${user_role_id}`,{headers:{
                            //     Authorization:`Bearer ${user.data.token}`
                            // }}).then((data)=>{
                            //    console.log("data",data);
                            // })

                            // localStorage.setItem("token", user.data.token);
                            localStorage.setItem("id",r.id)
                            console.log("user = ",r);
                            localStorage.setItem("email",r.email);
                            localStorage.setItem("password",res.password);
                            localStorage.setItem("role",r.role);
                            localStorage.setItem("userId",r.userId);
                         }


                         
                    })}


                    
                if(r.role==="admin"){
                    axios.get(`/admins/${r.userId}`).then(res=>{
                       if(res.data.password===password){
                            console.log("user","admin");
                            console.log("pat password",res.data.password);

                        //     axios.get(`/users_role/login_success/${user_role_id}`,{headers:{
                        //        Authorization:`Bearer ${user.data.token}`
                        //    }}).then((data)=>{
                        //       console.log("data",data);
                        //    })

                         //  localStorage.setItem("token", user.data.token);
                           localStorage.setItem("id",r.id)
                           console.log("user = ",r);
                           localStorage.setItem("email",r.email);
                           localStorage.setItem("password",res.data.password);
                           localStorage.setItem("role",r.role);
                           localStorage.setItem("userId",r.userId);
                        }


                               
                   })}
                   
            });
            
 

            
      //  });
        navigate("/profile");

      //  users__.map((response)=>console.log(response));
        // users__.filter((res)=>res.email===email).map((response)=>{
            
        //     dispatch(save_user_data_action({email:response.email,nom:response.nom,prenom:response.prenom,age:response.age,username:response.username,password:response.password,id:response.id}))
        //     localStorage.setItem("id",response.id);
        // });

        // axios.get("api/login",{
        //     data:{"email":email,"password":password}
        // }).then((data)=>{
        //    // console.log(data.data);
        //    console.log("res====>"+data.email);
        //     setToken(data.data.token)
        //     axios.get("api/posts",{headers:{
        //         Authorization:`Bearer ${token}`
        //     }}).then((data)=>{
        //         console.log("res====>"+data.email);
        //         dispatch(Login_({email:email,token:token,password:password}));
        //         localStorage.setItem("token", token);
        //         localStorage.setItem("id",userstate.id)
        //         localStorage.setItem("email",email);
        //         localStorage.setItem("password",password);
        //     }).catch(err=>console.log(err));

        // });
       // console.log(token);
        
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
  
        // axios.get("/users").then((response)=>setAll_user(response.data));
        // axios.get("/users").then((response)=>console.log(response.data));
        // axios.get("/users").then((response)=>setUsers__(response.data));


    },[]);
//console.log(all_user);
//users_role.map(r=>console.log(r));




users_role.filter((res)=>res.email===email).map((response)=>{
    // axios.get("/users_role/login").then(user=>{
    //     console.log(user);
    // });

    axios.get(`/medecins/${response.userId}`).then(resp=>{
        if(resp.data.password===password){
            console.log("medecins ok");
        }
    })

    axios.get(`/secretaires/${response.userId}`).then(resp=>{
        if(resp.data.password===password){
            console.log("secretaires ok");
        }
    })

    axios.get(`/patients/${response.userId}`).then(resp=>{
        if(resp.data.password===password){
            console.log("patients ok");
        }
    })
    // localStorage.setItem("token", token);
    // localStorage.setItem("id",response.id)
    // console.log("user = ",response);
    // localStorage.setItem("email",response.email);
    // localStorage.setItem("password",response.password);
    // localStorage.setItem("role",response.role);
    // localStorage.setItem("userId",response.userId);
})


   // cabinets.map(r=>console.log(r))


    return (<div  >

{localStorage.getItem("application_state")==="homepage"?
            <Home_ />:<></>    
        
        }

{localStorage.getItem("application_state")==="login"?
    <div>
        <div className="container___"></div>
        {change?
            <div  className="login_container_">
                                                 <div>
                                <img className="image_login" src={`/images/digitalisation.png`} width={100} height={100}></img>
                            
                            </div>
                <div  className="login_container_item">



                    <form className="">
                        <div className="">

                                    <div className="">

                                        <h3 className="login_page__">Login</h3>
                                    </div>
                                    
                                    <div className="item_login">
                                    
                                        <i className="fas fa-user" style={{backgroundColor:"#fff"}}></i>
                                        
                                        <input type="email"  className="input___" placeholder="email :" value={email} onChange={e=>setEmail(e.target.value)}></input>
                                    </div>

                                    <div className="item_login">
                                        <i className="fas fa-lock" style={{backgroundColor:"#fff"}}></i>
                                        <input type="password" className="input___" placeholder="Password :" value={password} onChange={e=>setPassword(e.target.value)}></input>
                                    </div>
                    
                                    <div className="">
                                        <button className="btn__" onClick={login}>Login</button>

                                    </div>

                                    </div>
                                    
                        
                    </form>
            
        </div>

                <div className="login_container_item_cabinets">

 
        {/* {cabinets.map(r=><CabinetItem cabinets={r} />)} */}

                    {/* <div className="cabinet_item">
                        {cabinets.map(r=><CabinetItem cabinets={r} />)}
                    </div> */}

                </div>

        </div>:<RegisterAccount />}




</div>:<></>}
</div>
    );
}

