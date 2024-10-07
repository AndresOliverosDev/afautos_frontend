import { useEffect, useState } from "react";
import { getAllSales, getSalesByCustomer } from "../../services/sale/saleAPI";
import { Sale } from "../../types/transactions/sale"; 
import { ErrorResponse } from "../../types"; 

const useSale = () => {
    const [sales, setSales] = useState<Sale[]>([]); // Tipar como array de Sale
    const [selectSales, setSelectSales] = useState<Sale[] | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [loadingDetails, setLoadingDetails] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null); // Tipar error

    useEffect(() => {
        const saleFetch = async () => {
            try {
                const data = await getAllSales();
                setSales(data);
            } catch (error) {
                setError((error as ErrorResponse).message);
            } finally {
                setLoading(false);
            }
        };
        saleFetch();
    }, []);

    const fetchSalesByCustomer = async (customerId: string) => {
        setLoadingDetails(true);
        try {
            const data = await getSalesByCustomer(customerId);
            setSelectSales(data);
        } catch (error) {
            setError((error as ErrorResponse).message);
        } finally {
            setLoadingDetails(false);
        }
    };

    return {
        sales,
        selectSales,
        loading,
        loadingDetails,
        error,
        fetchSalesByCustomer,
    };
};

export default useSale;