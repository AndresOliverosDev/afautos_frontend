<<<<<<< HEAD

import { IconTableActions } from "../../components/UI/index.js";
=======
import { IconTableActions } from "../../components/ui/index.js";
>>>>>>> 5755f02a4061c8e79a6fdec21e3b098e95b16e56
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
            cell: () => {
                return <IconTableActions/>
            },

        },
    ];

    const filters = [
        {
            index: 1,
            name: "Mayor a menor"
        },
        {
            index: 2,
            name: "Menor a mayor"
        },
    ]
    const handleDeleteClick = (rowId) => {
        console.log(`Se hizo clic en eliminar en la fila con ID: ${rowId}`);
        // Aquí puedes realizar cualquier otra acción que necesites con el ID de la fila
      };

    return (
        <div className="h-full w-full overflow-auto">
            <Table columns={columns} data={products} nameTable={"Productos"} filters={filters} onDeleteClick={handleDeleteClick} />
        </div>
    );
};
export default ProductsTable;
