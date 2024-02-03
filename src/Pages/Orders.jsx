/** Orders Data */
import data from "../../JSON/ordersData.json";

import Table from "../components/Table";

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
    },
    {
      header: "Estado",
      accessorKey: "estado",
    },
  ];

  return (
    <div className="h-full w-full">
      <Table columns={columns} data={data} />
    </div>
  );
};
export default Orders;
