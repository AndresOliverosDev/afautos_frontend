import { useEffect, useState } from "react";
import { getAllOrders } from "../../services/order/orderAPI";

const useOrder = () => {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const orderFetch = async () => {
            try {
                const data = await getAllOrders();
                setOrders(data);
                setLoading(false)
            } catch (error) {
                setError(error);
                setLoading(false);
            };
        }
        orderFetch();
    }, []);

    return {
        orders,
        loading,
        error
    }
}
export default useOrder;
