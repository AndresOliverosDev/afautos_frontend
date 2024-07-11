import apiClient from "../apiClient";

const URL_API = "/sale";

export const getSalesByCustomer = async (customerId) => {
    try {
        const response = await apiClient.get(`${URL_API}/getSalesByCustomer/${customerId}`);
        return response.data;
    } catch (error) {
        console.log("Error al obtener la venta: ", error)
        throw error;
    }
}

export const getAllSales = async () => {
    try {
        const response = await apiClient.get(`${URL_API}/getAllSales`);
        return response.data;
    } catch (error) {
        console.log("Error al obtener las ventas", error);
        throw error;
    }
}