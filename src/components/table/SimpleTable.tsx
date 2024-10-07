import React, { useState, useMemo } from "react";
import { RiArrowDownSLine } from "react-icons/ri"; // Icono
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
  reloadAction?: () => void;
}

const SimpleTable = <TData extends Record<string, any>>({
  renderActionButtons,
  columns,
  data,
  nameTable,
  reloadAction,
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
      <div className="flex items-center justify-between">
        {/* Input de la tabla */}
        <div>
          <TextInput
            type="text"
            placeholder="Buscar..."
            value={globalFilter}
            onChange={(e) => setGlobalFilter(e.target.value)}
          />
        </div>
        {/** Titulo de la tabla */}
        <div className="flex items-center gap-2 justify-center">
          <h1 className="text-xl font-bold">{nameTable}</h1>
        </div>
        <button onClick={reloadAction} className="">
          R
        </button>
      </div>

      {/* Cuerpo de la tabla */}
      <div className=" rounded w-full overflow-auto whitespace-nowrap">
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
              {renderActionButtons && <th className="px-4 text-left text-sm font-semibold text-gray-900 dark:text-gray-50 ">Acciones</th>}
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
                  <td className="px-4 py-2 p-4 text-sm text-gray-600 dark:text-gray-400">
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