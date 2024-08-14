import { useEffect, useState } from "react";
import { getAllCategories, createCategoryAPI, deleteCategoryAPI, updateCategoryAPI } from "../../services/products/categoryAPI";

const useCategory = () => {
    const [categoryData, setCategoryData] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [messages, setMessages] = useState({ create: null, delete: null, update: null });

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const data = await getAllCategories();
                setCategoryData(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    const createCategory = async (category) => {
        try {
            const createdCategory = await createCategoryAPI(category);
            setCategoryData(prevData => [...prevData, createdCategory]);
            setMessages(prevMessages => ({ ...prevMessages, create: `Categoría "${createdCategory.name}" creada correctamente.` }));
            setError(null);
            return createdCategory;
        } catch (error) {
            setError(error.message);
            setMessages(prevMessages => ({ ...prevMessages, create: error.message }));
            throw error;
        }
    };

    const deleteCategory = async (id) => {
        try {
            const response = await deleteCategoryAPI(id);
            setCategoryData(prevData => prevData.filter(category => category.id !== id));
            setMessages(prevMessages => ({ ...prevMessages, delete: "Categoría eliminada correctamente" }));
            setError(null);
            return response;
        } catch (error) {
            setError(error.message);
            setMessages(prevMessages => ({ ...prevMessages, delete: error.message }));
            throw error;
        }
    };

    const updateCategory = async (category, categoryId) => {
        try {
            const categoryUpdated = await updateCategoryAPI(category, categoryId);
            setCategoryData(prevData =>
                prevData.map(cat =>
                    cat.id === categoryId ? categoryUpdated : cat
                )
            );
            setMessages(prevMessages => ({
                ...prevMessages,
                create: `Categoría "${categoryUpdated.name}" actualizada correctamente.`
            }));
            setError(null);
        } catch (error) {
            setError(error.message);
            setMessages(prevMessages => ({
                ...prevMessages,
                create: error.message
            }));
            throw error;
        }
    };


    return {
        categoryData,
        error,
        loading,
        createCategory,
        deleteCategory,
        messages
    };
};

export default useCategory;
