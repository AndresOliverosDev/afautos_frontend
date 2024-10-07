import React from "react";
import { RiEditBoxLine, RiFileSearchLine } from "react-icons/ri";
import useSale from "../../../hooks/sale/useSale";
import useActionsTable from "../../../hooks/ui/useActionsTable";
import { Button, Icon } from "@tremor/react";
import { columns, filters } from "./saleDataTable";

import { Sale } from "../../../types";
import { SimpleTable } from "../../../components/ui";

const SalesTable: React.FC = () => {
    const { sales } = useSale();

    const {
        detailsIsOpen,
        handleCloseDetails,
        selectDetailData,
        handleSelectDetailData,
        createIsOpen,
        handleCloseCreate,
    } = useActionsTable();

    const renderActionButtons = (row: Sale) => (
        <span className="flex gap-2 cursor-pointer">
            <Icon icon={RiEditBoxLine} variant="shadow" tooltip="Editar" size="xs" onClick={() => alert("Editar")} />
            <Icon icon={RiFileSearchLine} variant="shadow" tooltip="Detalles" size="xs" onClick={() => handleSelectDetailData(row)} />
        </span>
    );

    const additionalButton = (
        <Button onClick={handleCloseCreate}>
            Crear Venta
        </Button>
    );

    return (
        <div className="h-full w-full overflow-auto">
            <SimpleTable
                columns={columns}
                data={sales}
                nameTable={"Ventas"}
                renderActionButtons={renderActionButtons}
            />
        </div>
    );
};

export default SalesTable;