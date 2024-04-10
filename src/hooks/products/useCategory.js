import { useEffect, useState } from "react";
import { getAllCat } from "../../services/products/categories/categoryAPI";

const useCategory = () => {
    const [catData, setCatData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const cat = await getAllCat();
                setCatData(cat);
            } catch (error) {
                throw new Error("Error del servidor");
            }
        };
      fetchData();
    }, []);
    return (catData);
}

export default useCategory;