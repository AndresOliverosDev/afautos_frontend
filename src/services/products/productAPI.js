import apiClient from "../apiClient";
import { handleError } from "../handleError";

const URL_API = "/product";

export const deleteProd = async (id) => {
    try {
        const response = await apiClient.delete(`${URL_API}/deleteProductById/${id}`);
        return response.data;
    } catch (error) {
        throw handleError(error)
    }
};

export const getAllProd = async () => {
    try {
        const response = await apiClient.get(`${URL_API}/getAllProducts`);
        return response.data;
    } catch (error) {
        throw handleError(error);
    }
}

export const addProd = async (product) => {
    try {
        const response = await apiClient.post(`${URL_API}/createProduct`, product)
        return response.data;
    } catch (error) {
        console.log(error)
        throw error;
    }
}