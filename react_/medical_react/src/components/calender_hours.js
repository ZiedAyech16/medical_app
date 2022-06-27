import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import "./calender_hours.css";
import LoginInvite from "./demandeInvitation pourmedecin/formulaire_success";

axios.defaults.baseURL = "http://127.0.0.1:5000";
export function CalenderHour(props){
    const params = useParams();
    const [docteur,setDocteur]=useState({});
   // console.log(params);
    const color1 = "#ffffff";
    const color2 = "lightskyblue";
    const color3 = "#24a750";
    const color4 = "#a72c16";

    
    const hours = [8,9,10,11,12,13,14,15,16,17,18];
//    const hours = [8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,0,1,2,3,4,5,6,7];
    const munites = [0,30,59];
   // const disponibility = [true,true,false,true,false,false,true,true,false,true,false,false,false];
   //props.disponibilityp1
   var disponibilityp1 = [color1,color1,color1,color1,color1,color1,color1,color1,color1,color1,color1];
   const disponibilityp2 = [color1,color1,color1,color1,color1,color1,color1,color1,color1,color1,color1,color1,color1];

   const [disponibilityp1_,setdisponibilityp1_] = useState(disponibilityp1);
   const [disponibilityp2_,setdisponibilityp2_] = useState(disponibilityp2);
    const [medecins,setAllMedecins]=useState([]);

   //props.modale
   const modal1 = [];
   const modal2 = [];
   disponibilityp1_.map((data,index)=>{
    if(data===color3){
        modal1.push("modal");
    }else{
        modal1.push("");
    }
    // console.log(data);
    // console.log("hours = "+hours[index]);
})

disponibilityp2_.map((data,index)=>{
    if(data===color3){
        modal2.push("modal");
    }else{
        modal2.push("");
    }
    // console.log(data);
    // console.log("hours = "+hours[index]);
})
//console.log(modal1);


const state__ = [...disponibilityp1_];
const state__1 = [...disponibilityp2_];


    console.log(params);


    const [rdvs, setRdvs] = useState([]);

    
useEffect(()=>{
    axios.get("/calenders").then((result)=>setAllMedecins(result.data));
    axios.get("/rdvs").then(r=>setRdvs(r.data));
//medecins.filter((d)=>d.MedecinId ===parseInt(params.medecin_id)).map((e)=>console.log("opp",e));

    medecins.filter((d)=>d.MedecinId ===parseInt(params.medecin_id)).map((res)=>{

        if(parseInt(res.date[0]+res.date[1]+res.date[2]+res.date[3])===parseInt(params.year)&&parseInt(res.date[5]+res.date[6])===parseInt(params.month)&&parseInt(res.date[8]+res.date[9])===parseInt(params.day)){
           // console.log("date ajourd'hui");
        
        if(parseInt(res.date[11]+res.date[12])===8){
            state__[0]=color3;
        }
    
        if(parseInt(res.date[11]+res.date[12])===9){
            state__[1]=color3;
        }
    
        if(parseInt(res.date[11]+res.date[12])===10){
            state__[2]=color3;
        }
    
        if(parseInt(res.date[11]+res.date[12])===11){
            state__[3]=color3;
        }
    
        if(parseInt(res.date[11]+res.date[12])===12){
            state__[4]=color3;
        }
    
        if(parseInt(res.date[11]+res.date[12])===13){
            state__[5]=color3;
        }
    
        if(parseInt(res.date[11]+res.date[12])===14){
            state__[6]=color3;
        }
    
        if(parseInt(res.date[11]+res.date[12])===15){
            state__[7]=color3;
        }
    
        if(parseInt(res.date[11]+res.date[12])===16){
            state__[8]=color3;
        }
    
        if(parseInt(res.date[11]+res.date[12])===17){
            state__[9]=color3;
        }
    
        if(parseInt(res.date[11]+res.date[12])===18){
            state__[10]=color3;
        }
    //////////////////
        if(parseInt(res.date[11]+res.date[12])===19){
            state__1[0]=color3;
        }
    
        if(parseInt(res.date[11]+res.date[12])===20){
            state__1[1]=color3;
        }
    
        if(parseInt(res.date[11]+res.date[12])===21){
            state__1[2]=color3;
        }
    
        if(parseInt(res.date[11]+res.date[12])===22){
            state__1[3]=color3;
        }
    
        if(parseInt(res.date[11]+res.date[12])===23){
            state__1[4]=color3;
        }
    
    
    
    
        if(parseInt(res.date[11]+res.date[12])===0){
            state__1[5]=color3;
        }
    
        if(parseInt(res.date[11]+res.date[12])===1){
            state__1[6]=color3;
        }
    
    
        if(parseInt(res.date[11]+res.date[12])===2){
            state__1[7]=color3;
        }
    
        if(parseInt(res.date[11]+res.date[12])===3){
            state__1[8]=color3;
        }
    
        if(parseInt(res.date[11]+res.date[12])===4){
            state__1[9]=color3;
        }
    
    
        if(parseInt(res.date[11]+res.date[12])===5){
            state__1[10]=color3;
        }
    
        if(parseInt(res.date[11]+res.date[12])===6){
            state__1[11]=color3;
        }
    
    }
        setdisponibilityp1_(state__);
        setdisponibilityp2_(state__1);
    
    });


    axios.get(`/medecins/${params.medecin_id}`).then(r=>setDocteur(r.data))


},[])

console.log("idmed",params.medecin_id)
const reload = ()=>{

    medecins.filter((d)=>d.MedecinId ===parseInt(params.medecin_id)).map((res)=>{
     //   console.log("yea__r",parseInt(res.date[0]+res.date[1]+res.date[2]+res.date[3])===parseInt(params.year));
      //  console.log("yea__r",parseInt(res.date[0]+res.date[1]+res.date[2]+res.date[3])+" "+parseInt(params.year));
      console.log("month__",res.date[5]+res.date[6]);
      console.log("day__",res.date);
        if(parseInt(res.date[0]+res.date[1]+res.date[2]+res.date[3])===parseInt(params.year)&&parseInt(res.date[5]+res.date[6])===parseInt(params.month)&&parseInt(res.date[8]+res.date[9])===parseInt(params.day)){
      //      if(parseInt(res.date[0]+res.date[1]+res.date[2]+res.date[3])===parseInt(params.year)&&parseInt(res.date[5]+res.date[6])===parseInt(params.month)&&parseInt(res.date[8]+res.date[9])===parseInt(params.day)){
                console.log("date ajourd'hui");
        
        if(parseInt(res.date[11]+res.date[12])===8){
            state__[0]=color3;
        }
    
        if(parseInt(res.date[11]+res.date[12])===9){
            state__[1]=color3;
        }
    
        if(parseInt(res.date[11]+res.date[12])===10){
            state__[2]=color3;
        }
    
        if(parseInt(res.date[11]+res.date[12])===11){
            state__[3]=color3;
        }
    
        if(parseInt(res.date[11]+res.date[12])===12){
            state__[4]=color3;
        }
    
        if(parseInt(res.date[11]+res.date[12])===13){
            state__[5]=color3;
        }
    
        if(parseInt(res.date[11]+res.date[12])===14){
            state__[6]=color3;
        }
    
        if(parseInt(res.date[11]+res.date[12])===15){
            state__[7]=color3;
        }
    
        if(parseInt(res.date[11]+res.date[12])===16){
            state__[8]=color3;
        }
    
        if(parseInt(res.date[11]+res.date[12])===17){
            state__[9]=color3;
        }
    
        if(parseInt(res.date[11]+res.date[12])===18){
            state__[10]=color3;
        }
    //////////////////
        if(parseInt(res.date[11]+res.date[12])===19){
            state__1[0]=color3;
        }
    
        if(parseInt(res.date[11]+res.date[12])===20){
            state__1[1]=color3;
        }
    
        if(parseInt(res.date[11]+res.date[12])===21){
            state__1[2]=color3;
        }
    
        if(parseInt(res.date[11]+res.date[12])===22){
            state__1[3]=color3;
        }
    
        if(parseInt(res.date[11]+res.date[12])===23){
            state__1[4]=color3;
        }
    
    
    
    
        if(parseInt(res.date[11]+res.date[12])===0){
            state__1[5]=color3;
        }
    
        if(parseInt(res.date[11]+res.date[12])===1){
            state__1[6]=color3;
        }
    
    
        if(parseInt(res.date[11]+res.date[12])===2){
            state__1[7]=color3;
        }
    
        if(parseInt(res.date[11]+res.date[12])===3){
            state__1[8]=color3;
        }
    
        if(parseInt(res.date[11]+res.date[12])===4){
            state__1[9]=color3;
        }
    
    
        if(parseInt(res.date[11]+res.date[12])===5){
            state__1[10]=color3;
        }
    
        if(parseInt(res.date[11]+res.date[12])===6){
            state__1[11]=color3;
        }
        }
        setdisponibilityp1_(state__);
        setdisponibilityp2_(state__1);
    
        rdvs.filter(r=> parseInt(res.date[0]+res.date[1]+res.date[2]+res.date[3])===parseInt(r.year)&&parseInt(res.date[5]+res.date[6])===parseInt(r.month)&&parseInt(res.date[8]+res.date[9])===parseInt(r.jour)&&parseInt(res.date[11]+res.date[12])===parseInt(r.hour)&&r.MedecinId===parseInt(params.medecin_id)).map(re=>{
            console.log("ok","ok");
            console.log("result", parseInt(res.date[0]+res.date[1]+res.date[2]+res.date[3])===parseInt(re.year)&&parseInt(res.date[5]+res.date[6])===parseInt(re.month)&&parseInt(res.date[8]+res.date[9])===parseInt(re.jour)&&parseInt(res.date[11]+res.date[12])===parseInt(re.hour));
            if(parseInt(res.date[11]+res.date[12])===8&&parseInt(res.date[8]+res.date[9])===parseInt(re.jour)&&parseInt(res.date[11]+res.date[12])===parseInt(re.hour)){
                state__[0]=color4;
            }
        
            if(parseInt(res.date[11]+res.date[12])===9&&parseInt(res.date[8]+res.date[9])===parseInt(re.jour)&&parseInt(res.date[11]+res.date[12])===parseInt(re.hour)){
                state__[1]=color4;
            }
        
            if(parseInt(res.date[11]+res.date[12])===10&&parseInt(res.date[8]+res.date[9])===parseInt(re.jour)&&parseInt(res.date[11]+res.date[12])===parseInt(re.hour)){
                state__[2]=color4;
            }
        
            if(parseInt(res.date[11]+res.date[12])===11&&parseInt(res.date[11]+res.date[12])===parseInt(re.hour)){
                state__[3]=color4;
            }
        
            if(parseInt(res.date[11]+res.date[12])===12&&parseInt(res.date[11]+res.date[12])===parseInt(re.hour)){
                state__[4]=color4;
            }
        
            if(parseInt(res.date[11]+res.date[12])===13&&parseInt(res.date[11]+res.date[12])===parseInt(re.hour)){
                state__[5]=color4;
            }
        
            if(parseInt(res.date[11]+res.date[12])===14&&parseInt(res.date[11]+res.date[12])===parseInt(re.hour)){
                state__[6]=color4;
            }
        
            if(parseInt(res.date[11]+res.date[12])===15&&parseInt(res.date[11]+res.date[12])===parseInt(re.hour)){
                state__[7]=color4;
            }
        
            if(parseInt(res.date[11]+res.date[12])===16&&parseInt(res.date[11]+res.date[12])===parseInt(re.hour)){
                state__[8]=color4;
            }
        
            if(parseInt(res.date[11]+res.date[12])===17&&parseInt(res.date[11]+res.date[12])===parseInt(re.hour)){
                state__[9]=color4;
            }
        
            if(parseInt(res.date[11]+res.date[12])===18&&parseInt(res.date[11]+res.date[12])===parseInt(re.hour)){
                state__[10]=color4;
            }
        //////////////////
            if(parseInt(res.date[11]+res.date[12])===19){
                state__1[0]=color2;
            }
        
            if(parseInt(res.date[11]+res.date[12])===20){
                state__1[1]=color2;
            }
        
            if(parseInt(res.date[11]+res.date[12])===21){
                state__1[2]=color2;
            }
        
            if(parseInt(res.date[11]+res.date[12])===22){
                state__1[3]=color2;
            }
        
            if(parseInt(res.date[11]+res.date[12])===23){
                state__1[4]=color2;
            }
        
        
        
        
            if(parseInt(res.date[11]+res.date[12])===0){
                state__1[5]=color2;
            }
        
            if(parseInt(res.date[11]+res.date[12])===1){
                state__1[6]=color2;
            }
        
        
            if(parseInt(res.date[11]+res.date[12])===2){
                state__1[7]=color2;
            }
        
            if(parseInt(res.date[11]+res.date[12])===3){
                state__1[8]=color2;
            }
        
            if(parseInt(res.date[11]+res.date[12])===4){
                state__1[9]=color2;
            }
        
        
            if(parseInt(res.date[11]+res.date[12])===5){
                state__1[10]=color2;
            }
        
            if(parseInt(res.date[11]+res.date[12])===6){
                state__1[11]=color2;
                
            }
            
            setdisponibilityp1_(state__);
            setdisponibilityp2_(state__1);
        })

    });




    reload();

    setdisponibilityp1_(state__);
setdisponibilityp2_(state__1);
console.log(disponibilityp1_);
console.log(disponibilityp2_);
} 

//console.log(modal2);

//console.log(disponibilityp1_);
const [heure_depart,setHeure_depart] = useState(0);

    const [condition_remplir,setCondition_remplir]=useState(false);
    function remplirDemande(value,index){
        if(value===color3){
            setCondition_remplir(true);
            // if(index>=0&&index<11){
            //     index=index+7;
            //   }
         setHeure_depart(hours[index]);
        }
        if(value===color2){
            setCondition_remplir(false);
              //          console.log(hours[index]);

        }
       // console.log(hours[index]);

    }

    console.log(docteur)
   // console.log(params);
    return(
        <div className="container_calender_hour">
            <div>
             <div>
                <div className="detail_docteur">
                    <h4>Monsieur/Madame: {docteur.nom} {docteur.prenom} </h4>
                    <h4>Specialite: {docteur.specialite} </h4>
                    <h4 className="">Date {parseInt(params.day)<10?<>0</>:<></>}{params.day}/{params.day<10?<>0</>:<></>}{params.month}/{params.year}</h4>
                    <h4> <button className="refresh_hours" onClick={reload}>Pour Obtenir Les Infos</button></h4>

                </div>     
            </div>   


         
    


        


        <table className="table my_table"   >
            <tr className="line_">
            <td ><span className="time">{hours[0]}</span></td>
            <td ><span className="time">{hours[1]}</span></td>
            <td ><span className="time">{hours[2]}</span></td>
            <td ><span className="time">{hours[3]}</span></td>
            <td ><span className="time">{hours[4]}</span></td>
            <td ><span className="time">{hours[5]}</span></td>
            <td ><span className="time">{hours[6]}</span></td>
            <td ><span className="time">{hours[7]}</span></td>
            <td ><span className="time">{hours[8]}</span></td>
            <td ><span className="time">{hours[9]}</span></td>
            <td ><span className="time">{hours[10]}</span></td>

            </tr>
      
             <tr>   {disponibilityp1_.map((data,i)=><td><button className="" data-toggle={modal1[i]} data-target="#exampleModalLong"  onClick={()=>remplirDemande(data,i)} style={{backgroundColor:data,width:"105%",height:"100px",border:"none"}}></button></td>)}</tr>

{/* 
             <tr className="line_">
             <td ><span className="time">{hours[11]}</span></td>
            <td ><span className="time">{hours[12]}</span></td>
            <td ><span className="time">{hours[13]}</span></td>
            <td ><span className="time">{hours[14]}</span></td>
            <td ><span className="time">{hours[15]}</span></td>
            <td ><span className="time">{hours[16]}</span></td>
            <td ><span className="time">{hours[17]}</span></td>
            <td ><span className="time">{hours[18]}</span></td>
            <td ><span className="time">{hours[19]}</span></td>
            <td ><span className="time">{hours[20]}</span></td>
            <td ><span className="time">{hours[21]}</span></td>
            <td ><span className="time">{hours[22]}</span></td>
            <td ><span className="time">{hours[23]}</span></td>

            </tr>
      
             <tr>   {disponibilityp2_.map((data,i)=><td ><button className="" data-toggle={modal2[i]}  data-target=".bd-example-modal-xl" onClick={()=>remplirDemande(data,i+11)} style={{backgroundColor:data,width:"105%",height:"50px",border:"none"}}></button></td>)}</tr> */}

<tr></tr>
        </table>

        {condition_remplir?  
            // <LoginInvite doctor_id={params.medecin_id} heure={heure_depart} parameter={params} />:<h2>Non Disponible</h2>}
            <LoginInvite doctor_id={params.medecin_id} heure={heure_depart} parameter={params} />:<h2></h2>}
         </div>

         </div>
    );
}