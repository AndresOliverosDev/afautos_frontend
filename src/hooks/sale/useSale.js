import { useEffect, useState } from "react";
import { getAllSales, getSalesByCustomer } from "../../services/sale/saleAPI"

const useSale = () => {
    const [sales, setSales] = useState([]);
    const [selectSales, setSelectSales] = useState(null);
    const [loading, setLoading] = useState(true);
    const [loadingDetails, setLoadingDetails] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const saleFetch = async () => {
            try {
                const data = await getAllSales();
                setSales(data);
                setLoading(false)
            } catch (error) {
                setError(error);
                setLoading(false);
            };
        }
        saleFetch();
    }, []);

    const fetchSalesByCustomer = async (customerId) => {
        setLoadingDetails(true);
        try {
            const data = await getSalesByCustomer(customerId);
            setSelectSales(data);
            setLoadingDetails(false);
        } catch (error) {
            setError(error);
            setLoadingDetails(false);
        }
    }

    return {
        sales,
        selectSales,
        loading,
        loadingDetails,
        error,
        fetchSalesByCustomer
    }
}
export default useSale;
