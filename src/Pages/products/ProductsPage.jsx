import { ProductsTable, ProductsNav } from "./";


const ProductsPage = () => {
    return (    
        <section className="flex flex-col gap-2">
            <div>
                <ProductsNav />
            </div>
            <div className="">
                <ProductsTable />
            </div>

        </section>
    );
}

export default ProductsPage;