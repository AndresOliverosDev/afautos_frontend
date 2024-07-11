import { useEffect, useState } from "react"
import { getActiveCustomers } from "../../services/customers/customerAPI";

const useCustomer = () => {
    const [customers, setCustomers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectCustomer, setSelectCustomer] = useState(null);
    const [loadingSelect, setLoadingSelect] = useState(false);

    useEffect(() => {
        const customerFetch = async () => {
            try {
                const data = await getActiveCustomers();
                setCustomers(data);
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        };
        customerFetch();
}, []);

return { customers, loading, error }
}

export default useCustomer;