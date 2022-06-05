import { useState } from "react";
import DatePicker from "react-multi-date-picker";
import * as React from 'react';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DateTimePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { TextFields } from "@mui/icons-material";
import TimePicker from "react-multi-date-picker/plugins/time_picker";
import axios from "axios";
import "./poser_disponibilite.css";
import Swal from "sweetalert2";
axios.defaults.baseURL = "http://127.0.0.1:5000";
export default function Poser_Time(props){
    const [value,setValue]=useState(new Date());
    const [medecin_,setMedecin_]=useState({});
    const [medecin_all,setMedecin_all]=useState([]);
    React.useEffect(()=>{
        console.log('value');
    console.log(value);
    axios.get(`/medecins`).then((result)=>setMedecin_all(result.data));
    medecin_all.filter((res_)=>res_.id===parseInt(localStorage.getItem("id"))).map((result)=>setMedecin_(result));

    },[])
    // console.log(value.month.number);
    // console.log(value.day);
    // console.log(value.year);

    const handleCalender = (e)=>{
        e.preventDefault();
        const date_ = new Date();
        date_.setMonth()
        axios.post('/calenders',{date:value,MedecinId:medecin_.id}).then((response)=>console.log(response));

        var close = document.getElementsByClassName("closebtn");
        var i;
        
        for (i = 0; i < close.length; i++) {
          close[i].onclick = function(){
            var div = this.parentElement;
            div.style.opacity = "0";
            setTimeout(function(){ div.style.display = "none"; }, 600);
          }
        }
        Swal.fire({
          title: 'Info',
          text: 'cette date ajouté',
          icon: 'success',
          confirmButtonText: 'Fermer'
        })

    }






    return(
        <div className="card_picker">
          
            {value?.toDate?.().toString()}
            <div class="alert success">
              <span class="closebtn">&times;</span>      
                <h2 className="title_picker">Ajouter Votre Disponibilte</h2>
  
            </div>
            <DatePicker className="design_picker"
            
            containerStyle={{ //datepicker container style
          width: "180px",
          margin: "auto",
          
        }}
        style={{ //input style
          width: "250px",
          height: "66px",
          boxSizing: "border-box",
          paddingLeft:"35px"
        }}
        // calendarPosition={`${20}-${5}`}
        // fixMainPosition={5}
        // fixRelativePosition={5}
        // offsetY={40}
        // offsetX={10}
        // onClose={() => false}
            
            format="MM/DD/YYYY HH:mm:ss"
  plugins={[
    <TimePicker position="bottom" />
  ]} 
  
  value={value} onChange={setValue}  />

        {/* <div>{value.day}/{value.month.number}/{value.year}</div> */}

        <button className="button_picker" onClick={handleCalender}>save</button>

            {/* <LocalizationProvider dateAdapter={AdapterDateFns}>
  <DateTimePicker
    renderInput={(props) => <TextFields {...props} />}
    label="DateTimePicker"
    value={value}
    onChange={(newValue) => {
      setValue(newValue);
    }}
  />
</LocalizationProvider> */}







        </div>
    );
}

<script>

</script>