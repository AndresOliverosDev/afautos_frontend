import axios from "axios"
const URL_API = "http://localhost:8081";

export const getAllCat = () => {
    return axios.get(`${URL_API}/getAllCat`);
}