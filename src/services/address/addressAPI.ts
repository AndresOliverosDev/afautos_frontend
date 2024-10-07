import apiClient from "../apiClient";

// Define el tipo de dirección que esperas recibir
interface Address {
    id: number;
    street: string;
    neighborhood: string; // Suponiendo que tienes un campo para el barrio
    city: string;
    // Agrega otros campos necesarios según tu modelo
}

const URL_API = "/address";

// Define el tipo del parámetro y el tipo de retorno de la función
export const getAddressByUser = async (userId: number): Promise<Address[]> => {
    try {
        const response = await apiClient.get(`${URL_API}/getAddressByUser/${userId}`);
        return response.data; // Asegúrate de que response.data es del tipo Address[]
    } catch (error) {
        console.error("Error al obtener las direcciones: ", error);
        throw error; // Vuelve a lanzar el error para que pueda ser manejado en el hook
    }
};
