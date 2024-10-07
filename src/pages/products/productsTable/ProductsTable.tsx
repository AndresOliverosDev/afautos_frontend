import React from "react";
import SimpleTable from "../../../components/table/SimpleTable.js";
import { columns, filters } from "./dataTable";
import useProduct from "../../../hooks/products/useProduct.js";
import { RiDeleteBack2Line, RiEditBoxLine, RiFileSearchLine } from "react-icons/ri";
import { Button, Icon } from "@tremor/react";
import CardDetailsProduct from "../productsDetails/CardDetailsProduct.js";
import useActionsTable from "../../../hooks/ui/useActionsTable.js";
import ProductAdd from "../ProductsAdd.js";

// Define el tipo para la fila de producto
type Product = {
    id: number;
    name: string;
    // Agrega más campos según la estructura de tu producto
};

const ProductsTable: React.FC = () => {
    const { products, getAllProducts, delProduct } = useProduct();

    const { detailsIsOpen, handleCloseDetails, handleSelectDetailData, selectDetailData, createIsOpen, handleCloseCreate } = useActionsTable();

    const renderActionButtons = (row: Product) => (
        <span className="flex gap-2 cursor-pointer">
            <Icon icon={RiEditBoxLine} variant="shadow" tooltip="Editar" size="xs"
                onClick={() => alert("Editar")}
            />
            <Icon icon={RiFileSearchLine} variant="shadow" tooltip="Detalles" size="xs"
                onClick={() => handleSelectDetailData(row)}
            />
            <Icon icon={RiDeleteBack2Line} variant="shadow" tooltip="Eliminar" size="xs"
                onClick={() => delProduct(row.id)}
            />
        </span>
    );

    const additionalButton = (
        <Button onClick={handleCloseCreate}>
            Crear Producto
        </Button>
    );

    return (
        <div className="h-full w-full overflow-auto">
            <ProductAdd isOpen={createIsOpen} onClose={handleCloseCreate} />
            <CardDetailsProduct
                isOpen={detailsIsOpen}
                handleClose={handleCloseDetails}
                data={selectDetailData}
            />
            <SimpleTable
                columns={columns}
                data={products}
                
                nameTable={"Productos"}
                renderActionButtons={renderActionButtons}
                reloadAction={getAllProducts}
            />
        </div>
    );
};

export default ProductsTable;