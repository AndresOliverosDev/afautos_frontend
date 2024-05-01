import { axios } from "axios";

const URL_API = "http//:localhost:8081"

export const getAllCustomer = async () => {
    try {
        const response = await axios.get(`${URL_API}/getAllUser`)
    }
}