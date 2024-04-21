import { ProductsTable, ProductsNav } from ".";


const Products = () => {
    return (
        <section className="flex flex-col gap-2 h-[97.5vh] w-full overflow-auto">
            <div>
                <ProductsNav />
            </div>
            <div className="overflow-auto">
                <ProductsTable />
            </div>

        </section>
    );
}

export default Products;