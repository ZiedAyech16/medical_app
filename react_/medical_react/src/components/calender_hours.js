import { useEffect, useState } from "react";
import { useParams } from "react-router";
import "./calender_hours.css";
import LoginInvite from "./demandeInvitation pourmedecin/formulaire_success";

export function CalenderHour(props){
    const params = useParams();
    console.log(params);
    const color1 = "darkgray";
    const color2 = "bisque";
    const color3 = "palevioletred";
    const hours = [8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,0,1,2,3,4,5,6,7];
    const munites = [0,30,59];
   // const disponibility = [true,true,false,true,false,false,true,true,false,true,false,false,false];
   //props.disponibilityp1
   const disponibilityp1 = [color1,color3,color3,color2,color2,color3,color3,color2,color3,color2,color2];
   const disponibilityp2 = [color3,color3,color2,color3,color2,color2,color3,color3,color2,color2,color2,color2];

   //props.modale
   const modal1 = [];
   const modal2 = [];
   disponibilityp1.map((data,index)=>{
    if(data===color3){
        modal1.push("modal");
    }else{
        modal1.push("");
    }
    // console.log(data);
    // console.log("hours = "+hours[index]);
})
//console.log(modal1);


disponibilityp2.map((data,index)=> {
    if(data===color3){
        modal2.push("modal");
    }else{
        modal2.push("");
    }
    // console.log(data);
    // console.log("hours2 = "+hours[index+11]);

})

//console.log(modal2);


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

   // console.log(params);
    return(
        <div>
            <h2 className="date_">Date {params.day<10?<>0</>:<></>}{params.day}/{params.day<10?<>0</>:<></>}{params.month}/{params.year} Selectionné</h2>


         
    


        


        <table className="table my_table"   >
            <tr>
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
      
             <tr>   {disponibilityp1.map((data,i)=><td ><button className="" data-toggle={modal1[i]} data-target="#exampleModalLong"  onClick={()=>remplirDemande(data,i)} style={{backgroundColor:data,width:"105%",height:"100px",border:"none"}}></button></td>)}</tr>


             <tr>
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
      
             <tr>   {disponibilityp2.map((data,i)=><td ><button className="" data-toggle={modal2[i]} data-target="#exampleModalLong" onClick={()=>remplirDemande(data,i+11)} style={{backgroundColor:data,width:"105%",height:"100px",border:"none"}}></button></td>)}</tr>

<tr></tr>
        </table>

        {condition_remplir?  
            <LoginInvite doctor_id={params.medecin_id} heure={heure_depart} parameter={params} />:<h2>Non Disponible</h2>}
         </div>
    );
}