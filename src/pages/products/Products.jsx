import { ProductsTable } from "./index.js";
import { ProductProvider } from "../../context/ProductProvider.jsx";


const Products = () => {

    return (
        <ProductProvider>
            <section className="flex flex-col gap-2 h-[97.5vh] w-full overflow-auto">
                <div className="overflow-auto">
                    <ProductsTable />
                </div>
            </section>
        </ProductProvider>
    );
}

export default Products;