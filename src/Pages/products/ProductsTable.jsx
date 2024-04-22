import { useState } from "react";
import SimpleTable from "../../components/table/SimpleTable.jsx";
import useProducts from "./../../hooks/useProduct.js";
import ProductsAdd from "./ProductsAdd.jsx";
import MyContext from "../../context/MyContext.js";

const ProductsTable = () => {

    const [isOpen, setIsOpen] = useState(true)

    const handleClose = () => {
        setIsOpen(false)
    }

    const { products, loading, error, delProduct } = useProducts();

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
    ];

    const handleDelete = (id) => {
        delProduct(id);
    };

    const handle = () => {
        console.log("hola Mundo")
    }

    const buttonAdd = {
        "text":"Añadir productos",
        "onClick":handle
    }

    return (
        <div className="h-full w-full overflow-auto">
            <ProductsAdd isOpen={isOpen}  onClose={handleClose}/>
            <SimpleTable columns={columns} data={products} nameTable={"Productos"} filters={filters} delete1={handleDelete} buttonAdd={buttonAdd}/>
        </div>
    );
};

export default ProductsTable;
