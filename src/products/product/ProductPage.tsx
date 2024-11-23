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
import { Product } from "../../types";
import useProduct from "./hooks/useProduct"; // Hook personalizado para productos
import { columns } from "./settings/productDataTable";
import ProductForm from "./components/ProductForm";
import ProductCardDetail from "./components/ProductCardDetails";

const ProductPage: React.FC = () => {
    // Custom hook para productos
    const {
        products,
        deleteProduct,
        getAllProducts,
        errorProducts,
        loadingProducts,
        errorProduct,
    } = useProduct();

    // Estados
    const [formIsOpen, setFormIsOpen] = useState<boolean>(false);
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
    const [deleteIsOpen, setDeleteIsOpen] = useState<boolean>(false);
    const [detailsIsOpen, setDetailsIsOpen] = useState<boolean>(false);

    // Funciones de manejo de formularios y diálogos
    const toggleForm = () => setFormIsOpen(prev => !prev);
    const toggleDetails = () => setDetailsIsOpen(prev => !prev);
    const toggleDeleteDialog = () => setDeleteIsOpen(prev => !prev);

    const handleCreate = () => {
        setSelectedProduct(null);
        toggleForm();
    };

    const handleDelete = () => {
        if (selectedProduct) {
            deleteProduct(selectedProduct.id);
            toggleDeleteDialog();
        }
    };

    const renderActionButtons = (row: Product) => (
        <ActionButtons
            editAction={() => {
                setSelectedProduct(row);
                toggleForm();
            }}
            deleteAction={() => {
                setSelectedProduct(row);
                toggleDeleteDialog();
            }}
            detailsAction={() => {
                setSelectedProduct(row);
                toggleDetails();
            }}
        />
    );

    const renderContent = () => {
        if (loadingProducts) { // Cambiado a loadingProducts
            return (
                <div className="h-full w-full flex items-center justify-center">
                    <LoadingComponent name="productos" /> {/* Cambiado a "productos" */}
                </div>
            );
        }

        if (errorProducts) { // Cambiado a errorProducts
            return (
                <div className="h-full w-full flex items-center justify-center">
                    <ErrorComponent codeError={errorProducts.statusCode} textError={errorProducts.message} /> {/* Cambiado a errorProducts */}
                </div>
            );
        }

        return (
            <div className="h-full w-full flex flex-col items-center justify-center overflow-auto">
                <DialogDelete
                    nameItem={selectedProduct?.name || ""}
                    isOpen={deleteIsOpen}
                    onClose={toggleDeleteDialog}
                    handleDelete={handleDelete}
                    message={errorProduct?.message || "Producto eliminado"}
                    codeError={errorProduct?.statusCode}
                />
                <ProductForm
                    isOpen={formIsOpen}
                    onClose={toggleForm}
                    dataUpdate={selectedProduct}
                />
                <ProductCardDetail 
                    data={selectedProduct}
                    handleClose={toggleDetails}
                    isOpen={detailsIsOpen}
                    handleUpdate={toggleForm}
                />
                <SimpleTable
                    nameTable="Productos"
                    data={products}
                    renderActionButtons={renderActionButtons}
                    columns={columns}
                    handleCreate={handleCreate}
                    reloadTable={getAllProducts}
                />
            </div>
        );
    };

    return <>{renderContent()}</>;
};

export default ProductPage;