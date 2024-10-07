import { useState } from "react";
import { getAddressByUser } from "../../services/address/addressAPI";

interface Address {
    // Define los campos que tiene la dirección según tu modelo de datos
    id: number;
    street: string;
    city: string;
    state: string;
    zipCode: string;
}

interface UseAddress {
    selectAddress: Address[] | null; // O el tipo que definas para las direcciones
    selectLoading: boolean;
    error: Error | null;
    fetchAddressByUser: (userId: number) => Promise<void>; // Define el tipo del parámetro
}

const useAddress = (): UseAddress => {
    const [selectAddress, setSelectAddress] = useState<any>(null);
    const [selectLoading, setSelectLoading] = useState<boolean>(true);
    const [error, setError] = useState<Error | null>(null);

    const fetchAddressByUser = async (userId: number): Promise<void> => {
        setSelectLoading(true);
        try {
            const data = await getAddressByUser(userId);
            setSelectAddress(data);
        } catch (error) {
            setError(error instanceof Error ? error : new Error("An error occurred"));
        } finally {
            setSelectLoading(false);
        }
    };

    return {
        selectAddress,
        selectLoading,
        error,
        fetchAddressByUser,
    };
};

export default useAddress;