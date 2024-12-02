import { ErrorResponse, Customer, CustomerCreate } from "../../types";
import apiClient from "../apiClient";
import { handleError } from "../handleError";

const URL_API = "/user";

export const deleteCustomer = async (id: string): Promise<string> => {
    try {
        const response = await apiClient.delete(`${URL_API}/deleteCustomerById/${id}`);
        return response.data;
    } catch (error) {
        const handledError = handleError(error as ErrorResponse);
        throw handledError;
    }
};

export const getAllCustomersAPI = async (): Promise<Customer[]> => {
    try {
        const response = await apiClient.get(`${URL_API}/getAllCustomers`);
        return response.data;
    } catch (error) {
        const handledError = handleError(error as ErrorResponse);
        throw handledError;
    }
};

export const createCustomerAPI = async (customer: CustomerCreate): Promise<Customer> => {
    try {
        const response = await apiClient.post(`auth/register`, customer);
        return response.data;
    } catch (error) {
        const handledError = handleError(error as ErrorResponse);
        throw handledError;
    }
};

export const updateCustomerAPI = async (customer: Customer, customerId: string): Promise<Customer> => {
    try {
        const response = await apiClient.put(`${URL_API}/updateCustomer/${customerId}`, customer);
        return response.data;
    } catch (error) {
        const handledError = handleError(error as ErrorResponse);
        throw handledError;
    }
};
