import { 
    useReactTable, getCoreRowModel,flexRender
 } from "@tanstack/react-table";

import data from "../../JSON/ordersData.json";
import {P} from './ui/indexUi'

const Table = () => {
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

  const table = useReactTable({ data, columns, getCoreRowModel:
    getCoreRowModel(), });

  return (
    <div className="flex justify-center h-full overflow-auto p-5">
      <div className="col-span-12 w-full">
        <div className="overflow-auto lg:overflow-visible">
          <table className="table text-dTextNeu space-y-6 w-full">

            <thead className="bg-gray-800 text-dTextNeu">
                    {
                        table.getHeaderGroups().map(headerGroup => (
                            <tr key={headerGroup.id}>
                                {
                                    headerGroup.headers.map(header =>(
                                        <th className='p-2' key={header.id}>
                                            <P 
                                            text={flexRender(header.column.columnDef.header, header.getContext())}
                                            styles='font-black'
                                            />
                                        </th>
                                    ))
                                }
                            </tr>
                        ))
                    }
            </thead>

            <tbody>
                {
                    table.getRowModel().rows.map(row => (
                        <tr className="mt-12 hover:bg-dBackground rounded-xl" key={row.id}>
                            {
                                row.getVisibleCells().map(cell => (
                                    <td className={`p-2 ${row.id % 2 === 0 ? '':'bg-dHover'} `}>
                                        <P
                                        text={flexRender(cell.column.columnDef.cell, cell.getContext())}
                                        />
                                    </td>
                                ))
                            }
                        </tr>
                    ))
                }
            </tbody>

          </table>
        </div>
      </div>
    </div>
  );
};

export default Table;
