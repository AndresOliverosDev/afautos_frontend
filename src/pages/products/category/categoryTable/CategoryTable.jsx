import { Button, Icon, Table, TableBody, TableHead } from "@tremor/react";
import useCategory from "../../../../hooks/products/useCategory";
import useActionsTable from "../../../../hooks/ui/useActionsTable";
import { RiEditBoxLine, RiFileSearchLine, RiLoader5Line } from "react-icons/ri";
import { ActionButtons, ErrorComponent, LoadingComponent, SimpleTable } from "../../../../components/ui/index";
import { TableCell, TableRow } from "@tremor/react";
import { columns, filters } from "./categoryDataTable"
import CategoryForm from "../CategoryForm";

const CategoryTable = () => {
    // Data
    const { categoryData, loading, error } = useCategory();
    console.log(categoryData);

    // Actions Button Table
    const { createIsOpen, handleCloseCreate } = useActionsTable();

    const renderActionButtons = (row) => (
        <ActionButtons
            editAction={() => alert("Editar")}
            deleteAction={() => alert("Eliminar")}
        />
    );

    const additionalButton = (
        <Button onClick={handleCloseCreate}>
            Crear Categoría
        </Button>
    );

    const renderContent = () => {

        // Loading component

        if (loading) {
            return (
                <div className="h-full w-full flex items-center justify-center">
                    <LoadingComponent name={"categorías"} />
                </div>
            )
        }

        // Error component

        if (error) {
            return (
                <div className="flex h-full items-center justify-center">
                    <ErrorComponent codeError={error.code} textError={error.message} />
                </div>
            )
        }

        // Table component

        return (
            
            <div className="h-full w-full flex overflow-auto justify-center items-center">
                <CategoryForm
                    isOpen={createIsOpen}
                    onClose={handleCloseCreate}
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
