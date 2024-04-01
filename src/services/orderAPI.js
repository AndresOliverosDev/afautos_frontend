
import axios from "axios";

const URL_API = "http://localhost:8081";

export const getAllOrder = async () => {
    try {
        const response = await axios.post(`${URL_API}/getAllOrders`);
        return response.data;
    } catch(error) {
        throw new Error("Error por loquito")
    }
}