import { useState } from "react";
import { ActionButtons, Button, Card, ErrorComponent, SimpleTable } from "../../../components/ui";
import useCategory from "../../../hooks/products/useCategory";
import useActionsTable from "../../../hooks/ui/useActionsTable";
import LoadingComponent from "../../../components/ui/LoadingComponent";
import CategoryForm from "./CategoryForm";
import React from "react";
import {columns} from "./categoryDataTable"

const CategoryPage = () => {
  const {
    categoryData,
    deleteCategory,
    loading,
    error,
    messages,
    createCategory,
  } = useCategory();

  const [selectedCategory, setSelectedCategory] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false); // Para manejar el estado de envío

  const {
    createIsOpen,
    deleteIsOpen,
    updateIsOpen,
    handleCloseCreate,
    handleCloseDelete,
    handleCloseUpdate,
  } = useActionsTable();

  // Manejo de creación de categoría
  const handleCreate = async (category:any) => {
    setIsSubmitting(true);
    try {
      await createCategory(category);
      handleCloseCreate();
    } catch (err) {
      console.error("Error al crear la categoría", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderActionButtons = (row:any) => (
    <ActionButtons
      editAction={() => {
        setSelectedCategory(row);

      }}
      deleteAction={() => {
        setSelectedCategory(row);

      }}
    />
  );

  const handleCreateCategory = () => handleCloseCreate();


  const renderContent = () => {
    if (loading || isSubmitting) {
      return (
        <div className="h-full w-full flex items-center justify-center">
          <LoadingComponent name={"categorías"} />
        </div>
      );
    }

    if (error) {
      return (
        <div className="flex h-full items-center justify-center">
          <ErrorComponent codeError={error} textError={error} />
        </div>
      );
    }

    return (
      <Card className="h-full w-full flex overflow-auto justify-center items-center">
        <CategoryForm
          isOpen={createIsOpen}
          onClose={handleCloseCreate}
        />
        <SimpleTable
          nameTable={"Categorías"}
          data={categoryData}
          renderActionButtons={renderActionButtons}
          columns={columns}
          handleCreate={handleCreateCategory}
        />
      </Card>
    );
  };

  return <>{renderContent()}</>;
};

export default CategoryPage;