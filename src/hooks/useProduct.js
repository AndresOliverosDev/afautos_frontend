import { useEffect, useState } from "react";
import { addProd, deleteProd, getAllProd } from "../services/products/productAPI.js";

const useProducts = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const Products = await getAllProd();
                setProducts(Products);
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    const delProduct = async (id) => {
        try {
            await deleteProd(id);

            setProducts(products.filter(product => product.id !== id));

            alert(`Producto con ID ${id} eliminado`);
        } catch (error) {
            console.error("Error al eliminar el producto", error);
        }
    };

    const addProduct = async (product) => {
        try {
            await addProd(product);
            alert(product.data)
        } catch(error) {
            console.error("error al crear el producto")
        }
    }

    return { products, loading, error, delProduct, addProduct};
};

export default useProducts;
