import apiClient from "../apiClient";

const URL_API = "/category";

export const getAllCategories = async () => {
    try {
        const response = await apiClient.get(`${URL_API}/getAllCategories`);
        return response.data;
    } catch (error) {
        throw {
            code: error.response?.status || 500,
            message: error.response?.data?.message || "Error desconocido"
        };
    }
}

export const createCategoryAPI = async (category) => {
    try {
        const response = await apiClient.post(`${URL_API}/createCategory`, category);
        return response.data;
    } catch (error) {
        throw {
            code: error.response?.status || 500,
            message: error.response?.message || "Error desconocido"
        }
    }
}