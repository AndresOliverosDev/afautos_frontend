/** React Icons */
import { RiEditLine, RiDeleteBinLine } from "react-icons/ri";

/** Orders Data */

/** Components */
import { IconTableActions } from "../components/UI";

import Table from "../components/table/Table";

const Orders = () => {
  /** Table Columns - TanStackTable */
  const columns = [
    {
      header: "ID Pedidos",
      accessorKey: "idPed",
    },
    {
      header: "Cliente",
      accessorKey: "nomClie",
    },
    {
      header: "Venta",
      accessorKey: "idVent",
    },
    {
      header: "Fecha",
      accessorKey: "fecha",
      isFilter: true,
    },
    {
      header: "Estado",
      accessorKey: "estado",
      isFilter: true,
    },
    {
      header: "Acciones",
      cell: () => <IconTableActions />,
    },
  ];

  return (
    <div className="h-full w-full overflow-auto">
      <Table columns={columns}nameTable={"Pedidos"} />
    </div>
  );
};
export default Orders;
