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
    const [createdAt,setCreatedAt]=useState('');

    console.log(user_state);
    console.log(user);

       useEffect(()=>{
            
        axios.get(`/users/${localStorage.getItem('id')}`).then((response)=>{
            setUsers(response.data);
            setImage(response.data.image);
            setNom(response.data.nom);
            setPrenom(response.data.prenom);
            setContact(response.data.contact);
            setAge(response.data.age);
            setCreatedAt(response.data.createdAt);
            setUser({...user,password:response.data.password});
            console.log(response.data);
            console.log(response.data.age);
          //  setUser({...user,age:response.data.age});

            })
        },[]); 
        console.log(users);
        // users.map((response)=>{
        //     setUser({...user,image:response.data.image,nom:response.data.nom,prenom:response.data.prenom});

        // });

    return(
    
        <>
            
    

            <div className="card_profile">
                <div className="left_card">


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

<div className="item_profile">

    <span style={{color:"blueviolet",fontSize:"20px",letterSpaccing:"3px",float:"left",marginLeft:"10px"}}>Date de creation :</span>
        <span style={{color:"blue",fontSize:"20px",letterSpaccing:"3px"}}>
            
            {createdAt.charAt(0)}
            {createdAt.charAt(1)}
            {createdAt.charAt(2)}
            {createdAt.charAt(3)}
            </span>/
            <span style= {{color:"navy",fontSize:"20px",letterSpaccing:"3px"}}>
            {createdAt.charAt(5)}
            {createdAt.charAt(6)}
            </span>/
            <span style= {{color:"blue",fontSize:"20px",letterSpaccing:"3px"}}>

            {createdAt.charAt(8)}
            {createdAt.charAt(9)}
            </span>

</div>
</div>

                            <div className="right_card">
                            <img className="image_profile" src={`http://127.0.0.1:5000/users/images/${image}`}   />
                            <h1 className="title">{nom} {prenom}</h1>

                </div>

                   

            </div>

        </>
    );
}