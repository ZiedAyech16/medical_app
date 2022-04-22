import { useParams } from "react-router";
import "./calender_hours.css";

export function CalenderHour(){
    const params = useParams();
    console.log(params);
    const hours = [6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,0,1,2,3,4,5];
    const munites = [0,30,59];

    return(
        <div>
            <h2>Date {params.day}/{params.month}/{params.year}</h2>

            <div className="munite">
            {munites.map((mun)=><span className="sub_munite">{mun}</span>)}
            </div>
            <table class="charts-css bar show-primary-axis">
 <th scope="row"> Label </th>


    
</table>
            <div className="items_h">
                
                {hours.map((hour)=><div className="item_h" width={50} height={80}><span style={{float:"left"}}>{hour}</span> <span style={{float:"right"}}>{hour+1}</span> <div className="duree" style={{width:`${55}px`}} > </div></div>)}
            </div>
        
         </div>
    );
}