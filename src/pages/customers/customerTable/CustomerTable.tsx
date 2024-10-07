import React from "react";
import { Button, Icon } from "@tremor/react";
import useCustomer from "../../../hooks/customer/useCustomer";
import useActionsTable from "../../../hooks/ui/useActionsTable";
import CustomerCardDetail from "../customerDetails/customerDetails";
import { columns, filters } from "./customerDataTable";
import { RiEditBoxLine, RiFileSearchLine } from "react-icons/ri";
import CustomerCreate from "../customerCreate/CustomerCreate";
import { SimpleTable } from "../../../components/ui";

const CustomerTable = () => {
    const {
        customers,
        loading,
        error
    } = useCustomer();

    const {
        detailsIsOpen,
        handleCloseDetails,
        selectDetailData,
        handleSelectDetailData,
        createIsOpen,
        handleCloseCreate
    } = useActionsTable();

    const renderActionButtons = (row:any) => (
        <span className="flex gap-2 cursor-pointer">
            <Icon icon={RiEditBoxLine} variant="shadow" tooltip="Editar" size="xs" onClick={() => alert("Editar")} />
            <Icon icon={RiFileSearchLine} variant="shadow" tooltip="Detalles" size="xs" onClick={() => handleSelectDetailData(row)} />
        </span>
    );

    const additionalButton = (
        <Button onClick={handleCloseCreate}>
            Crear usuario
        </Button>
    );

    if (loading) return <p>Cargando...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <div className="h-full w-full overflow-auto">
            <CustomerCreate
                isOpen={createIsOpen}
                handleClose={handleCloseCreate} // Asegúrate de pasar la función handleCloseCreate
            />
            <CustomerCardDetail
                isOpen={detailsIsOpen}
                handleClose={handleCloseDetails}
                data={selectDetailData}
            />
            <SimpleTable
                columns={columns}
                data={customers}
                nameTable={"Clientes"}
                renderActionButtons={renderActionButtons}
            />
        </div>
    );
};

export default CustomerTable;
