import { ErrorResponse } from "../../types";
import { Brand, BrandCreate } from '../../types/product/brand';
import apiClient from "../apiClient";
import { handleError} from '../handleError';

const url_api_service = "/brand"

export const getAllBrandsAPI = async ():Promise<Brand[]>  => {
    try {
        const response = await apiClient.get(`${url_api_service}/getAllBrands`);
        return response.data
    } catch (error) {
        const handledError = handleError(error as ErrorResponse)
        throw handledError;
    }
}

export const createBrandAPI = async (brand: BrandCreate):Promise<Brand> => {
    try {
        const response = await apiClient.post(`${url_api_service}/createBrand`, brand);
        return response.data;
    } catch (error) {
        const handledError = handleError(error as ErrorResponse);
        throw handledError;
    }
}

export const updateBrandAPI = async (Brand: BrandCreate, BrandId: number):Promise<Brand> => {
    try {
        const response = await apiClient.put(`${url_api_service}/updateBrand/${BrandId}`, Brand);
        return response.data;
    } catch (error) {
        const handledError = handleError(error as ErrorResponse);
        throw handledError;
    }
}

export const deleteBrandAPI = async (brandID: number):Promise<Brand> => {
    try {
        const response = await apiClient.delete(`${url_api_service}/deleteBrand/${brandID}`);
        return response.data;
    } catch (error) {
        const handledError = handleError(error as ErrorResponse);
        throw handledError;
    }
}