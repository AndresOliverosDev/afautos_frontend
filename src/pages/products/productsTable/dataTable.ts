export const columns = [
    {
        header: "Imagen",
        accessorKey: "image",
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
        header: "Cantidad",
        accessorKey: "quantity",
    },
    {
        header: "Precio",
        accessorKey: "price",
        isFilter: true,
        isPrice:true
    },
    {
        header: "Categoría",
        accessorKey: "category",
        isFilter: true,
    },
    {
        header: "Marca",
        accessorKey: "brand",
        isFilter: true,
    },
];

export const filters = [
    {
        index: 1,
        name: "Mayor a menor"
    },
    {
        index: 2,
        name: "Menor a mayor"
    },
];