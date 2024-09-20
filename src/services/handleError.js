export const handleError = (error) => {
    const statusCode = error?.response?.status || 500;
    const message = error?.response?.message || "Error al conectar el servidor" ||
        (statusCode === 401 ? "Inicio de sesión expirado, inicie sesión nuevamente" : "Error al conectar con el servidor");
    return { statusCode, message };
}