import { useEffect, useState } from "react";
import { 
    createCategoryAPI, 
    deleteCategoryAPI, 
    getAllCategoriesAPI, 
    updateCategoryAPI 
} from "../../../services/products/categoryAPI";
import { Category, CreateCategory, ErrorResult } from "../../../types";

// Props de useCategory
interface UseCategoryProps {
    categories: Category[];
    errorCategories: ErrorResult | null;
    loadingCategories: boolean;
    errorCategory: ErrorResult | null;
    loadingCategory: boolean;
    getAllCategories: () => Promise<void>;
    createCategory: (category: CreateCategory) => Promise<void>;
    deleteCategory: (id: number) => Promise<void>;
    updateCategory: (category: CreateCategory, categoryId: number) => Promise<void>;
    
}

const useCategory = (): UseCategoryProps => {

    // Manejo de los estados del hook
    const [categories, serCategories] = useState<Category[]>([]); // Lista de categorías
    const [errorCategories, setErrorCategories] = useState<ErrorResult | null>(null); // Errores en la carga de datos
    const [loadingCategories, setLoadingCategories] = useState<boolean>(true); // Estado de carga de datos
    const [errorCategory, setErrorCategory] = useState<ErrorResult | null>(null); // Error de la petición
    const [loadingCategory, setLoadingCategory] = useState<boolean>(false); // Estado de la petición

    // Obtener el listado de categorías
    const getAllCategories = async (): Promise<void> => {
        setErrorCategories(null);
        setLoadingCategories(true);
        try {
            const data: Category[] = await getAllCategoriesAPI(); 
            serCategories(data);
        } catch (error) {
            setErrorCategories((error as ErrorResult));
        } finally {
            setLoadingCategories(false);
        }
    };

    useEffect(() => {
        getAllCategories();
    }, []);

    // Crear una nueva categoría
    const createCategory = async (category: CreateCategory): Promise<void> => {
        setErrorCategory(null);
        setLoadingCategory(true);
        try {
            const createdCategory: Category = await createCategoryAPI(category);
            serCategories(prevData => [...prevData, createdCategory]);
            setErrorCategory(null);
        } catch (error) {
            setErrorCategory((error as ErrorResult));
        } finally {
            setLoadingCategory(false);
        }
    };

    // Eliminar una categoría
    const deleteCategory = async (id: number): Promise<void> => {
        setErrorCategory(null);
        setLoadingCategory(true);
        try {
            await deleteCategoryAPI(id);
            serCategories(prevData => prevData.filter(category => category.id !== id));
            setErrorCategory(null);
        } catch (error) {
            setErrorCategory((error as ErrorResult));
        } finally {
            setLoadingCategory(false);
        }
    };

    // Actualizar una categoría
    const updateCategory = async (category: CreateCategory, categoryId: number): Promise<void> => {
        try {
            const categoryUpdated: Category = await updateCategoryAPI(category, categoryId);
            serCategories(prevData =>
                prevData.map(cat => cat.id === categoryId ? categoryUpdated : cat)
            );
            setErrorCategory(null);
        } catch (error) {
            setErrorCategory((error as ErrorResult));
        } finally {
            setLoadingCategory(false);
        }
    };

    return {
        categories,
        errorCategories,
        loadingCategories,
        errorCategory,
        loadingCategory,
        getAllCategories,
        createCategory,
        deleteCategory,
        updateCategory
    };
};

export default useCategory;
