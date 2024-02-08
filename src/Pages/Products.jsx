import { IconTableActions } from '../components/UI/indexUi.js';
import data from '../../JSON/productsData.json'
import Table from "../components/Table/Table";
const Products = () => {

    /** Table Columns - TanStackTable */
    const columns = [
        {
            header: "ID",
            accessorKey: "id",
        },
        {
            header: "Producto",
            accessorKey: "producto",
        },
        {
            header: "Categoría",
            accessorKey: "categoria",
            isFilter: true,
        },
        {
            header: "Descripción",
            accessorKey: "descripcion",
        },
        {
            header: "Marca",
            accessorKey: "marca",
            isFilter: true,

        },
        {
            header: "Acciones",
            cell: () => (
                <IconTableActions />
            )
        },
    ];

    return (
        <div className="overflow-auto h-full w-full">
            <Table columns={columns} data={data} nameTable={'Productos'} />
        </div>
    )
};
export default Products;