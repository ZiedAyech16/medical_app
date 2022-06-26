import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import "./calender.css";

export default function Calender(){
   // const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    const months = ["1","2","3","4","5","6","7","8","9","10","11","12"];
    const days1=["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31"];
    const days2=["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30"];
    const days3=["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29"];
    const days4=["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28"];
    const years = ["","2022","2023","2024","2025","2026","2027","2028","2029","2030","2031","2032","2033","2034","2035","2036","2037","2038","2039","2040","2041","2042","2043"];
    const hours = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23];
    const munites = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59];
    const secondes = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59];

    const calender = [
        {
            month1:[
                { name:"January",days:days1},
                { name:"February",days:days3},
                { name:"March",days:days2},
                { name:"April",days:days2},
                { name:"May",days:days1},
                { name:"June",days:days2},
                { name:"July",days:days1},
                { name:"August",days:days1},
                { name:"September",days:days2},
                { name:"October",days:days1},
                { name:"November",days:days2},
                { name:"December",days:days1},
        ],
        month2:[
            { name:"January",days:days1},
            { name:"February",days:days4},
            { name:"March",days:days2},
            { name:"April",days:days2},
            { name:"May",days:days1},
            { name:"June",days:days2},
            { name:"July",days:days1},
            { name:"August",days:days1},
            { name:"September",days:days2},
            { name:"October",days:days1},
            { name:"November",days:days2},
            { name:"December",days:days1},
    ]
        }
    ]

   // console.log(calender[0].month1);
   //console.log(years[13]%4)
    const [_months,setMonths]=useState(0);
    const [_years,setYears]=useState(0);
    const [_days,setDays]=useState();

    const params = useParams();
    const navigate = useNavigate();
    const onClickHandler=(day,month,year,id_med)=>navigate(`/hours/${day}/${month}/${year}/${params.id}`);


    const [medecins, setMedecins] = useState({});
    const [calender_medecin, setCalender_medecin] = useState([]);
    const [count__, setCount__] = useState("");

    useEffect(()=>{
        console.log("res"+_years%4);
        console.log(_years+"----- "+_months);
        console.log("months "+_months);
        if(_years%4==0){
            
        }
        if(_months==="February"){
            
        }

        axios.get(`/medecins/${params.id}`).then(r=>setMedecins(r.data));
        axios.get("/calenders").then(r=>setCalender_medecin(r.data));

    },[]);
    



    const find_=(day)=>{
     //   calender_medecin.map(r=>console.log(r.MedecinId+" a"+params.id+" b"+new Date(r.date).toISOString().substring(0,4)+"c "+_years+" d"+new Date(r.date).toISOString().substring(5,7)+" e"+_months+" f"+new Date(r.date).toISOString().substring(8,10)+" g"+day));
//        calender_medecin.map(r=>console.log("id",r.MedecinId===parseInt(params.id)));
        //calender_medecin.map(r=>console.log("year",parseInt(new Date(r.date).toISOString().substring(0,4))===parseInt(_years)));
                //calender_medecin.map(r=>console.log("month_",parseInt(new Date(r.date).toISOString().substring(5,7))===parseInt(parseInt(_months)+1)));
        //        calender_medecin.map(r=>console.log("day_",r.MedecinId===parseInt(params.id)&&parseInt(new Date(r.date).toISOString().substring(0,4))===parseInt(_years)&&parseInt(new Date(r.date).toISOString().substring(5,7))===parseInt(parseInt(_months)+1)&&parseInt(new Date(r.date).toISOString().substring(8,10))===parseInt(day)));

        //calender_medecin.map(r=>console.log(">",r.MedecinId===parseInt(params.id)+","+parseInt(new Date(r.date).toISOString().substring(0,4))===_years+","+parseInt(new Date(r.date).toISOString().substring(5,7))===(_months+1)+","+parseInt(new Date(r.date).toISOString().substring(8,10))===day));

      setTimeout(() => {

                calender_medecin.filter(r=>r.MedecinId===parseInt(params.id)&&parseInt(new Date(r.date).toISOString().substring(0,4))===parseInt(_years)&&parseInt(new Date(r.date).toISOString().substring(5,7))===parseInt(parseInt(_months)+1)&&parseInt(new Date(r.date).toISOString().substring(8,10))===parseInt(day)).map(res=> setCount__(new Date(res.date).toISOString().substring(8,10)));
                console.log("rr",count__)
                

      }, 2000);
      return count__;
      

    }


  


    return (
        <div>
    <h6 className="calender_choisir_date_titre">Choisir une Date :</h6>
    <div  className="container_calender">


            <div className="tabs_calender">
            {_years%4===0?calender[0].month1[_months].days.map((day)=><button className="btn_calender" style={parseInt(find_(day))===parseInt(day)?{backgroundColor:"green"}:{backgroundColor:"#bbb"}} onClick={()=>{onClickHandler(day,parseInt(_months)+1,_years)}}>{day} </button>):calender[0].month2[_months].days.map((day)=><button className="btn_calender" style={parseInt(find_(day))===parseInt(day)?{backgroundColor:"green"}:{backgroundColor:"#bbb"}}  onClick={()=>{onClickHandler(day,parseInt(_months)+1,_years)}}>{day} </button>)}
        </div>

        <div className="calender_choisir_date_">

            <strong className="calender_choisir_date_text">Year  </strong>
            <select className="calender_year" onChange={(e)=>setYears(e.target.value)} value={_years}>
                {years.map((year)=><option key={year} value={year}>{year} </option>)}
            </select>
            <strong className="calender_choisir_date_text">Month </strong>
            <select className="calender_year" value={_months} onChange={(e)=>setMonths(e.target.value)}>
                {months.map((month_,index)=><option key={month_} value={index}>{month_} </option>)}
            </select>
      </div>

    </div>
        </div>
    );
}
