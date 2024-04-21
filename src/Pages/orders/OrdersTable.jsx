import SimpleTable from "../../components/table/SimpleTable.jsx";
import useProducts from "../../hooks/useProduct.js";

const ProductsTable = () => {
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

    return (
        <div className="h-full w-full overflow-auto">
            <SimpleTable columns={columns} data={products} nameTable={"Pedidos"} filters={filters} delete1={handleDelete} />
        </div>
    );
};

export default ProductsTable;
