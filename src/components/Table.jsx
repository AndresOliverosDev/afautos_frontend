import {
  useReactTable,
  getCoreRowModel,
  flexRender,
} from "@tanstack/react-table";

import { P } from "./ui/indexUi";

const Table = ({ columns, data }) => {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="flex justify-center h-full overflow-auto p-5 rounded-3xl dark:bg-cnt-primary-dark bg-ctn-primary-light">
      <div className="col-span-12 w-full">
        <div className="overflow-auto lg:overflow-visible">
          <table className="table text-dTextNeu space-y-6 w-full rounded-2xl">
            <thead className="text-dTextNeu dark:bg-bg-dark rounded-2xl">
              {table.getHeaderGroups().map((headerGroup) => (
                <tr className="" key={headerGroup.id}>
                  {headerGroup.headers.map((header) => (
                    <th className="p-2" key={header.id}>
                      <P
                        text={flexRender(
                          header.column.columnDef.header,
                          header.getContext(),
                        )}
                        styles="font-black"
                      />
                    </th>
                  ))}
                </tr>
              ))}
            </thead>

            <tbody>
              {table.getRowModel().rows.map((row) => (
                <tr
                  className="mt-12 hover:bg-dBackground rounded-xl"
                  key={row.id}
                >
                  {row.getVisibleCells().map((cell) => (
                    <td
                      className={`p-2 ${row.id % 2 === 0 ? "" : "bg-dHover"} `}
                    >
                      <P
                        text={flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext(),
                        )}
                      />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Table;
