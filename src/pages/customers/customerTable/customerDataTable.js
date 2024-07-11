export const columns = [
    {
        header: "ID",
        accessorKey: "id",
        filter: "text",
    },
    {
        header: "Nombre",
        accessorKey: "name",
        filter: "text",
    },
    {
        header: "Teléfono",
        accessorKey: "phone",
        filter: "text",
    },
    {
        header: "Correo",
        accessorKey: "email",
        filter: "text",
    },
    {
        header: "Doc",
        accessorKey: "docType",
        filter: "select",
        filterOptions: [
            { value: 'DNI', label: 'DNI' },
            { value: 'Pasaporte', label: 'Pasaporte' },
            // Otros tipos de documentos
        ],
    }
];
/** Table Filters - TanStackTable */
export const filters = [
    {
        index: 1,
        name: "Activos"
    },
    {
        index: 2,
        name: "Inactivos"
    },
]