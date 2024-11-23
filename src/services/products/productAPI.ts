import { ErrorResponse, Product, ProductCreate } from "../../types";
import apiClient from "../apiClient";
import { handleError } from "../handleError";

const URL_API = "/product";

export const deleteProd = async (id:number):Promise<string> => {
    try {
        const response = await apiClient.delete(`${URL_API}/deleteProductById/${id}`);
        return response.data;
    } catch (error) {
        const handledError = handleError(error as ErrorResponse)
        throw handledError;
    }
};

export const getAllProd = async (): Promise<Product[]> => {
    try {
        const response = await apiClient.get(`${URL_API}/getAllProducts`);
        return response.data;
    } catch (error) {
        const handledError = handleError(error as ErrorResponse)
        throw handledError;
    }
}

export const addProd = async (product: ProductCreate) => {
    try {
        const response = await apiClient.post(`${URL_API}/createProduct`, product)
        return response.data;
    } catch (error) {
        const handledError = handleError(error as ErrorResponse)
        throw handledError;
    }
}

export const updateProductAPI = async (product: ProductCreate, productId: number) => {
    try {
        const response = await apiClient.put(`${URL_API}/updateProduct/${productId}`, product)
        return response.data;
    } catch (error) {
        const handledError = handleError(error as ErrorResponse)
        throw handledError;
    }
}