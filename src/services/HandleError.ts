import { ErrorResponse, ErrorResult } from "../types";

export const handleError = (error : ErrorResponse): ErrorResult => {
    // Código del estado de la respuesta de la API
    const statusCode = error?.response?.status || 500;
    // Mensaje de la respuesta de la API
    let message:string
    switch (statusCode) {
        case 401:
            message = "Inicio de sesión expirado, inicie sesión nuevamente"
        case 500:
            message = "Error al conectar el servidor"
        default:
            message = "Error desconocido"
    }
    
    return { statusCode, message }

}