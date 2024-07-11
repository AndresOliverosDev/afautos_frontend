import React from "react";
import SimpleTable from "../../../components/table/SimpleTable.jsx";
import { columns, filters } from "./dataTable.js";
import useProduct from "../../../hooks/products/useProduct.js";
import { RiEditBoxLine, RiFileSearchLine } from "react-icons/ri";
import { Button, Icon } from "@tremor/react";
import CardDetailsProduct from "../productsDetails/CardDetailsProduct.jsx";
import useActionsTable from "../../../hooks/ui/useActionsTable.js";
import ProductAdd from "../ProductsAdd.jsx"

const ProductsTable = () => {
    const { products } = useProduct();

    // Actions Button Table
    const { detailsIsOpen, handleCloseDetails, handleSelectDetailData, selectDetailData, createIsOpen, handleCloseCreate } = useActionsTable();

    const renderActionButtons = (row) => (
        <span className="flex gap-2 cursor-pointer">
            <Icon icon={RiEditBoxLine} variant="shadow" tooltip="Editar" size="xs"
                onClick={() => alert("Editar")}
            />
            <Icon icon={RiFileSearchLine} variant="shadow" tooltip="Detalles" size="xs"
                onClick={() => handleSelectDetailData(row)}
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
            <ProductAdd isOpen={createIsOpen} onClose={handleCloseCreate}/>
            <CardDetailsProduct 
                isOpen={detailsIsOpen} 
                handleClose={handleCloseDetails} 
                data={selectDetailData} 
            />
            <SimpleTable 
                columns={columns} 
                data={products} 
                nameTable={"Productos"} 
                filters={filters} 
                renderActionButtons={renderActionButtons}
                additionalButton={additionalButton} 
            />
        </div>
    );
};

export default ProductsTable;
