import { useEffect, useState } from "react";
import { Product, ProductCreate, ErrorResult } from "../../../types";
import { addProd, deleteProd, getAllProd, updateProductAPI } from "../../../services/products/productAPI";

// Props de useProduct
interface UseProductProps {
    products: Product[];
    errorProducts: ErrorResult | null;
    loadingProducts: boolean;
    errorProduct: ErrorResult | null;
    loadingProduct: boolean;
    getAllProducts: () => Promise<void>;
    createProduct: (product: ProductCreate) => Promise<void>;
    deleteProduct: (id: number) => Promise<void>;
    updateProduct: (product: ProductCreate, id: number) => Promise<void>;
}

const useProduct = (): UseProductProps => {
    const [products, setProducts] = useState<Product[]>([]);
    const [errorProducts, setErrorProducts] = useState<ErrorResult | null>(null);
    const [loadingProducts, setLoadingProducts] = useState<boolean>(true);
    const [errorProduct, setErrorProduct] = useState<ErrorResult | null>(null);
    const [loadingProduct, setLoadingProduct] = useState<boolean>(false);

    // Obtener todos los productos
    const getAllProducts = async (): Promise<void> => {
        setErrorProducts(null);
        setLoadingProducts(true);
        try {
            const data: Product[] = await getAllProd();
            setProducts(data);
        } catch (error) {
            setErrorProducts(error as ErrorResult);
        } finally {
            setLoadingProducts(false);
        }
    };

    useEffect(() => {
        getAllProducts();
    }, []);

    // Crear un nuevo producto
    const createProduct = async (product: ProductCreate): Promise<void> => {
        setErrorProduct(null);
        setLoadingProduct(true);
        try {
            const createdProduct = await addProd(product);
            setProducts((prevProducts) => [...prevProducts, createdProduct]);
        } catch (error) {
            setErrorProduct(error as ErrorResult);
        } finally {
            setLoadingProduct(false);
        }
    };

    // Eliminar un producto
    const deleteProduct = async (id: number): Promise<void> => {
        setErrorProduct(null);
        setLoadingProduct(true);
        try {
            await deleteProd(id);
            setProducts((prevProducts) => prevProducts.filter((product) => product.id !== id));
        } catch (error) {
            setErrorProduct(error as ErrorResult);
        } finally {
            setLoadingProduct(false);
        }
    };

    const updateProduct = async (product: ProductCreate, id: number): Promise<void> => {
        setErrorProduct(null);
        setLoadingProduct(true);
        try {
            const updatedProduct = await updateProductAPI(product, id);
            setProducts((prevProducts) =>
                prevProducts.map((p) => (p.id === id ? updatedProduct : p))
            );
        } catch (error) {
            setErrorProduct(error as ErrorResult);
        } finally {
            setLoadingProduct(false);
        }
    };

    return {
        products,
        errorProducts,
        loadingProducts,
        errorProduct,
        loadingProduct,
        getAllProducts,
        createProduct,
        deleteProduct,
        updateProduct
    };
};

export default useProduct;