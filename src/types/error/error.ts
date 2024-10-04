// Tipo para capturar en la respuesta de la API el error
export interface ErrorResponse {
    response? : {
        status?: number;
        message?: string;
    }
}

// Resultado del error capturado
export interface ErrorResult {
    statusCode: number;
    message: string;
}