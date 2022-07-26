import axios from "axios";

const DIPLOMSKI_API_BASE_URL= "http://localhost:8081/api/v1/diplomski";
class ZaposleniServis{

 getDiplomski(){
  return axios.get(DIPLOMSKI_API_BASE_URL);
 }
 

}

export default new ZaposleniServis()