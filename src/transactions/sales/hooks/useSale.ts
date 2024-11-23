import { useEffect, useState } from "react";
import { ErrorResult, Sale, SaleCreate } from "../../../types";
import { createSaleAPI, getAllSalesAPI, deleteSaleAPI, updateSaleAPI } from "../../../services/sale/saleService";

// Props de useSale
interface UseSaleProps {
    sales: Sale[];
    errorSales: ErrorResult | null;
    loadingSales: boolean;
    errorSale: ErrorResult | null;
    loadingSale: boolean;
    getAllSales: () => Promise<void>;
    createSale: (Sale: SaleCreate) => Promise<void>;
    deleteSale: (id: number) => Promise<void>;
    updateSale: (Sale: SaleCreate, SaleId: number) => Promise<void>;
    
}

const useSale = (): UseSaleProps => {

    // Manejo de los estados del hook
    const [sales, setSales] = useState<Sale[]>([]); // Lista de ventas
    const [errorSales, setErrorSales] = useState<ErrorResult | null>(null); // Errores en la carga de datos
    const [loadingSales, setLoadingSales] = useState<boolean>(true); // Estado de carga de datos
    const [errorSale, setErrorSale] = useState<ErrorResult | null>(null); // Error de la petición
    const [loadingSale, setLoadingSale] = useState<boolean>(false); // Estado de la petición

    // Obtener el listado de pedidos
    const getAllSales = async (): Promise<void> => {
        setErrorSales(null);
        setLoadingSales(true);
        try {
            const data: Sale[] = await getAllSalesAPI(); 
            setSales(data);
        } catch (error) {
            setErrorSales((error as ErrorResult));
        } finally {
            setLoadingSales(false);
        }
    };

    useEffect(() => {
        getAllSales();
    }, []);

    // Crear una nueva venta
    const createSale = async (sale: SaleCreate): Promise<void> => {
        setErrorSale(null);
        setLoadingSale(true);
        try {
            const createdSale: Sale = await createSaleAPI(sale);
            setSales(prevData => [...prevData, createdSale]);
            setErrorSale(null);
        } catch (error) {
            setErrorSale((error as ErrorResult));
        } finally {
            setLoadingSale(false);
        }
    };

    // Eliminar una categoría
    const deleteSale = async (id: number): Promise<void> => {
        setErrorSale(null);
        setLoadingSale(true);
        try {
            await deleteSaleAPI(id);
            setSales(prevData => prevData.filter(Sale => Sale.id !== id));
            setErrorSale(null);
        } catch (error) {
            setErrorSale((error as ErrorResult));
        } finally {
            setLoadingSale(false);
        }
    };

    // Actualizar una categoría
    const updateSale = async (sale: SaleCreate, saleId: number): Promise<void> => {
        try {
            const SaleUpdated: Sale = await updateSaleAPI(sale, saleId);
            setSales(prevData =>
                prevData.map(item => item.id === sale.id ? SaleUpdated : item)
            );
            setErrorSale(null);
        } catch (error) {
            setErrorSale((error as ErrorResult));
        } finally {
            setLoadingSale(false);
        }
    };

    return {
        sales,
        errorSale,
        loadingSale,
        createSale,
        deleteSale,
        updateSale,
        errorSales,
        getAllSales,
        loadingSales
    };
};

export default useSale;
