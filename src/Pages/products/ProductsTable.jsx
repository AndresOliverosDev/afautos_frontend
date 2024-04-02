import { IconTableActions } from "../../components/UI";

import Table from "../../components/table/Table.jsx";
import { useEffect, useState } from "react";
import { getAllProd } from "../../services/productAPI.js";
const ProductsTable = () => {
    /** Table Columns - TanStackTable */

    const [deleteProduct, setDeleteProduct] = useState("");
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

    const deleteOption = () => {
        {idForDelete}
    }

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
                return <IconTableActions deleteOption={deleteOption}/>
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

    return (
        <div className="h-full w-full overflow-auto">
            <Table columns={columns} data={products} nameTable={"Productos"} filters={filters} idForDelete={idForDelete} idDelete={deleteProduct}/>
        </div>
    );
};
export default ProductsTable;
