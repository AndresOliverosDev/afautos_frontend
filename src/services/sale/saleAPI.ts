import { ErrorResponse } from "../../types";
import { Sale } from "../../types/transactions/sale";
import apiClient from "../apiClient";
import { handleError } from "../handleError";

const URL_API = "/sale";

export const getSalesByCustomer = async (customerID: string): Promise<Sale[]> => {
    try {
        const response = await apiClient.get(`${URL_API}/getSalesByCustomer/${customerID}`);
        return response.data;
    } catch (error) {
        const handledError = handleError(error as ErrorResponse)
        throw handledError;
    }
}

export const getAllSales = async (): Promise<Sale[]> => {
    try {
        const response = await apiClient.get(`${URL_API}/getAllSales`);
        return response.data;
    } catch (error) {
        const handledError = handleError(error as ErrorResponse)
        throw handledError;
    }
}