import { useState } from "react";
import SimpleTable from "../../../components/table/SimpleTable.jsx";
import useProducts from "../../../hooks/useProduct.js";
import ProductsAdd from "../ProductsAdd.jsx";
import { Button } from "@tremor/react";
import { columns, filters } from "./dataTable.js"
import { CardDetailsProduct } from "../productsDetails";
import data from "../productsDetails/testData.json"

const ProductsTable = () => {

    const [dataDetails, setDataDetails] = useState([]);

    const [isOpenForm, setIsOpenForm] = useState(false);
    const handleToggleForm = () => {
        setIsOpenForm(!isOpenForm);
    };

    const { products, delProduct } = useProducts();

    const handleDelete = (id) => {
        delProduct(id);
    };

    const buttonAdd = (
        < Button onClick={handleToggleForm} >
            Añadir Productos
        </Button>
    )

    const [isOpen, setIsOpen] = useState(false);

    const handleClose = () => {
        setIsOpen(!isOpen);
    }

    const details = [
        {
            "title": "ID",
            "text": data.id
        },
        {
            "title": "Cantidad",
            "text": data.quantity
        },
        {
            "title": "Categoría",
            "text": data.cat
        },
        {
            "title": "Marca",
            "text": data.brand
        }
    ]




    return (
        <div className="h-full w-full overflow-auto">
            <CardDetailsProduct isOpen={isOpen} handleClose={handleClose} data={dataDetails} details={details} dataDetails={dataDetails}/>
            <ProductsAdd isOpen={isOpenForm} onClose={handleToggleForm} />
            <SimpleTable columns={columns} data={products} nameTable={"Productos"} filters={filters} delete1={handleDelete} buttonAdd={buttonAdd} detailsProd={handleClose} dataDetails={setDataDetails}/>
        </div>
    );
};

export default ProductsTable;
