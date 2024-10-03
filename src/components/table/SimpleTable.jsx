import React, { useState } from "react";
import {
  useReactTable,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  flexRender,
} from "@tanstack/react-table";
import {
  Card, Table, TableBody, TableCell, TableHead, TableHeaderCell, TableRow,
} from "@tremor/react";
import TableHeader from "./TableHeader";
import TableFooter from "./TableFooter";
import { RiArrowDownSLine } from "react-icons/ri";

const SimpleTable = ({ renderActionButtons, columns, data, nameTable, filters, additionalButton, reloadAction }) => {
  const [globalFilter, setGlobalFilter] = useState("");
  const [pagination, setPagination] = useState({ pageIndex: 0, pageSize: 6 });

  const table = useReactTable({
    data,
    columns,
    state: {
      globalFilter,
      pagination,
    },
    onGlobalFilterChange: setGlobalFilter,
    onPaginationChange: setPagination,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    globalFilterFn: "includesString",
  });

  const formatPrice = (price) => {
    return typeof price === "number" ? price.toLocaleString() : price;
  };

  return (
    <div className="flex flex-col gap-2 h-full overflow-auto w-full">
      <TableHeader 
        title={nameTable} 
        filters={filters}
        globalFilter={globalFilter}
        setGlobalFilter={setGlobalFilter}
        additionalButton={additionalButton}
        reloadAction={reloadAction}
      />
      <Card className="py-1">
        <Table>
          <TableHead>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHeaderCell key={header.id}>
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
                {renderActionButtons && (
                  <TableHeaderCell>
                    Acciones
                  </TableHeaderCell>
                )}
              </TableRow>
            ))}
          </TableHead>
          <TableBody>
            {table.getRowModel().rows.map((row) => (
              <TableRow key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id} className="px-4 py-2 max-w-48 text-wrap overflow-hidden overflow-ellipsis whitespace-nowrap">
                    {cell.column.columnDef.isImage && cell.column.columnDef.accessorKey && cell.getValue() ? (
                      <img src={cell.getValue()} alt={cell.column.columnDef.header} className="w-12 h-12 object-cover rounded-full" />
                    ) : cell.column.columnDef.isPrice === true ? (
                      `$ ${formatPrice(cell.getValue())}`
                    ) : (
                      flexRender(cell.column.columnDef.cell, cell.getContext())
                    )}
                  </TableCell>
                ))}
                {renderActionButtons && (
                  <TableCell>
                    {renderActionButtons(row.original)}
                  </TableCell>
                )}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
      <TableFooter
        pageCount={table.getPageCount()}
        pageIndex={pagination.pageIndex}
        setPageIndex={(pageIndex) => setPagination((prev) => ({ ...prev, pageIndex }))}
        canPreviousPage={table.getCanPreviousPage()}
        canNextPage={table.getCanNextPage()}
        nextPage={() => table.nextPage()}
        previousPage={() => table.previousPage()}
      />
    </div>
  );
};

export default SimpleTable;
