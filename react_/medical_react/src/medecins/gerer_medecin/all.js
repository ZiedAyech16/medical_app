import axios from "axios"

axios.defaults.baseURL = "http://127.0.0.1:5000/";
const getAllMedecins=()=>{
     axios.get("medecins").then((data)=>{return data.data}).catch((err)=>{return err});
}

export {getAllMedecins}
