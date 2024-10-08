import { useEffect, useState } from "react";
import { 
    getAllCategories, 
    createCategoryAPI, 
    deleteCategoryAPI, 
    updateCategoryAPI 
} from "../../services/products/categoryAPI";
import { Category, CreateCategory } from "../../types";

interface Messages {
    create: string | null;
    delete: string | null;
    update: string | null;
}

const useCategory = () => {
    const [categoryData, setCategoryData] = useState<Category[]>([]); // Tipar como array de Category
    const [error, setError] = useState<string | null>(null); // Puede ser string o null
    const [loading, setLoading] = useState<boolean>(true);
    const [messages, setMessages] = useState<Messages>({ create: null, delete: null, update: null }); // Tipado de messages

    // Obtener datos de las categorias
    const fetchData = async () => {
        setLoading(true);
        try {
            const data: Category[] = await getAllCategories(); // Tipar la respuesta como array de Category
            setCategoryData(data);
        } catch (error) {
            setError((error as Error).message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const createCategory = async (category: CreateCategory): Promise<Category> => {
        try {
            const createdCategory: Category = await createCategoryAPI(category); // Tipar la respuesta como Category
            setCategoryData(prevData => [...prevData, createdCategory]);
            setMessages(prevMessages => ({ ...prevMessages, create: `Categoría "${createdCategory.name}" creada correctamente.` }));
            setError(null);
            return createdCategory;
        } catch (error) {
            setError((error as Error).message);
            setMessages(prevMessages => ({ ...prevMessages, create: (error as Error).message }));
            throw error;
        }
    };

    const deleteCategory = async (id: number): Promise<void> => {
        try {
            await deleteCategoryAPI(id);
            setCategoryData(prevData => prevData.filter(category => category.id !== id));
            setMessages(prevMessages => ({ ...prevMessages, delete: "Categoría eliminada correctamente" }));
            setError(null);
        } catch (error) {
            setError((error as Error).message);
            setMessages(prevMessages => ({ ...prevMessages, delete: (error as Error).message }));
            throw error;
        }
    };

    const updateCategory = async (category: CreateCategory, categoryId: number): Promise<Category> => {
        try {
            const categoryUpdated: Category = await updateCategoryAPI(category, categoryId); // Tipar la respuesta como Category
            setCategoryData(prevData =>
                prevData.map(cat => cat.id === categoryId ? categoryUpdated : cat)
            );
            setMessages(prevMessages => ({
                ...prevMessages,
                update: `Categoría "${categoryUpdated.name}" actualizada correctamente.`
            }));
            setError(null);
            return categoryUpdated;
        } catch (error) {
            setError((error as Error).message);
            setMessages(prevMessages => ({
                ...prevMessages,
                update: (error as Error).message
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
        messages,
        updateCategory
    };
};

export default useCategory;
