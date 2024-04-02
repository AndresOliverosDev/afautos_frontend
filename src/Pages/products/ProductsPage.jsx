import { ProductsTable, ProductsNav } from "./";


const ProductsPage = () => {
    return (
        <section className="flex flex-col gap-2 h-[97.5vh]">
            <div>
                <ProductsNav />
            </div>
            <div className="overflow-auto">
                <ProductsTable />
            </div>

        </section>
    );
}

export default ProductsPage;