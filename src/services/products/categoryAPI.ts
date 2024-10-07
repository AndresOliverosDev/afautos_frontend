import { ErrorResponse } from "../../types";
import { Category, CreateCategory } from "../../types";
import apiClient from "../apiClient";
import { handleError } from "../handleError";

const URL_API = "/category";

export const getAllCategories = async (): Promise<Category[]> => {
    try {
        const response = await apiClient.get(`${URL_API}/getAllCategories`);
        return response.data;
    } catch (error) {
        const handledError = handleError(error as ErrorResponse)
        throw handledError;
    }
}

export const createCategoryAPI = async (category: CreateCategory) => {
    try {
        const response = await apiClient.post(`${URL_API}/createCategory`, category);
        return response.data;
    } catch (error) {
        const handledError = handleError(error as ErrorResponse)
        throw handledError;
    }
}

export const deleteCategoryAPI = async (id: number) => {
    try {
        const response = await apiClient.delete(`${URL_API}/deleteCategory/${id}`);
        return response.data;
    } catch (error) {
        const handledError = handleError(error as ErrorResponse)
        throw handledError;
    }
}

export const updateCategoryAPI = async (category: CreateCategory, categoryId: number) => {
    try {
        const response = await apiClient.put(`${URL_API}/updateCategory/${categoryId}`, category);
        return response.data;
    } catch (error) {
        const handledError = handleError(error as ErrorResponse)
        throw handledError;
    }
}