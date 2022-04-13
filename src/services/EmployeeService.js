import axios from 'axios';

const BASE_URL = "http://localhost:8080/getdata/covid19coronafakevaccinationhoax";

class EmployeeService {

    getEmployees(){
        return axios.get(BASE_URL)
        .then((response)=>{
            const allData = response.data.BASE_URL;
        })
        .catch(error => console.error(`Error: ${error}`));
    }
}

export default new EmployeeService()