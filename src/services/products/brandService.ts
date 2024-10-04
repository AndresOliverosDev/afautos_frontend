import { ErrorResponse } from "../../types";
import { Brand } from "../../types/product/brand";
import apiClient from "../ApiClient";
import { handleError } from '../HandleError';

const url_api_service = "/brand"

export const getAllBrands = async ():Promise<Brand[]>  => {
    try {
        const response = await apiClient.get(`${url_api_service}/getAllBrands`);
        return response.data
    } catch (error) {
        const handledError = handleError(error as ErrorResponse)
        throw handledError;
    }
}