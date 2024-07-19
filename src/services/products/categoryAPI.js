import apiClient from "../apiClient";

const URL_API = "category";

export const getAllCategories = async () => {
    try {
        const response = await apiClient.get(`${URL_API}/getAllCategories`);
        return response.data;
    } catch (error) {
        throw error;
    }
}