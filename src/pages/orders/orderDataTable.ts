export const columns = [
    {
        header: "ID",
        accessorKey: "id",
        filter: "text",
    },
    {
        header: "Fecha",
        accessorKey: "date",
        filter: "date",
    },
    {
        header: "Estado",
        accessorKey: "state",
        filter: "text",
    },
    {
        header: "Observaciones",
        accessorKey: "observations",
        filter: "text",
    },
    {
        header: "ID de Venta",
        accessorKey: "saleId",
        filter: "number",
    },
    {
        header: "Empleado",
        accessorKey: "employee",
        filter: "text",
    }
];

/** Table Filters - TanStackTable */
export const filters = [
    {
        index: 0,
        name: "Estados Activos"
    },
    {
        index: 1,
        name: "Observaciones Presentes"
    },
];