import axios from "axios";

const URL_API = "http://localhost:8081";

export const deleteProd = async (id) => {
    try {
        const response = await axios.delete(`${URL_API}/deleteProd/${id}`);
        return response.data;
    } catch (error) {
        throw new Error("Error en la conexión con el servidor")
    }
};

export const getAllProd = async () => {
    try {
        const response = await axios.post(`${URL_API}/getAllProd`);
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