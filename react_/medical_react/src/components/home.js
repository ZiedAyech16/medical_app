import { Route, Routes  } from "react-router";
import { Link ,BrowserRouter} from "react-router-dom";
import App from "../App";
import Login from "../Login";
import AllMedecins from "../medecins/components/all_meds";
import Calender from "./calender";
import { CalenderHour } from "./calender_hours";

import "./home.css";

export default function Home(){
    return(
        <div className="row">
<BrowserRouter>
        <table className="col-sm-2">
            <tr className="item">
                <td>
                    <div>
                        <img src="/images/medecin1.jpg" width={40} height={40}></img>
                      <h6> <Link to="/pediatres">Pédiatre</Link></h6>
                    </div>
                </td>
                </tr>
                <tr  className="item">
                <td>
                    <div>
                        <img src="/images/medecin2.jpg" width={40} height={40}></img>
                        <h6>Psychothérapie</h6>
                    </div>
                </td>
    </tr><tr className="item">
            <td >
                    <div>
                        <img src="/images/medecin3.png" width={40} height={40}></img>
                        <h6><Link to="/dentiste">Dentiste</Link></h6>
                    </div>
                </td>
                </tr>
                <tr className="item">
                <td >
                    <div>
                        <img src="/images/medecin2.jpg" width={40} height={40}></img>
                        <h6>Enfance</h6>
                    </div>
                </td>

            </tr>

        </table>

<div className="col-sm-9">
        <Routes>

<Route path="/" element={<AllMedecins specialite="" />}  exact>
    </Route>

    <Route path="/pediatres" element={<AllMedecins specialite="pediatre" />}  exact>
    </Route>
    <Route path="/dentiste" element={<AllMedecins specialite="dentiste" />}  exact></Route>
    <Route path="/calender/:id" element={<Calender specialite="Calender" />}  exact></Route>
    <Route path="/hours/:day/:month/:year/:medecin_id" element={<CalenderHour />}></Route>

</Routes></div>
        
        </BrowserRouter>
        </div>
    );
}