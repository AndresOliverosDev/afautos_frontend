import React, { useState } from "react";
import { Card, TabNavigator } from "../components/ui";
import { TabLinks } from "../components/ui/TapNavigator";
import CategoryPage from "./category/CategoryPage";
import BrandPage from "./brand/BrandPage";
import ProductPage from "./product/ProductPage";

// Componente principal de los productos, marcas y categorías
const ProductsPage = () => {
    const tapLinks: TabLinks[] = [
        {
            id: 1,
            name: "Productos",
        },
        {
            id: 2,
            name: "Categorías",
        },
        {
            id: 3,
            name: "Marcas"
        }

    ]

    const [activeTap, setActiveTap] = useState<number>(1);
    const handleActiveTap = (id: number) => {
        setActiveTap(id);
    }

    const renderTabContent = () => {
        switch (activeTap) {
            case 1:
                return <ProductPage />;
            case 2:
                return <CategoryPage />;
            case 3:
                return <BrandPage />;
            default:
                return null;
        }
    };

    return (
        <Card className="py-3 flex gap-2 flex-col">
            <TabNavigator taps={tapLinks} activeTap={activeTap} handleActiveTap={handleActiveTap} />
            <div className="h-full">
                {renderTabContent()}
            </div>
        </Card>
    );
}

export default ProductsPage;