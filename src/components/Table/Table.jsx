/** React Icons */
import { RiArrowDownSLine, RiSearch2Line } from "react-icons/ri";

/** TanStack Table Components */
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  getPaginationRowModel,
  getFilteredRowModel,
} from "@tanstack/react-table";

/** React Hooks */
import { useState } from "react";

const Table = ({ columns, data, nameTable }) => {
  //** Filtered Table State */
  const [filtering, setFiltering] = useState("");

  /** Table Structure */
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onGlobalFilterChange: setFiltering,
    state: {
      globalFilter: filtering,
    },
  });

  return (
    <div className="shadow-m h-auto w-full rounded-xl dark:bg-box-dark">
      <div className="flex h-12 items-center justify-between gap-4 text-sm">
        {/* Header de la tabla */}
        <h1 className="ml-4 text-xl font-semibold text-gray-200">
          {nameTable}
        </h1>
        <span className="flex items-center">
          <input
            type="text"
            name="search"
            value={filtering}
            placeholder="Buscar"
            onChange={(e) => setFiltering(e.target.value)}
            className="h-7 rounded-full pl-3"
          />
          <label
            className="ml-2 h-7 w-7 cursor-pointer rounded-full bg-purple-900 p-1 text-gray-300"
            htmlFor="search"
          >
            <RiSearch2Line className="h-5 w-5" />
          </label>
          <button
            className="mx-4 flex h-7 items-center gap-1 rounded-xl bg-purple-900 px-4 py-1 text-white"
            onClick={() => setFiltering("En proceso")}
          >
            Filtrar
            <RiArrowDownSLine />
          </button>
        </span>
      </div>

      {/* Table Content*/}
      <table className="w-full text-left text-sm text-gray-500 ">
        {/* Table Header */}
        <thead className="rounded-xl dark:bg-ctn-primary-dark">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header, index) => (
                <th
                  key={index}
                  className="px-6 py-2.5 font-medium text-gray-900"
                >
                  <span
                    className={`flex items-center gap-1 text-gray-200 ${
                      header.column.columnDef.isFilter
                        ? "cursor-pointer hover:text-gray-700"
                        : ""
                    }`}
                  >
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext(),
                    )}
                    {header.column.columnDef.isFilter ? (
                      <RiArrowDownSLine />
                    ) : (
                      ""
                    )}
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>

        {/* Table Content*/}

        <tbody className="divide-y divide-gray-800">
          {table.getRowModel().rows.map((row) => (
            <tr className="hover:bg-bg-dark" key={row.id}>
              {row.getVisibleCells().map((cell, index) => (
                <td key={index} className="px-5 py-2.5">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-center gap-4 py-1 text-sm text-white">
        <button
          className="rounded-2xl bg-blue-900 px-2 py-0.5"
          onClick={() => table.previousPage()}
        >
          Pagina Anterior
        </button>
        <button
          className="rounded-2xl bg-green-900 px-2 py-0.5"
          onClick={() => table.nextPage()}
        >
          Siguiente Pagina
        </button>
      </div>
    </div>
  );
};
export default Table;
