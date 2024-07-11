import apiClient from "../apiClient";

const URL_API = "/user"

export const getActiveCustomers = async () => {
    try {
        const response = await apiClient.get(`${URL_API}/getAllCustomers`)
        return response.data;
    } catch (error) {
        console.log('Error al obtener usuarios:', error);
        throw error;
    }
}