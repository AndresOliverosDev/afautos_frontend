import { useEffect, useState } from "react";
import { getAllOrders } from "../../services/order/orderAPI";
import { Order } from "../../types";

const useOrder = () => {
    const [orders, setOrders] = useState<Order[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<Error | null>(null); 

    useEffect(() => {
        const orderFetch = async () => {
            try {
                const data: Order[] = await getAllOrders();
                setOrders(data);
                setLoading(false);
            } catch (error) {
                setError(error as Error);
                setLoading(false);
            }
        };
        orderFetch();
    }, []);

    return {
        orders,
        loading,
        error
    };
};

export default useOrder;