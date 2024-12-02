import { useState } from "react";
import {
    ActionButtons,
    Card,
    DialogDelete,
    ErrorComponent,
    LoadingComponent,
    SimpleTable
} from "../../components/ui";
import React from "react";
import { Customer } from "../../types";
import useCustomer from "./hooks/useCustomer"; // Hook personalizado para clientes
import CustomerForm, { CustomerData, DocType, Role } from "./components/CustomerForm";
import { columns } from "./settings/customerDataTable";
import CustomerCardDetail from "./components/customerDetails";
import { getSalesByCustomerAPI } from "../../services/sale/saleService";

const CustomerPage: React.FC = () => {
    // Custom hook para clientes
    const {
        customers,
        deleteCustomer,
        getAllCustomers,
        errorCustomers,
        loadingCustomers,
        errorCustomer,
    } = useCustomer();

    // Estados
    const [formIsOpen, setFormIsOpen] = useState<boolean>(false);
    const [selectedCustomer, setSelectedCustomer] = useState<CustomerData | null>(null);
    const [deleteIsOpen, setDeleteIsOpen] = useState<boolean>(false);
    const [detailsIsOpen, setDetailsIsOpen] = useState<boolean>(false);
    const [detailsCustomer, setDetailCustomer] = useState<Customer | []>([]);

    // Funciones de manejo de formularios y diálogos
    const toggleForm = () => setFormIsOpen(prev => !prev);
    const toggleDetails = () => setDetailsIsOpen(prev => !prev);
    const toggleDeleteDialog = () => setDeleteIsOpen(prev => !prev);

    const handleCreate = () => {
        setSelectedCustomer(null);
        toggleForm();
    };

    const rolesList: Role[] = [
        { id: 1, name: "Administrador" },
        { id: 2, name: "Logistica" },
        { id: 3, name: "Ventas" },
        { id: 4, name: "Cliente" }
    ]

    const docTypeList: DocType[] = [
        { id: 1, name: "Cedula de Ciudadania" },
        { id: 2, name: "Cedula de Extranjeria" },
        { id: 3, name: "NIT" }
    ]

    const handleDelete = () => {
        if (selectedCustomer) {
            deleteCustomer(selectedCustomer.id);
            toggleDeleteDialog();
        }
    };

    const renderActionButtons = (row: Customer) => (
        <ActionButtons
            editAction={() => {
                setSelectedCustomer(
                    {
                        "id": row.id,
                        "username": "",
                        "email": row.email,
                        "phone": row.phone,
                        "name": row.name,
                        "birthday": row.birthday,
                        "docType": 0,
                        "roles": []
                    }
                );
                toggleForm();
            }}
            deleteAction={() => {
                setSelectedCustomer(
                    {
                        "id": row.id,
                        "username": "",
                        "email": row.email,
                        "phone": row.phone,
                        "name": row.name,
                        "birthday": row.birthday,
                        "docType": 0,
                        "roles": []
                    }
                );
                toggleDeleteDialog();
            }}
            detailsAction={() => {
                setDetailCustomer(row);
                toggleDetails();
            }}
        />
    );

    const renderContent = () => {
        if (loadingCustomers) {
            return (
                <div className="h-full w-full flex items-center justify-center">
                    <LoadingComponent name="clientes" />
                </div>
            );
        }

        if (errorCustomers) {
            return (
                <div className="h-full w-full flex items-center justify-center">
                    <ErrorComponent codeError={errorCustomers.statusCode} textError={errorCustomers.message} />
                </div>
            );
        }

        return (
            <Card className="px-0 py-2">
                <DialogDelete
                    nameItem={selectedCustomer?.name || ""}
                    isOpen={deleteIsOpen}
                    onClose={toggleDeleteDialog}
                    handleDelete={handleDelete}
                    message={errorCustomer?.message || "Cliente eliminado"}
                    codeError={errorCustomer?.statusCode}
                />
                <CustomerForm
                    docTypeList={docTypeList}
                    rolesList={rolesList}
                    isOpen={formIsOpen}
                    handleClose={toggleForm}
                    customerData={selectedCustomer}
                />
                <CustomerCardDetail
                    data={
                        selectedCustomer
                            ? {
                                id: selectedCustomer.id,
                                docType:
                                    docTypeList.find(docType => docType.id === selectedCustomer.docType)?.name || "Desconocido",
                                name: selectedCustomer.name,
                            }
                            : null
                    }
                    handleClose={toggleDetails}
                    isOpen={detailsIsOpen}
                />

                <SimpleTable
                    nameTable="Clientes"
                    data={customers}
                    renderActionButtons={renderActionButtons}
                    columns={columns}
                    handleCreate={handleCreate}
                    reloadTable={getAllCustomers}
                />
                <button onClick={() => getSalesByCustomerAPI("1000253253")}>
                    djasnfjsabndfniuas
                </button>
            </Card>
        );
    };

    return <>{renderContent()}</>;
};

export default CustomerPage;