import axios from "axios";
import { URL_API_BASE } from "../URL_API_BASE";

const URL_API = `${URL_API_BASE}/product`;

export const deleteProd = async (id) => {
    try {
        const response = await axios.delete(`${URL_API}/deleteProd/${id}`);
        return response.data;
    } catch (error) {
        throw new Error("Error en la conexión con el servidor")
    }
};

export const getAllProd = async () => {
    const token = sessionStorage.getItem("jwt");
    console.log(token)
    try {
        const response = await axios.get(`${URL_API}/getAllProducts`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        return response.data;
    } catch (error) {
        throw new Error("Error en la conexión con el servidor");
    }
}

export const addProd = async (product) => {
    try {
        const response = await axios.post(`${URL_API}/addProd`, product)
        return response.data;
    } catch (error) {
        throw new Error("Error en la conexión con el servidor")
    }
}