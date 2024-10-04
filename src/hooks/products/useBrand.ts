import { useEffect, useState } from "react"
import { Brand } from "../../types/product/brand"
import { ErrorResult } from "../../types";
import { getAllBrands } from "../../services/products/brandService";

export const useBrand = () => {
    // Lista de marcas
    const [brandData, setBrandData] = useState< Brand[] | [] >([]);
    // Estados de la petición
    const [brandLoading, setBrandLoading] = useState<boolean>(false);
    const [brandError, setBrandError] = useState<ErrorResult | null>(null);

    // Obtener todas las marcas de la base de datos
    const fetchAllBrands = async () => {
        setBrandLoading(true);
        setBrandError(null);
        try {
            const data = await getAllBrands();
            setBrandData(data);
        } catch (error) {
            setBrandError(error as ErrorResult);
        } finally {
            setBrandLoading(false);
        }
    }

    useEffect(() => {
        fetchAllBrands()
    }, [])

    // Retornar datos y funciones del custom hook
    return {
        // Datos y estados de la búsqueda
        brandData,
        brandError,
        brandLoading,
        // Funciones
        fetchAllBrands
    }
}