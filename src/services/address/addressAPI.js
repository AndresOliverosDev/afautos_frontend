import apiClient from "../apiClient";

const URL_API = "/address";

export const getAddressByUser = async (userId) => {
    try {
        const response = await apiClient.get(`${URL_API}/getAddressByUser/${userId}`);
        return response.data;
    } catch (error) {
        console.log("Error al obtener las direcciones: ", error);
        throw error;
    }
}