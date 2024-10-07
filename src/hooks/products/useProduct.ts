import { useEffect, useState } from "react";
import { addProd, deleteProd, getAllProd } from "../../services/products/productAPI";
import { ErrorResponse, Product, ProductCreate } from "../../types"; // Asegúrate de que la interfaz ErrorResponse esté definida correctamente

const useProduct = () => {
    const [products, setProducts] = useState<Product[]>([]); // Tipar como array de Product
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null); // Tipar error como string o null

    // Obtener todos los productos
    const getAllProducts = async (): Promise<void> => {
        setLoading(true);
        setError(null);
        try { 
            const response = await getAllProd();
            setProducts(response);
        } catch (error) {
            const errMessage = (error as ErrorResponse).message;
            setError(errMessage);
            console.error(errMessage);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getAllProducts();
    }, []);

    // Eliminar productos
    const delProduct = async (id: number): Promise<void> => {
        try {
            await deleteProd(id);
            setProducts(products.filter(product => product.id !== id));
        } catch (error) {
            console.error("Error al eliminar el producto", error);
        }
    };

    // Agregar productos
    const addProduct = async (product: ProductCreate): Promise<void> => {
        try {
            const createdProduct = await addProd(product);
            setProducts(prevProducts => [...prevProducts, createdProduct]);
            alert("Producto creado");
        } catch (error) {
            console.error("Error al crear el producto", error);
        }
    };

    return { products, loading, error, delProduct, addProduct, getAllProducts };
};

export default useProduct;
