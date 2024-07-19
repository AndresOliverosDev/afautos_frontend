import { Button, Icon, Table, TableBody, TableHead, TableRow } from "@tremor/react";
import useCategory from "../../../../hooks/products/useCategory";
import useActionsTable from "../../../../hooks/ui/useActionsTable";
import { RiEditBoxLine, RiFileSearchLine } from "react-icons/ri";
import { columns } from "./categoryDataTable";
import SimpleTable from "../../../../components/table/SimpleTable.jsx"

const CategoryTable = () => {

    // Data
    const {categoryData, loading, error} = useCategory();
    console.log(categoryData)

    // Actions Button Table
    const { createIsOpen, handleCloseCreate } = useActionsTable();

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
            Crear Categoria
        </Button>
    );

    return (
        <div className="h-full w-full overflow-auto">
            <h1>{error}</h1>
            {/* <ProductAdd isOpen={createIsOpen} onClose={handleCloseCreate}/>
            <SimpleTable 
                columns={columns} 
                data={categoryData} 
                nameTable={"Categorias"} 
                renderActionButtons={renderActionButtons}
                additionalButton={additionalButton} 
            /> */}
        </div>
    );
};
export default CategoryTable;