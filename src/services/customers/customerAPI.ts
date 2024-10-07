import { Customer, ErrorResponse } from "../../types";
import apiClient from "../apiClient";
import { handleError } from "../handleError";

const URL_API = "/user"

export const getActiveCustomers = async (): Promise<Customer[]> => {
    try {
        const response = await apiClient.get(`${URL_API}/getAllCustomers`)
        return response.data;
    } catch (error) {
        const handledError = handleError(error as ErrorResponse)
        throw handledError;
    }
}