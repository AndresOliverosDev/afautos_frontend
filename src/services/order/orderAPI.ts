import { ErrorResponse, Order } from "../../types";
import apiClient from "../apiClient"
import { handleError } from "../handleError";

const URL_API = "/order"

export const getAllOrders = async (): Promise<Order[]> => {
    try {
        const response = await apiClient(`${URL_API}/getAll`);
        return response.data;
    } catch(error) {
        const handledError = handleError(error as ErrorResponse)
        throw handledError;
    }
}