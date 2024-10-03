import React from "react";
import { Card, Icon } from "@tremor/react";
import { RiTwitterXLine } from "react-icons/ri";
import TableFilters from "./TableFilters";

const TableHeader = ({ title, filters, globalFilter, setGlobalFilter, additionalButton, reloadAction }) => {
  return (
    <Card className="flex flex-col gap-1 p-0">
      <div className="flex items-center justify-between border-b dark:border-slate-700 p-5">
        <h1 className="text-tremor-title font-semibold">{title}</h1>
        <div className="flex gap-2">
          {additionalButton && additionalButton}
          <Icon icon={RiTwitterXLine} variant="outlined" />
        </div>
      </div>
      <TableFilters filters={filters} globalFilter={globalFilter} setGlobalFilter={setGlobalFilter} reloadAction={reloadAction}/>
    </Card>
  );
};

export default TableHeader;
