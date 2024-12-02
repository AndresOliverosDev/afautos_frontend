import { useEffect, useState } from "react";
import { Customer, CustomerCreate, ErrorResult } from "../../../types";
import { createCustomerAPI, getAllCustomersAPI, updateCustomerAPI } from "../../../services/customers/customerAPI";

// Props de useCustomer
interface UseCustomerProps {
    customers: Customer[];
    errorCustomers: ErrorResult | null;
    loadingCustomers: boolean;
    errorCustomer: ErrorResult | null;
    loadingCustomer: boolean;
    getAllCustomers: () => Promise<void>;
    createCustomer: (customer: CustomerCreate) => Promise<void>;
    deleteCustomer: (id: string) => Promise<void>;
    updateCustomer: (customer: Customer, id: string) => Promise<void>;
}

const useCustomer = (): UseCustomerProps => {
    const [customers, setCustomers] = useState<Customer[]>([]);
    const [errorCustomers, setErrorCustomers] = useState<ErrorResult | null>(null);
    const [loadingCustomers, setLoadingCustomers] = useState<boolean>(true);
    const [errorCustomer, setErrorCustomer] = useState<ErrorResult | null>(null);
    const [loadingCustomer, setLoadingCustomer] = useState<boolean>(false);

    // Obtener todos los clientes
    const getAllCustomers = async (): Promise<void> => {
        setErrorCustomers(null);
        setLoadingCustomers(true);
        try {
            const data: Customer[] = await getAllCustomersAPI();
            setCustomers(data);
            console.log(data);
        } catch (error) {
            setErrorCustomers(error as ErrorResult);
        } finally {
            setLoadingCustomers(false);
        }
    };

    useEffect(() => {
        getAllCustomers();
    }, []);

    // Crear un nuevo cliente
    const createCustomer = async (customer: CustomerCreate): Promise<void> => {
        setErrorCustomer(null);
        setLoadingCustomer(true);
        try {
            const createdCustomer = await createCustomerAPI(customer);
            setCustomers((prevCustomers) => [...prevCustomers, createdCustomer]);
        } catch (error) {
            setErrorCustomer(error as ErrorResult);
        } finally {
            setLoadingCustomer(false);
        }
    };

    // Eliminar un cliente
    const deleteCustomer = async (id: string): Promise<void> => {
        setErrorCustomer(null);
        setLoadingCustomer(true);
        try {
            await deleteCustomer(id);
            setCustomers((prevCustomers) => prevCustomers.filter((customer) => customer.id !== id));
        } catch (error) {
            setErrorCustomer(error as ErrorResult);
        } finally {
            setLoadingCustomer(false);
        }
    };

    // Actualizar un cliente
    const updateCustomer = async (customer: Customer, id: string): Promise<void> => {
        setErrorCustomer(null);
        setLoadingCustomer(true);
        try {
            const updatedCustomer = await updateCustomerAPI(customer, id);
            setCustomers((prevCustomers) =>
                prevCustomers.map((c) => (c.id === id ? updatedCustomer : c))
            );
        } catch (error) {
            setErrorCustomer(error as ErrorResult);
        } finally {
            setLoadingCustomer(false);
        }
    };

    return {
        customers,
        errorCustomers,
        loadingCustomers,
        errorCustomer,
        loadingCustomer,
        getAllCustomers,
        createCustomer,
        deleteCustomer,
        updateCustomer
    };
};

export default useCustomer;
