import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import "./calender.css";

export default function Calender(){
    const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    const days1=["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31"];
    const days2=["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30"];
    const days3=["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29"];
    const days4=["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28"];
    const years = [1990,1991,1992,1993,1994,1995,1996,1997,1998,1999,2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025,2026,2027,2028,2029,2030,2031,2032,2033,2034,2035,2036,2037,2038,2039,2040,2041,2042,2043];
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
   console.log(years[13]%4)
    const [_months,setMonths]=useState(0);
    const [_years,setYears]=useState(0);
    const [_days,setDays]=useState();

    const params = useParams();
    const navigate = useNavigate();
    const onClickHandler=(day,month,year,id_med)=>navigate(`/hours/${day}/${month}/${year}/${params.id}`);


    useEffect(()=>{
        console.log("res"+_years%4);
        console.log(_years+" "+_months);
        if(_years%4==0){
            
        }
        if(_months==="February"){
            
        }
    },[]);
    

    return (
        <div className="container">
{"res"+_years%4}
<div className="calender_year">
            <strong>Year :{_years} </strong>
            <select onChange={(e)=>setYears(e.target.value)} value={_years}>
                {years.map((year)=><option key={year} value={year}>{year} </option>)}
            </select>
            <strong>Month :</strong>
            <select value={_months} onChange={(e)=>setMonths(e.target.value)}>
                {months.map((month_,index)=><option  value={index}>{month_} </option>)}
            </select>
      </div>
            <div className="tabs">
            {_years%4===0?calender[0].month1[_months].days.map((day)=><button className="btn btn-outline-primary  tab" onClick={()=>{onClickHandler(day,_months,_years)}}>{day} </button>):calender[0].month2[_months].days.map((day)=><button className="btn btn-outline-primary tab" onClick={()=>{onClickHandler(day)}}>{day} </button>)}
        </div>
        </div>
    );
}
