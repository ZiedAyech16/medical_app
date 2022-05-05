import { Route, Routes  } from "react-router";
import { Link ,BrowserRouter} from "react-router-dom";
import RegisterAccount from "../Accounts/register/RegisterAccount";
import App from "../App";
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
                    <div className=" border-0">
                        <img src="/images/medecin1.jpg" width={40} height={40}></img>
                      <h6> <Link to="/pediatres" className=" text-dark border-0">Pédiatre</Link></h6>
                    </div>
                </td>
                </tr>
                <tr  className="item">
                <td>
                    <div className=" border-0">
                        <img src="/images/medecin2.jpg" width={40} height={40}></img>
                        <h6>Psychothérapie</h6>
                    </div>
                </td>
    </tr><tr className="item">
            <td >
                    <div className=" bg-gradient-warning border-0">
                        <img src="/images/medecin3.png" width={40} height={40}></img>
                        <h6><Link to="/dentiste" className=" bg-gradient-warning border-0">Dentiste</Link></h6>
                    </div>
                </td>
                </tr>
                <tr className="item">
                <td >
                    <div className=" border-0">
                        <img src="/images/medecin2.jpg" width={40} height={40}></img>
                        <h6>Gynecologue</h6>
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
        <Route path="/register"  element={<RegisterAccount />}></Route>
</Routes></div>
        
        </BrowserRouter>
        </div>
    );
}