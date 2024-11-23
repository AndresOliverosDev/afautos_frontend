import { useEffect, useState } from "react";
import { ErrorResult, Brand, BrandCreate } from "../../../types";
import { createBrandAPI, deleteBrandAPI, getAllBrandsAPI, updateBrandAPI } from '../../../services/products/brandService';

// Props de useBrand
interface UseBrandProps {
    brands: Brand[];
    errorBrands: ErrorResult | null;
    loadingBrands: boolean;
    errorBrand: ErrorResult | null;
    loadingBrand: boolean;
    getAllBrands: () => Promise<void>;
    createBrand: (brand: BrandCreate) => Promise<void>;
    deleteBrand: (id: number) => Promise<void>;
    updateBrand: (brand: BrandCreate, id: number) => Promise<void>;
}

const useBrand = (): UseBrandProps => {
    const [brands, setBrands] = useState<Brand[]>([]);
    const [errorBrands, setErrorBrands] = useState<ErrorResult | null>(null);
    const [loadingBrands, setLoadingBrands] = useState<boolean>(true);
    const [errorBrand, setErrorBrand] = useState<ErrorResult | null>(null);
    const [loadingBrand, setLoadingBrand] = useState<boolean>(false);

    // Obtener todos las marcas
    const getAllBrands = async (): Promise<void> => {
        setErrorBrands(null);
        setLoadingBrands(true);
        try {
            const data: Brand[] = await getAllBrandsAPI();
            setBrands(data);
        } catch (error) {
            setErrorBrands(error as ErrorResult);
        } finally {
            setLoadingBrands(false);
        }
    };

    useEffect(() => {
        getAllBrands();
    }, []);

    // Crear una nueva marca
    const createBrand = async (brand: BrandCreate): Promise<void> => {
        setErrorBrand(null);
        setLoadingBrand(true);
        try {
            const createdBrand = await createBrandAPI(brand);
            setBrands((prevBrands) => [...prevBrands, createdBrand]);
        } catch (error) {
            setErrorBrand(error as ErrorResult);
        } finally {
            setLoadingBrand(false);
        }
    };

    // Eliminar una marca
    const deleteBrand = async (id: number): Promise<void> => {
        setErrorBrand(null);
        setLoadingBrand(true);
        try {
            const response: Brand = await deleteBrandAPI(id);
            setBrands((prevBrands) => prevBrands.filter((brand) => brand.id !== id));
        } catch (error) {
            setErrorBrand(error as ErrorResult);
        } finally {
            setLoadingBrand(false);
        }
    };

    const updateBrand = async (brand: BrandCreate, id: number): Promise<void> => {
        setErrorBrand(null);
        setLoadingBrand(true);
        try {
            const updatedBrand = await updateBrandAPI(brand, id);
            setBrands((prevBrands) =>
                prevBrands.map((b) => (b.id === id ? updatedBrand : b))
            );
        } catch (error) {
            setErrorBrand(error as ErrorResult);
        } finally {
            setLoadingBrand(false);
        }
    };

    return {
        brands,
        createBrand,
        deleteBrand,
        errorBrand,
        errorBrands,
        getAllBrands,
        loadingBrand,
        loadingBrands,
        updateBrand
    };
};

export default useBrand;