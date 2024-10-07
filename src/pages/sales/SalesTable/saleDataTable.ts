export const columns = [
    {
        header: "ID",
        accessorKey: "id",
        filter: "text",
    },
    {
        header: "Fecha de Venta",
        accessorKey: "saleDate",
        filter: "date",
    },
    {
        header: "Método de Pago",
        accessorKey: "payMethod",
        filter: "text",
    },
    {
        header: "Precio Total",
        accessorKey: "totalPrice",
        filter: "number",
    },
    {
        header: "Dirección",
        accessorKey: "address",
        filter: "text",
    },
    {
        header: "Cliente",
        accessorKey: "customer",
        filter: "text",
    }
];

/** Table Filters - TanStackTable */
export const filters = [
    {
        index: 0,
        name: "Ventas de Hoy"
    },
    {
        index: 1,
        name: "Ventas de la Semana"
    },
];
