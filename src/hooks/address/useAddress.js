import { useState } from "react";
import { getAddressByUser } from "../../services/address/addressAPI";

const useAddress = () => {
    const [selectAddress, setSelectAddress] = useState(null);
    const [selectLoading, setSelectLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchAddressByUser = async (userId) => {
        setSelectLoading(true);
        try {
            const data = await getAddressByUser(userId);
            setSelectAddress(data);
            selectLoading(false);
        } catch (error) {
            setError(error);
            setSelectLoading(false);
        }
    }

    return {
        selectAddress,
        selectLoading,
        error,
        fetchAddressByUser
    }

}
export default useAddress;