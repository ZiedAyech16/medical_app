import print from 'print-js'
import printJS from "print-js";
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import axios from "axios";

axios.defaults.baseURL = "http://127.0.0.1:5000";

export default function OrdonnancePrint(){
    const [searchparams] = useSearchParams();

    const [medecin, setMedecin] = useState({});
    const [patient, setpatient] = useState({});
    useEffect(()=>{
        if(localStorage.getItem("role")==="medecin"){
        axios.get(`/medecins/${localStorage.getItem("userId")}`).then(r=>setMedecin(r.data));
    }

    if(localStorage.getItem("role")==="patient"){
        axios.get(`/medecins/${searchparams.get("MedecinId")}`).then(r=>setMedecin(r.data));
    }
        axios.get(`/patients/${searchparams.get("PatientId")}`).then(r=>setpatient(r.data));
    },[]);

    const print = (e)=>{
        e.preventDefault();
        //printJS('printJS-form', 'html');
        printJS({ printable: 'printJS-form',gridHeaderStyle:
        'font-weight: bold;font-size:8pt;', type: 'html',font_size :"14pt",maxWidth
        :"1000" ,header: 'Ministère de la santé publique - وزارة الصحة العامة' ,
        scanStyles:true,
        honorColor :true,headerStyle:'font-size:18pt;letter-spacing:1pt;margin-bottom:15pt'
       // ,css:'https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css'
    });
    }

    const date= new Date(); 

    return(
        <div>
                        <form method="post" action="#" id="printJS-form">
                           <hr />


                           

                            <div  className='ordonnance_item_imprime'>

                            <table width="600">
                                <tr>
                                    <td  >
                                        <span className='input_text_printer' value={'Medecin :'}>{'Medecin :'}</span>
                                    </td>
                                    <td  ><span className='input_text_printer' value={medecin.nom+' '+medecin.prenom}>{medecin.nom+' '+medecin.prenom}</span></td>
                                </tr>
                                <tr>
                                    <td><span className='input_text_printer' value={'Patient: '} >{'Patient: '}</span></td>
                                    <td><span className='input_text_printer' value={patient.nom +' '+patient.prenom} >{patient.nom +' '+patient.prenom}</span></td>
                                </tr>


                                <tr>
                                    <td><span className='input_text_printer' value={'Apci: '} >{'Apci: '}</span></td>

                                    <td>
                                        {
                                            searchparams.get("apci")==="0"?<span className='input_text_printer' value={'Oui'} >{'Oui'}</span>:<span className='input_text_printer' value={'Non'} >{'Non'}</span>
                                        }
                                        
                                        </td>
                                </tr>

                                <tr>
                                    <td><span className='input_text_printer' value={'Medicament: '} >{'Medicament: '} </span></td>
                                    <td><span className='input_text_printer' value={searchparams.get("medicament")} >{searchparams.get("medicament")}</span> </td>
                                </tr>

                                <tr>
                                    <td><span  className='input_text_printer' value={'Date'}>{'Date'}</span></td>
                                    <td><span className='input_text_printer' value={date.toISOString().substring(0,10)} />{date.toISOString().substring(0,10)}</td>
                                </tr>
                            </table>
                            </div>
        
 </form>

 {/* <button type="button"  onClick={print}>
    Print Form
 </button> */}
            <button type="button" className='button_ordonnance__printer color_imprimer _icon btn-design' onClick={print}>
            <i class="fa fa-print" aria-hidden="true" style={{fontSize:'36px',color:"black"}}></i>
     </button>
        </div>
    );

}

const stylecss = {
    color:"red"
}