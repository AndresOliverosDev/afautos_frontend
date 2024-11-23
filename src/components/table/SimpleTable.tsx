import React, { useState, useMemo } from "react";
import { RiAddLargeFill, RiAddLine, RiArrowDownSLine, RiLoader4Fill, RiLoopRightLine, RiSearch2Line } from "react-icons/ri"; // Icono
import { Button, TextInput } from "../ui";

interface Column<TData> {
  header: any;
  accessorKey: any;
  isImage?: any;
  isPrice?: any;
  isFilter?: any;
}

interface SimpleTableProps<TData> {
  renderActionButtons?: (row: TData) => React.ReactNode;
  columns: Column<TData>[];
  data: TData[];
  nameTable: string;
  reloadTable?: () => void;
  handleCreate?: () => void;
}

const SimpleTable = <TData extends Record<string, any>>({
  renderActionButtons,
  columns,
  data,
  nameTable,
  reloadTable,
  handleCreate
}: SimpleTableProps<TData>) => {
  const [globalFilter, setGlobalFilter] = useState<string>("");
  const [pagination, setPagination] = useState({ pageIndex: 0, pageSize: 6 });

  const filteredData = useMemo(() => {
    if (!globalFilter) return data;
    return data.filter((item) =>
      Object.keys(item).some((key) =>
        String(item[key]).toLowerCase().includes(globalFilter.toLowerCase())
      )
    );
  }, [data, globalFilter]);

  const paginatedData = useMemo(() => {
    const start = pagination.pageIndex * pagination.pageSize;
    return filteredData.slice(start, start + pagination.pageSize);
  }, [filteredData, pagination]);

  const formatPrice = (price: unknown) => {
    return typeof price === "number" ? price.toLocaleString() : price;
  };

  const action = true

  return (
    <div className="flex flex-col gap-2 h-full overflow-auto w-full">
      <div className="flex flex-col gap-2 overflow-auto w-full">
        <div className="flex items-center px-6 pt-4">
          {/* Contenedor para el input y el botón */}
          <div className="flex gap-2 justify-end items-center w-full max-w-xs">
            <div className="p-1.5 border rounded-default border-light-border dark:border-dark-border">
              <RiSearch2Line className="h-5 w-5" />
            </div>
            <TextInput
              className="max-w-xs"
              type="text"
              placeholder="Buscar..."
              value={globalFilter}
              onChange={(e) => setGlobalFilter(e.target.value)}
            />
          </div>
          <div className="flex-grow flex items-center justify-end gap-10">
            <div className="flex gap-4">
              {
                reloadTable &&
                <Button
                  variant="ghost"
                  onClick={reloadTable}
                  className="px-7 border dark:border-dark-border border-light-border hover:border-none"
                >
                  <RiLoopRightLine />
                </Button>

              }
              {
                handleCreate &&
                <Button
                  onClick={handleCreate}
                  className="px-7 gap-2"
                >
                  <RiAddLine className="mr-1" /> Crear {nameTable.slice(0, -1)}
                </Button>

              }
            </div>
          </div>
        </div>
      </div>

      {/* Cuerpo de la tabla */}
      <div className="w-full overflow-auto whitespace-nowrap">
        <table className="min-w-full table-auto w-full caption-bottom">
          <thead className="bg-sky-50 dark:bg-dark-card-muted">
            <tr>
              {columns.map((column, index) => (
                <th
                  key={index}
                  className="py-1.5 px-4 text-left text-sm font-semibold text-gray-900 dark:text-gray-50"
                >
                  <div className={`flex items-center gap-1 ${column.isFilter ? "cursor-pointer hover:text-gray-700" : ""}`}>
                    {column.header}
                    {column.isFilter && <RiArrowDownSLine />}
                  </div>
                </th>
              ))}
              {renderActionButtons && <th className="px-4 text-end text-sm font-semibold text-gray-900 dark:text-gray-50 pr-7">Acciones</th>}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 dark:divide-gray-800">
            {paginatedData.map((row, rowIndex) => (
              <tr key={rowIndex} className="[&_td:last-child]:pr-4 [&_th:last-child]:pr-4 [&_td:first-child]:pl-4 [&_th:first-child]:pl-4 border-b border-gray-200 dark:border-gray-800">
                {columns.map((column, colIndex) => (
                  <td key={colIndex} className="px-4 py-2 max-w-xs truncate p-4 text-sm text-gray-600 dark:text-gray-400">
                    {column.isImage && row[column.accessorKey] ? (
                      <img
                        src={String(row[column.accessorKey])}
                        alt={String(column.header)}
                        className="w-12 h-12 object-cover rounded-full"
                      />
                    ) : column.isPrice ? (
                      `$ ${formatPrice(row[column.accessorKey])}`
                    ) : (
                      String(row[column.accessorKey])
                    )}
                  </td>
                ))}
                {renderActionButtons && (
                  <td className="py-2 text-sm text-gray-600 dark:text-gray-400 text-right">
                    {renderActionButtons(row)}
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>


      {/* Pagination */}
      <div className="w-full flex justify-center mt-2">
        <div className="flex justify-center items-center gap-3 bg-dark-card-subtle w-fit rounded-default">
          <Button
            onClick={() => setPagination((prev) => ({ ...prev, pageIndex: prev.pageIndex - 1 }))}
            disabled={pagination.pageIndex === 0}
          >
            Anterior
          </Button>
          <p className="text-label">
            Página {pagination.pageIndex + 1} de {Math.ceil(filteredData.length / pagination.pageSize)}
          </p>
          <Button
            onClick={() => setPagination((prev) => ({ ...prev, pageIndex: prev.pageIndex + 1 }))}
            disabled={pagination.pageIndex + 1 >= Math.ceil(filteredData.length / pagination.pageSize)}
          >
            Siguiente
          </Button>
        </div>
      </div>


    </div>
  );
};

export default SimpleTable;