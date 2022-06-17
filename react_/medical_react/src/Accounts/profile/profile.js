import axios from "axios";
import { useEffect, useState } from "react"
import { useSelector } from "react-redux";
import "./profile.css";

export default function Profile(){
    const user_state = useSelector(state=>state.user);
    const [user,setUser]=useState({
        nom:'',
        prenom:'',
        email:'',
        age:'',
        username:'',
        password:'',
        image:''
    });

    const [users,setUsers]=useState([]);
    const [image,setImage]=useState('');
    const [nom,setNom]=useState('');
    const [prenom,setPrenom]=useState('');
    const [contact,setContact]=useState('');
    const [age,setAge]=useState('');
    const [medecinname,setMedecinName] = useState("");
    const [medecincontact, setMedecincontact] = useState("");
    const [createdAt,setCreatedAt]=useState('');

    console.log(user_state);
    console.log(user);


    // const reloadData = ()=>{
    //     if(medecinname.length>0){
    //          axios.get(`/secretaires/${localStorage.getItem('userId')}`).then((response)=>{
    //     setUsers(response.data);
    //     setImage(response.data.image);
    //     setNom(response.data.nom);
    //     setPrenom(response.data.prenom);
    //     setContact(response.data.contact);
    //     setAge(response.data.age);
    //     setCreatedAt(response.data.createdAt);
    //     setMedecinName(response.data.Medecin.nom+" "+response.data.Medecin.prenom);
    //     setMedecincontact(response.data.Medecin.email);
    //     setUser({...user,password:response.data.password});
    //     console.log(response.data);
    //     console.log(response.data.age);
    //   //  setUser({...user,age:response.data.age});

    //     })
    //     }
    // }

    // reloadData();
   
       useEffect(()=>{
            
        if(localStorage.getItem("role")==="secretaire"){
        axios.get(`/secretaires/${localStorage.getItem('userId')}`).then((response)=>{
            setUsers(response.data);
            setImage(response.data.image);
            setNom(response.data.nom);
            setPrenom(response.data.prenom);
            setContact(response.data.contact);
            setAge(response.data.age);
            setCreatedAt(response.data.createdAt);
            setMedecinName(response.data.Medecin.nom+" "+response.data.Medecin.prenom);
            setMedecincontact(response.data.Medecin.email);
            setUser({...user,password:response.data.password});
            console.log(response.data);
            console.log(response.data.age);
          //  setUser({...user,age:response.data.age});

            })
        
        }else if(localStorage.getItem("role")==="medecin"){
            axios.get(`/medecins/${localStorage.getItem('userId')}`).then((response)=>{
                setUsers(response.data);
                setImage(response.data.image);
                setNom(response.data.nom);
                setPrenom(response.data.prenom);
                setContact(response.data.contact);
                setAge(response.data.age);
                setCreatedAt(response.data.createdAt);
               // setMedecinName(response.data.Medecin.nom+" "+response.data.Medecin.prenom);
             //   setMedecincontact(response.data.Medecin.email);
               // setUser({...user,password:response.data.password});
                console.log(response.data);
                console.log(response.data.age);
              //  setUser({...user,age:response.data.age});
    
                })
            }else if(localStorage.getItem("role")==="patient"){
                axios.get(`/patients/${localStorage.getItem('userId')}`).then((response)=>{
                    setUsers(response.data);
                    setImage(response.data.image);
                    setNom(response.data.nom);
                    setPrenom(response.data.prenom);
                    setContact(response.data.contact);
                    setAge(response.data.age);
                    setCreatedAt(response.data.createdAt);
                   // setMedecinName(response.data.Medecin.nom+" "+response.data.Medecin.prenom);
                 //   setMedecincontact(response.data.Medecin.email);
                   // setUser({...user,password:response.data.password});
                    console.log(response.data);
                    console.log(response.data.age);
                  //  setUser({...user,age:response.data.age});
        
                    })
            }
        },[]); 
        console.log(users);
        // users.map((response)=>{
        //     setUser({...user,image:response.data.image,nom:response.data.nom,prenom:response.data.prenom});

        // });

    return(
    
        <>
            
    

            <div className="card_profile">

            <div className="left_card">
            {localStorage.getItem("role")==="patient"?  <img className="image_profile" src={`http://127.0.0.1:5000/patients/images/${image}`}   />:<></>}
            {localStorage.getItem("role")==="secretaire"?  <img className="image_profile" src={`http://127.0.0.1:5000/secretaires/images/${image}`}   />:<></>}
            {localStorage.getItem("role")==="medecin"?  <img className="image_profile" src={`http://127.0.0.1:5000/medecins/images/${image}`}   />:<></>}
                            <h1 className="title">{nom} {prenom}</h1>

                </div>

                <div className="right_card">

                <h2 className="title_item_profile" style={{float:"left",width:"80%"}}>{localStorage.getItem("role")} </h2>

                    <div className="item_profile">
                    <span className="text_title">@mail</span>
                                        <span className="text_content">{localStorage.getItem('email')}</span>
                    </div>
                    <div className="item_profile">
                                <span className="text_title">Contact :</span>
                                        <span className="text_content">{contact} </span>
                                </div>

                                <div className="item_profile">

                                    <span className="text_title">Age :</span>
                                    <span className="text_content">{age} </span>
                                </div>

                                {
                                    localStorage.getItem("role")==="secretaire"?
                                        <div>
                                            <h2 className="title_item_profile" style={{float:"left",width:"80%"}}>Travailler avec le Medecin </h2>
                                            <div className="item_profile">

                                                <span className="text_title">Nom et Prenom</span>
                                                <span className="text_content">{medecinname} </span>
                                            </div>

                                            <div className="item_profile">

                                                <span className="text_title">Contact :</span>
                                                <span className="text_content">{medecincontact} </span>
                                            </div>
                                        </div>
                                    :<></>
                                }

{/* 
                    <div className="item_profile">

                        <span style={{color:"rgb(72, 15, 0)",fontSize:"20px",letterSpaccing:"3px",float:"left",marginLeft:"10px"}}>Date de creation :</span>
                            <span style={{color:"rgb(72, 15, 0)",fontSize:"20px",letterSpaccing:"3px"}}>
                                
                                {createdAt.charAt(0)}
                                {createdAt.charAt(1)}
                                {createdAt.charAt(2)}
                                {createdAt.charAt(3)}
                                </span>/
                                <span style= {{color:"rgb(72, 15, 0)",fontSize:"20px",letterSpaccing:"3px"}}>
                                {createdAt.charAt(5)}
                                {createdAt.charAt(6)}
                                </span>/
                                <span style= {{color:"rgb(72, 15, 0)",fontSize:"20px",letterSpaccing:"3px"}}>

                                {createdAt.charAt(8)}
                                {createdAt.charAt(9)}
                                </span>

                    </div> */}
</div>

                           

                   

            </div>

        </>
    );
}