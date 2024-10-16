import { useState } from "react";
import useCategory from "./hooks/useCategory";
import { ActionButtons, Card, DialogMessage, ErrorComponent, LoadingComponent, SimpleTable } from "../../components/ui";
import React from "react";
import CategoryForm from "./components/CategoryForm";
import { columns } from "./settings/categoryDataTable";
import { Category } from "../../types";

const CategoryPage = () => {
    const {
        categories,
        errorCategories,
        loadingCategories,
        deleteCategory,
        errorCategory
    } = useCategory();

    // Estados
    const [formIsOpen, setFormIsOpen] = useState<boolean>(false); // Estado del formulario
    const [selectedCategory, setSelectedCategory] = useState<Category | null>(null); // Estado para almacenar una categoría seleccionada
    const [messageIsOpen, setMessageIsOpen] = useState<boolean>(false); // Estado del mensaje

    // Función para manejar el estado del mensaje
    const handleOpenMessage = (): void => {
        setMessageIsOpen(!messageIsOpen);
    }

    // Función para manejar el estado del formulario
    const handleOpenForm = (): void => {
        setFormIsOpen(!formIsOpen);
    }

        // Función del botón de crear categoría
        const handleCreate = (): void => {
            setSelectedCategory(null);
            setFormIsOpen(!formIsOpen);
        }

    // Botones de la tabla de categorías
    const renderActionButtons = (row: Category): JSX.Element => (
        <ActionButtons
            editAction={() => {
                setSelectedCategory(row);
                setFormIsOpen(true);
            }}
            deleteAction={() => {
                deleteCategory(row.id);
                handleOpenMessage();
            }}
        />
    );

    // Contenido de la pagina
    const renderContent = () => {
        if (loadingCategories) {
            return (
                <div className="h-full w-full flex items-center justify-center">
                    <LoadingComponent name={"categorías"} />
                </div>
            );
        }

        if (errorCategories) {
            return (
                <div className="flex h-full items-center justify-center">
                    <ErrorComponent codeError={errorCategories.statusCode} textError={errorCategories.message} />
                </div>
            );
        }

        return (
            <Card className="h-full w-full flex overflow-auto justify-center items-center">
                <DialogMessage onClose={handleOpenMessage} isOpen={messageIsOpen} message={errorCategory?.message || "Categoría eliminada"} codeError={errorCategory?.statusCode}/>
                <CategoryForm
                    isOpen={formIsOpen}
                    onClose={handleOpenForm}
                    dataUpdate={selectedCategory}
                />
                <SimpleTable
                    nameTable={"Categorías"}
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