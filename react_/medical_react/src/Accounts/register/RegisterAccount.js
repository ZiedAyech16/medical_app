import { useDispatch, useSelector } from "react-redux";
import { logging } from "../store_reg_log/actions";
import "./registerAcount.css";
export default function RegisterAccount(){
    const etatlogin = useSelector(state=>state.etatlogin);
    const dispatch = useDispatch();

    console.log(etatlogin);

//console.log(localStorage.getItem("email"));

    const handleChange = ()=>{
        dispatch(logging(true));
    }
    return(
        <div className="container_" style={url}>
        <form className="container">
            <div><h1>Sign in :</h1></div>
            <div>
            <input type="text" placeholder="Nom :"></input>
            </div>
            <div>
            <input type="text" placeholder="Prenom :"></input>
            </div>
            <div>
            <input type="text" placeholder="Email :"></input>
            </div>
            <div>
            <input type="number" placeholder="Contact :"></input>
            </div>
            <div>
            <input type="text" placeholder="Username :"></input>
            </div>
            <div>
            <input type="text" placeholder="Password :"></input>
            </div>

            <div>
            <button className="btn1"> Sign In</button>
            <button className="btn2" onClick={handleChange}> Login</button>
            </div>
        </form>
        </div>
    );
}


const url = {
    backgroundImage: `url(${process.env.PUBLIC_URL+ "/images/image_med2.jpg"})`,
    width:"100%",
    height:"100%",
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'

}