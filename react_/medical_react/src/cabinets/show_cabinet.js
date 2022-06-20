import { Carousel } from '@trendyol-js/react-carousel';
import axios from 'axios';
import { useEffect, useRef, useState } from "react";
import CabinetItem from './cabinet_item';


export default function ShowCabinet() {
    const [cabinets,setCabinets] = useState([]);

    useEffect(()=>{
        axios.get("/cabinets").then(r=>setCabinets(r.data));

    },[]);
  return (
    <div>
        		 <Carousel axis="horizontal" useKeyboardArrows={true}>
		 {cabinets.map(r=><CabinetItem cabinets={r} />)}
   </Carousel> 
    </div>
  )
}
 