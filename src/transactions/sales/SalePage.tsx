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
import { columns } from "./settings/saleDataTable";
import { Sale } from '../../types/transactions/sale';
import useSale from "./hooks/useSale";
import SaleForm from "./components/SaleForm";

const SalePage: React.FC = () => {

    // Estados
    const [formIsOpen, setFormIsOpen] = useState(false);
    const [selectedSale, setSelectedSales] = useState<Sale | null>(null);
    const [deleteIsOpen, setDeleteIsOpen] = useState(false);

    // Funciones de manejo de formularios y diálogos
    const toggleForm = () => setFormIsOpen(prev => !prev);
    const toggleDeleteDialog = () => setDeleteIsOpen(prev => !prev);
    // Custom hook de las ventas
    const { sales, deleteSale, loadingSale, loadingSales, errorSales, errorSale, getAllSales } = useSale();

    const handleCreate = () => {
        setSelectedSales(null);
        toggleForm();
    };

    const handleDelete = () => {
        if (selectedSale) {
            deleteSale(selectedSale.id);
            toggleDeleteDialog();
        }
    };

    const renderActionButtons = (row: Sale) => (
        <ActionButtons
            editAction={() => {
                setSelectedSales(row);
                toggleForm();
            }}
            deleteAction={() => {
                setSelectedSales(row);
                toggleDeleteDialog();
            }}
        />
    );

    const renderContent = () => {
        if (loadingSales) {
            return (
                <div className="h-full w-full flex items-center justify-center">
                    <LoadingComponent name="Marcas" />
                </div>
            );
        }

        if (errorSales) {
            return (
                <div className="h-full w-full flex items-center justify-center">
                    <ErrorComponent codeError={errorSales.statusCode} textError={errorSales.message} />
                </div>
            );
        }

        return (
            <Card className="px-0 py-2">
                <DialogDelete
                    nameItem={selectedSale?.id || ""}
                    nameModule="venta"
                    isOpen={deleteIsOpen}
                    onClose={toggleDeleteDialog}
                    handleDelete={handleDelete}
                    message={errorSale?.message || "Marca eliminada"}
                    codeError={errorSale?.statusCode}
                />
                <SimpleTable
                    nameTable="Marcas"
                    data={sales}
                    renderActionButtons={renderActionButtons}
                    columns={columns}
                    handleCreate={handleCreate}
                    reloadTable={ getAllSales }
                />
                <SaleForm
                    isOpen={formIsOpen}
                    onClose={toggleForm}
                    dataUpdate={selectedSale}
                    />
            </Card>
        );
    };

    return <>{renderContent()}</>;
};

export default SalePage;