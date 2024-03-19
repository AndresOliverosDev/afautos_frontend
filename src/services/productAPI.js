import axios from "axios";

export const getAllProd = async () => {
    try {
        const response = await axios.post("http://localhost:8081/getAllProd");
        return response.data;
    } catch (error) {
        throw new Error("Error por ser medio atravezado :(")
    }
};