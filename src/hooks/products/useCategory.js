import { useEffect, useState } from "react";
import { getAllCategories, createCategoryAPI } from "../../services/products/categoryAPI";

const useCategory = () => {
    const [categoryData, setCategoryData] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [createMessage, setCreateMessage] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getAllCategories();
                setCategoryData(data);
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    const createCategory = async (category) => {
        try {
            const response = await createCategoryAPI(category);
            setCategoryData(prevData => [...prevData, category]);
            setCreateMessage(response);
        } catch(error) {
            setError(error);
        }
    }

    return {
        categoryData,
        error,
        loading,
        createCategory,
        createMessage
    };
}

export default useCategory; 