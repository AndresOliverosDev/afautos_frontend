import { Button, Icon } from "@tremor/react";
import useOrder from "../../hooks/order/useOrder"
import useActionsTable from "../../hooks/ui/useActionsTable";
import { RiEditBoxLine, RiFileSearchLine } from "react-icons/ri";
import { SimpleTable } from "../../components/table";
import {columns, filters} from "./orderDataTable"

const OrderTable = () => {

    const {orders} = useOrder();

    const {
        detailsIsOpen,
        handleCloseDetails,
        selectDetailData,
        handleSelectDetailData,
        createIsOpen,
        handleCloseCreate
    } = useActionsTable();

    const renderActionButtons = (row) => (
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
                data={orders}
                nameTable={"Pedidos"}
                filters={filters}
                renderActionButtons={renderActionButtons}
                additionalButton={additionalButton}
            />
        </div>
    );
};

export default OrderTable;
