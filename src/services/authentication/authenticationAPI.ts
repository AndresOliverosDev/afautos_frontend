import axios, { AxiosError } from "axios";
import { URL_API_BASE } from "../URL_API_BASE";
import apiClient from "../apiClient";
import { ErrorResponse, Register } from "../../types";
import { handleError } from "../handleError";

const API_URL = `${URL_API_BASE}/auth`;

interface LoginResponse {
    jwt: string;
}

interface AuthError {
    code: number;
    message: string;
}

interface ApiErrorResponse {
    message: string;
}

const login = async (username: string, password: string): Promise<LoginResponse | AuthError> => {
    try {
        const response = await axios.post<LoginResponse>(`${API_URL}/login`, {
            username,
            password
        }, {
            headers: { "Content-Type": "application/json" }
        });

        const { jwt } = response.data;

        if (jwt) {
            sessionStorage.setItem("jwt", `Bearer ${jwt}`);
        }

        return response.data;
    } catch (error) {
        const axiosError = error as AxiosError;
        const errorMessage = axiosError.response?.data as ApiErrorResponse;

        throw {
            code: axiosError?.response?.status || 500,
            message:
                axiosError.response?.status === 401
                    ? "Usuario o contraseña incorrectos"
                    : errorMessage?.message || "Error al conectar con el servidor"
        };
    }
};

const registerUser = async (user: Register): Promise<any> => {
    try {
        console.log("Payload enviado:", JSON.stringify(user, null, 2));
        const response = await apiClient.post(`${URL_API_BASE}/auth/register`, user, {
            headers: { "Content-Type": "application/json" }
        });
        return response.data;
    } catch (error) {
        const handledError = handleError(error as ErrorResponse)
        throw handledError;
    }
};

const logout = (): void => {
    sessionStorage.removeItem("jwt");
};

export default {
    login,
    logout,
    registerUser
};