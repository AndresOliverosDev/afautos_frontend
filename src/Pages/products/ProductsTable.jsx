import { IconTableActions } from "../../components/UI/index.js";
import Table from "../../components/table/Table.jsx";
import { useEffect, useState } from "react";
import { getAllProd } from "../../services/productAPI.js";
const ProductsTable = () => {
    /** Table Columns - TanStackTable */

    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const Products = await getAllProd();
                setProducts(Products);
            } catch (error) {
                console.error(error.message);
            }
        };
        fetchData();
    }, []);

    const columns = [
        {
            header: "Imagen",
            accessorKey: "imageUrl",
            isImage: true
        },
        {
            header: "ID",
            accessorKey: "id",
        },
        {
            header: "Producto",
            accessorKey: "name",
        },
        {
            header: "Descripción",
            accessorKey: "desc",
            isFilter: true,
        },
        {
            header: "Cantidad",
            accessorKey: "quantity",
        },
        {
            header: "Precio",
            accessorKey: "price",
            isFilter: true,
        },
        {
            header: "Categoría",
            accessorKey: "cat",
            isFilter: true,
        },
        {
            header: "Marca",
            accessorKey: "brand",
            isFilter: true,
        },
        {
            header: "Acciones",
            cell: () => <IconTableActions />,
        },
    ];

    return (
        <div className="h-full w-full overflow-auto">
            <Table columns={columns} data={products} nameTable={"Productos"} />
        </div>
    );
};
export default ProductsTable;
