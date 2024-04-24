// React Icons
import {
  RiArrowDownSLine,
  RiFileSearchLine,
  RiEditBoxLine
} from "react-icons/ri";
// TanStackTable
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
} from "@tanstack/react-table";
import { useState } from "react";
// Tremor UI
import {
  Card, Table, TableBody, TableCell, TableHead, TableHeaderCell, TableRow, Icon,
  Button
} from "@tremor/react";
import TableHeader from "./TableHeader";
import TableFooter from "./TableFooter";
import { DialogDelete } from "../ui/dialog";

const SimpleTabla = ({ columns, data, nameTable, filters, delete1, buttonAdd }) => {
  // Table Structure
  const table = useReactTable({
    columns,
    data,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="flex flex-col gap-2 h-full overflow-auto w-full">

      <TableHeader title={nameTable} buttonAdd={buttonAdd} filters={filters}/>
      {/* Table */}
      <Card className="py-1">
        <Table>
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
                <TableHeaderCell>
                  Acciones
                </TableHeaderCell>
              </TableRow>
            ))}
          </TableHead>

          {/* Table Body */}
          <TableBody>
            {data.map((row) => (
              <TableRow key={row.id}>
                {columns.map((column, colIndex) => (
                  <TableCell key={colIndex} className="px-4 py-2 max-w-48 text-wrap">
                    {column.isImage && column.accessorKey && row[column.accessorKey] ? (
                      <img src={row[column.accessorKey]} alt={column.header} className="w-12 h-12 object-cover rounded-full" />
                    ) : column.cell ? (
                      column.cell()
                    ) : (
                      row[column.accessorKey]
                    )}
                  </TableCell>
                ))}
                <TableCell>
                  <span className="flex gap-2 cursor-pointer">
                    <DialogDelete
                    nameObject={row.name}
                    deleteAPI={() => delete1(row.id)}
                    />
                    <Icon icon={RiEditBoxLine} variant="shadow" tooltip="Editar" size="xs"
                      onClick={() => alert(2)}
                    />
                    <Icon icon={RiFileSearchLine} variant="shadow" tooltip="Detalles" size="xs"
                      onClick={() => alert(3)}/>
                  </span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>

      {/* Table Pagination */}
          <TableFooter />
    </div>
  );
};

export default SimpleTabla;

