import { ProductsTable, ProductsNav, ProductsAdd} from "./";
import { Route, Routes } from "react-router-dom";

const ProductsPage = () => {
    return (
        <section className="flex flex-col gap-2">
            <div>
                <ProductsNav />
            </div>
            <Routes>
                <Route path="/" element={<ProductsTable />} />
                <Route path="/agregar_productos" element={<ProductsAdd />} />
            </Routes>

        </section>
    );
}

export default ProductsPage;