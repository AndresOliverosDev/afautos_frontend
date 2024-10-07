// Tipo para capturar en la respuesta de la API el error
export interface ErrorResponse {
    message: any;
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