import axios from "axios";

const URL_API = "http://localhost:8081";

export const getAllProd = async () => {
    try {
        const response = await axios.post(`${URL_API}/getAllProd`);
        return response.data;
    } catch (error) {
        throw new Error("Error en la conexion con el servidor")
    }
};