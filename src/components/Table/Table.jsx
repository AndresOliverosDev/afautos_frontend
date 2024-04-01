// React Icons
import {
  RiArrowDownSLine,
  RiSearch2Line,
  RiMenuLine,
  RiCloseLine
} from "react-icons/ri";
// TanStackTable
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  getFilteredRowModel,
  getPaginationRowModel,
} from "@tanstack/react-table";
import { useState } from "react";
// Tremor UI
import { Button, Card, Table, TableBody, TableCell, TableHead, TableHeaderCell, TableRow, TextInput, Select, SelectItem } from "@tremor/react";

const TableMain = ({ columns, data, nameTable, filters, onCellClick  }) => {
  // States
  const [filtering, setFiltering] = useState("");
  const [showMenu, setShowMenu] = useState(false);
  const [pagination, setPagination] = useState({
    pageIndex: 0, //initial page index
    pageSize: 10, //default page size
  });

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  // Table Structure
  const table = useReactTable({
    columns,
    data,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    state: {
      pagination,
    },
  });

  return (
    <div className="flex flex-col gap-2 h-full">
      {/* Table Menu For Desktop */}
      <Card className="flex h-12 items-center justify-between gap-4 text-sm">

        {/* Table Title */}
        <h1 className="text-tremor-content-strong dark:text-dark-tremor-content-strong font-semibold ml-4 text-xl ">
          {nameTable}
        </h1>

        {/* Table Toggle Menu  */}
        <button className="sm:hidden" onClick={toggleMenu}>
          {showMenu ? (
            <RiCloseLine className="h-6 w-6 text-gray-300 hover:text-gray-400" />
          ) : (
            <RiMenuLine className="h-6 w-6 text-gray-300 hover:text-gray-400" />
          )}
        </button>

        {/* Table Menu Options */}
        <div className=" hidden sm:flex items-center sm:gap-3">
          <TextInput
            type="text"
            name="search"
            value={filtering}
            placeholder="Buscar"
            onChange={(e) => setFiltering(e.target.value)} />
          <Select>
            {
              filters.map((filter) => (
                <SelectItem value={filter.index} className="cursor-pointer">{filter.name}</SelectItem>
              ))
            }
          </Select>
        </div>
      </Card>

      {/* Table Menu For Mobile */}
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

      {/* Table */}
      <Card className="overflow-auto">
        <Table className="overflow-auto">

          {/* Table Head */}
          <TableHead>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header, index) => (
                  <TableHeaderCell
                    key={index}
                  >
                    <span
                      className={`flex items-center gap-1 ${header.column.columnDef.isFilter
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
                  </TableHeaderCell>
                ))}
              </TableRow>
            ))}
          </TableHead>

          {/* Table Body */}
          <TableBody>
            {data.map((row, rowIndex) => (
              <TableRow key={rowIndex}>
                {columns.map((column, colIndex) => (
                  <TableCell key={colIndex} className="px-5 py-2.5">
                    {column.isImage && column.accessorKey && row[column.accessorKey] ? (
                      <img src={row[column.accessorKey]} alt={column.header} className="w-12 h-12 object-cover rounded-full" />
                    ) : column.cell ? (
                      column.cell()
                    ) : (
                      row[column.accessorKey]
                    )}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>

      {/* Table Pagination */}
      <Card className="flex justify-center gap-4 py-2 h-12 text-sm">
        <Button
          variant="primary"
          onClick={() => table.previousPage()}
        >
          Pagina Anterior
        </Button>

        <Button
          variant="secondary"
          onClick={() => table.nextPage()}
        >
          Pagina Siguiente
        </Button>

      </Card>
    </div>
  );
};

export default TableMain;

