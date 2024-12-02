import { useEffect, useState } from "react";
import { getActiveCustomersAPI } from "../../services/customers/customerAPI";
import { Customer, ErrorResult } from "../../types";

const useCustomer = () => {
    const [customers, setCustomers] = useState<Customer[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<ErrorResult | null>(null);
    const [selectCustomer, setSelectCustomer] = useState<Customer | null>(null);
    const [loadingSelect, setLoadingSelect] = useState<boolean>(false);

    useEffect(() => {
        const customerFetch = async (): Promise<void> => {
            setLoading(true); // Iniciar la carga
            try {
                const data: Customer[] = await getActiveCustomersAPI();
                setCustomers(data);
            } catch (error) {
                setError(error as ErrorResult);
            } finally {
                setLoading(false); // Terminar la carga
            }
        };
        customerFetch();
    }, []);

    return { customers, loading, error, selectCustomer, setSelectCustomer, loadingSelect, setLoadingSelect };
};

export default useCustomer;
