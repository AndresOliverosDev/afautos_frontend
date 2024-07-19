import { useEffect, useState } from "react";
import { getAllCategories } from "../../services/products/categoryAPI";

const useCategory = () => {
    const [categoryData, setCategoryData] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getAllCategories();
                setCategoryData(categoryData);
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        };
      fetchData();
    }, []);

    return (
        categoryData,
        error,
        loading
    );
}

export default useCategory; 