import apiClient from "../apiClient"

const URL_API = "/order"

export const getAllOrders = async () => {
    try {
        const response = await apiClient(`${URL_API}/getAll`);
        return response.data;
    } catch(error) {
        console.log("Error al obtener los pedidos", error);
        throw error;
    }
}