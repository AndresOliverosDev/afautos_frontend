// React Icons
import {
  RiArrowDownSLine,
  RiFileSearchLine,
  RiDeleteBin7Line,
  RiEditBoxLine
} from "react-icons/ri";
// TanStackTable
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  getPaginationRowModel,
} from "@tanstack/react-table";
import { useState } from "react";
// Tremor UI
import {
  Button, Card, Table, TableBody, TableCell, TableHead, TableHeaderCell, TableRow, TextInput, Select, Icon, SelectItem
} from "@tremor/react";
import TableHeader from "./TableHeader";
import TableFooter from "./TableFooter";

const SimpleTabla = ({ columns, data, nameTable, filters, delete1, buttonAdd }) => {
  // States
  const [filtering, setFiltering] = useState("");
  const [showMenu, setShowMenu] = useState(false);
  const [pagination, setPagination] = useState({
    pageIndex: 0, //initial page index
    pageSize: 10, //default page size
  });

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
    <div className="flex flex-col gap-2 h-full overflow-auto w-full">

      <TableHeader title={nameTable} buttonAdd={buttonAdd}/>
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
                    <Icon icon={RiDeleteBin7Line} variant="shadow" tooltip="Eliminar" size="xs"
                      onClick={() => delete1(row.id)}
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

