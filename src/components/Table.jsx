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
    <div className="dark:bg-cnt-primary-dark flex h-full justify-center overflow-auto rounded-3xl bg-ctn-primary-light p-5">
      <div className="col-span-12 w-full">
        <div className="overflow-auto lg:overflow-visible">
          <table className="text-dTextNeu table w-full space-y-6 rounded-2xl">
            <thead className="text-dTextNeu rounded-2xl dark:bg-bg-dark">
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
                  className="hover:bg-dBackground mt-12 rounded-xl"
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
