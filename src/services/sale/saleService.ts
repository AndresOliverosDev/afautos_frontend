import { ErrorResponse } from "../../types";
import { Sale, SaleCreate } from "../../types/transactions/sale";
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

export const getAllSalesAPI = async (): Promise<Sale[]> => {
    try {
        const response = await apiClient.get(`${URL_API}/getAllSales`);
        return response.data;
    } catch (error) {
        const handledError = handleError(error as ErrorResponse)
        throw handledError;
    }
}

export const createSaleAPI = async (sale: SaleCreate): Promise<Sale> => {
    try {
        const response = await apiClient.post(`${URL_API}/createSale`, sale);
        return response.data;
    } catch (error) {
        const handledError = handleError(error as ErrorResponse);
        throw handledError;
    }
}

export const deleteSaleAPI = async (saleId: number): Promise<Sale> => {
    try {
        const response = await apiClient.delete(`${URL_API}/deleteSale/${saleId}`);
        return response.data;
    } catch (error) {
        const handledError = handleError(error as ErrorResponse);
        throw handledError;
    }
}

export const updateSaleAPI = async (sale: SaleCreate, saleId: number) => {
    try {
        const response = await apiClient.put(`${URL_API}/updateSale/${saleId}`, sale);
        return response.data;
    } catch (error) {
        const handledError = handleError(error as ErrorResponse);
        throw handledError;
    }
} 