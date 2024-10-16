import { ErrorResponse, ErrorResult } from "../types";

export const handleError = (error: ErrorResponse): ErrorResult => {
    // Código del estado de la respuesta de la API
    const statusCode = error?.response?.status || 500;
    // Mensaje de la respuesta de la API
    const message = error?.response?.data?.message ||
        (statusCode === 401 ? "Inicio de sesión expirado, inicie sesión nuevamente"
        : statusCode === 500 ? "Error al conectar con el servidor"
        : "Error desconocido");
    
    return { statusCode, message };
};