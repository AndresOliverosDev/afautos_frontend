/** React Icons */
import { RiArrowDownSLine } from "react-icons/ri";

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

const Table = ({ columns, data }) => {

    //** Filtered Table State */
    const [filtering, setFiltering] = useState('')

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
        <div className="h-full dark:bg-box-dark rounded-xl shadow-m">
            <div className="bg-blue-500 h-11">
                <input type="text"
                    value={filtering}
                    placeholder="perro sin sangre"
                    onChange={e => setFiltering(e.target.value)} />
                <button className="bg-gray-900 text-white px-3 py-1 rounded-xl my-2 mx-4"
                    onClick={() => setFiltering('En proceso')}>
                    Pendiente
                </button>
            </div>
            <table className="w-full text-left text-sm text-gray-500 ">
                <thead className="dark:bg-ctn-primary-dark rounded-xl">
                    {
                        table.getHeaderGroups().map((headerGroup) => (
                            <tr key={headerGroup.id}>
                                {
                                    headerGroup.headers.map((header, index) => (
                                        <th key={index} className="px-6 py-2.5 font-medium text-gray-900">
                                            <span className={`flex items-center gap-1 text-gray-200 ${header.column.columnDef.isFilter ? "cursor-pointer hover:text-gray-700" : ""
                                                }`}>
                                                {flexRender(
                                                    header.column.columnDef.header,
                                                    header.getContext(),
                                                )}
                                                {
                                                    header.column.columnDef.isFilter ? <RiArrowDownSLine /> : ""
                                                }
                                            </span>
                                        </th>
                                    ))
                                }
                            </tr>
                        ))
                    }
                </thead>

                <tbody className="divide-y divide-gray-800">
                    {
                        table.getRowModel().rows.map((row) => (
                            <tr className="hover:bg-gray-50" key={row.id}>
                                {
                                    row.getVisibleCells().map((cell, index) => (
                                        <td key={index} className="px-5 py-2.5">
                                            {flexRender(
                                                cell.column.columnDef.cell,
                                                cell.getContext(),
                                            )}
                                        </td>
                                    ))
                                }
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            <div className="flex justify-center py-1 text-sm gap-4 text-white">
                <button className="bg-blue-900 rounded-2xl py-0.5 px-2" onClick={() => table.previousPage()}>Pagina Anterior</button>
                <button className="bg-green-900 rounded-2xl py-0.5 px-2" onClick={() => table.nextPage()}>Siguiente Pagina</button>
            </div>
        </div >
    )
}
export default Table;
