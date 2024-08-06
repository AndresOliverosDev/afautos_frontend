import React, { useState, useEffect } from "react";
import useCategory from "../../../../hooks/products/useCategory";
import useActionsTable from "../../../../hooks/ui/useActionsTable";
import { Button } from "@tremor/react";
import { ActionButtons, ErrorComponent, LoadingComponent, SimpleTable } from "../../../../components/ui/index";
import DialogDelete from "../../../../components/ui/dialog/DialogDelete";
import { columns, filters } from "./categoryDataTable";
import CategoryForm from "../CategoryForm";

const CategoryTable = () => {

    const {
        categoryData,
        deleteCategory,
        loading,
        error,
        messages,
        createCategory
    } = useCategory();

    const [selectedCategory, setSelectedCategory] = useState(null);

    const {
        createIsOpen,
        deleteIsOpen,
        handleCloseCreate,
        handleCloseDelete
    } = useActionsTable();

    const handleCreate = async (category) => {
        await createCategory(category);
        handleCloseCreate();
    };

    const handleDelete = async () => {
        if (selectedCategory) {
            await deleteCategory(selectedCategory.id);
        }
    };

    const renderActionButtons = (row) => (
        <ActionButtons
            editAction={() => alert("Editar")}
            deleteAction={() => {
                setSelectedCategory(row);
                handleCloseDelete();
            }}
        />
    );

    const additionalButton = (
        <Button onClick={handleCloseCreate}>
            Crear Categoría
        </Button>
    );

    const renderContent = () => {
        if (loading) {
            return (
                <div className="h-full w-full flex items-center justify-center">
                    <LoadingComponent name={"categorías"} />
                </div>
            );
        }

        if (error) {
            return (
                <div className="flex h-full items-center justify-center">
                    <ErrorComponent codeError={error.code} textError={error.message} />
                </div>
            );
        }

        return (
            <div className="h-full w-full flex overflow-auto justify-center items-center">
                <CategoryForm
                    isOpen={createIsOpen}
                    onClose={handleCloseCreate}
                    onCreate={handleCreate}
                />
                <DialogDelete
                    isOpen={deleteIsOpen}
                    onClose={handleCloseDelete}
                    nameObject={selectedCategory ? selectedCategory.name : ""}
                    deleteAPI={handleDelete}
                    messages={messages}
                />
                <SimpleTable
                    additionalButton={additionalButton}
                    nameTable={"Categorías"}
                    data={categoryData}
                    renderActionButtons={renderActionButtons}
                    columns={columns}
                    filters={filters}
                />
            </div>
        );
    };

    return (
        <>
            {renderContent()}
        </>
    );
};

export default CategoryTable;
