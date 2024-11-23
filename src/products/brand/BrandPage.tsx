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
import { columns } from "./settings/brandDataTable";
import useBrand from "./hooks/useBrand";
import { Brand } from "../../types";
import BrandForm from "./components/BrandForm";

const BrandPage: React.FC = () => {
    const {
        brands,
        errorBrands,
        loadingBrands,
        getAllBrands,
        deleteBrand,
        loadingBrand,
        errorBrand
    } = useBrand();

    // Estados
    const [formIsOpen, setFormIsOpen] = useState(false);
    const [selectedBrand, setSelectedBrand] = useState<Brand | null>(null);
    const [deleteIsOpen, setDeleteIsOpen] = useState(false);

    // Funciones de manejo de formularios y diálogos
    const toggleForm = () => setFormIsOpen(prev => !prev);
    const toggleDeleteDialog = () => setDeleteIsOpen(prev => !prev);

    const handleCreate = () => {
        setSelectedBrand(null);
        toggleForm();
    };

    const handleDelete = () => {
        if (selectedBrand) {
            deleteBrand(selectedBrand.id);
            toggleDeleteDialog();
        }
    };

    const renderActionButtons = (row: Brand) => (
        <ActionButtons
            editAction={() => {
                setSelectedBrand(row);
                toggleForm();
            }}
            deleteAction={() => {
                setSelectedBrand(row);
                toggleDeleteDialog();
            }}
        />
    );

    const renderContent = () => {
        if (loadingBrands) {
            return (
                <div className="h-full w-full flex items-center justify-center">
                    <LoadingComponent name="Marcas" />
                </div>
            );
        }

        if (errorBrands) {
            return (
                <div className="h-full w-full flex items-center justify-center">
                    <ErrorComponent codeError={errorBrands.statusCode} textError={errorBrands.message} />
                </div>
            );
        }

        return (
            <div className="h-full w-full flex flex-col items-center justify-center overflow-auto">
                <DialogDelete
                    nameItem={selectedBrand?.name || ""}
                    isOpen={deleteIsOpen}
                    onClose={toggleDeleteDialog}
                    handleDelete={handleDelete}
                    message={errorBrand?.message || "Marca eliminada"}
                    codeError={errorBrand?.statusCode}
                />
                <BrandForm
                    isOpen={formIsOpen}
                    onClose={toggleForm}
                    dataUpdate={selectedBrand}
                />
                <SimpleTable
                    nameTable="Marcas"
                    data={brands}
                    renderActionButtons={renderActionButtons}
                    columns={columns}
                    handleCreate={handleCreate}
                    reloadTable={getAllBrands }
                />
            </div>
        );
    };

    return <>{renderContent()}</>;
};

export default BrandPage;