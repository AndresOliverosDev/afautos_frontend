import { useState } from "react";
import useCategory from "./hooks/useCategory";
import {
    ActionButtons,
    Card,
    DialogDelete,
    ErrorComponent,
    LoadingComponent,
    SimpleTable
} from "../../components/ui";
import React from "react";
import CategoryForm from "./components/CategoryForm";
import { columns } from "./settings/categoryDataTable";
import { Category } from "../../types";

const CategoryPage: React.FC = () => {
    const { categories, errorCategories, loadingCategories, deleteCategory, errorCategory } = useCategory();

    // Estados
    const [formIsOpen, setFormIsOpen] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
    const [deleteIsOpen, setDeleteIsOpen] = useState(false);

    // Funciones de manejo de formularios y diálogos
    const toggleForm = () => setFormIsOpen(prev => !prev);
    const toggleDeleteDialog = () => setDeleteIsOpen(prev => !prev);

    const handleCreate = () => {
        setSelectedCategory(null);
        toggleForm();
    };

    const handleDelete = () => {
        if (selectedCategory) {
            deleteCategory(selectedCategory.id);
            toggleDeleteDialog();
        }
    };

    const renderActionButtons = (row: Category) => (
        <ActionButtons
            editAction={() => {
                setSelectedCategory(row);
                toggleForm();
            }}
            deleteAction={() => {
                setSelectedCategory(row);
                toggleDeleteDialog();
            }}
        />
    );

    const renderContent = () => {
        if (loadingCategories) {
            return (
                <div className="h-full w-full flex items-center justify-center">
                    <LoadingComponent name="categorías" />
                </div>
            );
        }

        if (errorCategories) {
            return (
                <div className="h-full w-full flex items-center justify-center">
                    <ErrorComponent codeError={errorCategories.statusCode} textError={errorCategories.message} />
                </div>
            );
        }

        return (
            <Card className="h-full w-full flex flex-col items-center justify-center overflow-auto">
                <DialogDelete
                    nameItem={selectedCategory?.name || ""}
                    isOpen={deleteIsOpen}
                    onClose={toggleDeleteDialog}
                    handleDelete={handleDelete}
                    message={errorCategory?.message || "Categoría eliminada"}
                    codeError={errorCategory?.statusCode}
                />
                <CategoryForm
                    isOpen={formIsOpen}
                    onClose={toggleForm}
                    dataUpdate={selectedCategory}
                />
                <SimpleTable
                    nameTable="Categorías"
                    data={categories}
                    renderActionButtons={renderActionButtons}
                    columns={columns}
                    handleCreate={handleCreate}
                />
            </Card>
        );
    };

    return <>{renderContent()}</>;
};

export default CategoryPage;