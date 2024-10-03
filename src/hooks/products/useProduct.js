import { useEffect, useState } from "react";
import { addProd, deleteProd, getAllProd } from "../../services/products/productAPI.js";

const useProduct = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Obtener todos los productos

    const getAllProducts = async () => {
        setLoading(true);
        setError(null);
        try { 
            const response = await getAllProd();
            setProducts(response);
        } catch (error) {
            setError(error.message)
            console.log(error.message)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        getAllProducts();
    }, []);

    // Eliminar productos

    const delProduct = async (id) => {
        try {
            await deleteProd(id);
            setProducts(products.filter(product => product.id !== id));
        } catch (error) {
            console.error("Error al eliminar el producto", error);
        }
    };

    const addProduct = async (product) => {
        try {
            await addProd(product);
            alert("Product creado")
        } catch(error) {
            console.error("error al crear el producto")
        }
    }

    return { products, loading, error, delProduct, addProduct, getAllProducts};
};

export default useProduct;
