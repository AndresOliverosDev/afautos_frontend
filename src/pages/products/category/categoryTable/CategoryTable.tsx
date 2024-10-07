import React, { useState, useEffect } from "react";
import useCategory from "../../../../hooks/products/useCategory";
import useActionsTable from "../../../../hooks/ui/useActionsTable";
import { Button } from "@tremor/react";
import {
  ActionButtons,
  ErrorComponent,
  SimpleTable,
} from "../../../../components/ui/index";
import DialogDelete from "../../../../components/ui/dialog/DialogDelete";
import { columns, filters } from "./categoryDataTable";
import LoadingComponent from "../../../../components/ui/LoadingComponent";
import CategoryForm from "../CategoryForm";

const CategoryTable = () => {
  const {
    categoryData,
    deleteCategory,
    loading,
    error,
    messages,
    createCategory,
// Agregar si tienes una función para recargar los datos
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

  const additionalButton = (
    <Button onClick={handleCreate}>
      Crear Categoría
    </Button>
  );

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
      <div className="h-full w-full flex overflow-auto justify-center items-center">
        <CategoryForm
          isOpen={createIsOpen}
          onClose={handleCloseCreate}

        />
        <SimpleTable
          nameTable={"Categorías"}
          data={categoryData}
          renderActionButtons={renderActionButtons}
          columns={columns}
        />
      </div>
    );
  };

  return <>{renderContent()}</>;
};

export default CategoryTable;