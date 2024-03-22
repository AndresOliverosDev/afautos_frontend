import React from "react";
import {
  RiArrowDownSLine,
  RiSearch2Line,
  RiMenuLine,
  RiCloseLine
} from "react-icons/ri";
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  getPaginationRowModel,
  getFilteredRowModel,
} from "@tanstack/react-table";
import { useState } from "react";

const Table = ({ columns, data, nameTable }) => {
  const [filtering, setFiltering] = useState("");
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

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
    <div className="shadow-m h-auto w-full rounded-xl dark:bg-box-dark overflow-x-auto">
      <div className="flex h-12 items-center justify-between gap-4 text-sm mr-2">
        <h1 className="ml-4 text-xl font-semibold text-gray-200">
          {nameTable}
        </h1>
        <button className="sm:hidden" onClick={toggleMenu}>
          {showMenu ? (
            <RiCloseLine className="h-6 w-6 text-gray-300 hover:text-gray-400" />
          ) : (
            <RiMenuLine className="h-6 w-6 text-gray-300 hover:text-gray-400" />
          )}
        </button>
        <div className="hidden sm:flex items-center">
          <div className="flex items-center">
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
          </div>
          <button
            className="mx-4 flex h-7 items-center gap-1 rounded-xl bg-purple-900 px-4 py-1 text-white"
            onClick={() => setFiltering("En proceso")}
          >
            Filtrar
            <RiArrowDownSLine />
          </button>
        </div>
      </div>

      {showMenu && (
        <div className="sm:hidden flex flex-col items-center justify-center gap-4">
          <div className="flex items-center">
            <input
              type="text"
              name="search"
              value={filtering}
              placeholder="Buscar"
              onChange={(e) => setFiltering(e.target.value)}
              className="h-7 rounded-full pl-3"
            />
            <label
              className="h-7 w-7 cursor-pointer rounded-full bg-purple-900 p-1 text-gray-300"
              htmlFor="search"
            >
              <RiSearch2Line className="h-5 w-5" />
            </label>
          </div>
          <button
            className="flex h-7 items-center gap-1 rounded-xl bg-purple-900 px-4 py-1 text-white"
            onClick={() => setFiltering("En proceso")}
          >
            Filtrar
            <RiArrowDownSLine />
          </button>
        </div>
      )}

      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm text-gray-500">
          <thead className="rounded-xl dark:bg-ctn-primary-dark">
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header, index) => (
                  <th
                    key={index}
                    className="px-6 py-2.5 font-medium text-gray-900"
                  >
                    <span
                      className={`flex items-center gap-1 text-gray-200 ${header.column.columnDef.isFilter
                          ? "cursor-pointer hover:text-gray-700"
                          : ""
                        }`}
                    >
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext()
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

          <tbody className="divide-y divide-gray-800">
            {data.map((row, rowIndex) => (
              <tr key={rowIndex} className="hover:bg-bg-dark">
                {columns.map((column, colIndex) => (
                  <td key={colIndex} className="px-5 py-2.5">
                    {column.isImage && column.accessorKey && row[column.accessorKey] ? (
                      <img src={row[column.accessorKey]} alt={column.header} className="w-16 h-16 object-cover rounded-full" />
                    ) : (
                      row[column.accessorKey]
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
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

