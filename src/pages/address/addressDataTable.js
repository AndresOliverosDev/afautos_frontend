export const columns = [
    {
        header: "ID",
        accessorKey: "id",
    },
    {
        header: "Referencia",
        accessorKey: "ref",
    },
    {
        header: "Barrio",
        accessorKey: "neighborhoodId",
    },
    {
        header: "Usuario",
        accessorKey: "userId",
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