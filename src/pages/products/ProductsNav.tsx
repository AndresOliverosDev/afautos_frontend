import React, { useState } from "react";
import { Button, Card } from "@tremor/react";
import ProductsAdd from "./ProductsAdd";

const ProductNav: React.FC = () => {
    const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);

    return (
        <Card className="p-2 flex justify-start gap-3">
            <Button onClick={() => setIsDialogOpen(true)}>
                Añadir productos
            </Button>
            <ProductsAdd isOpen={isDialogOpen} onClose={() => setIsDialogOpen(false)} />
        </Card>
    );
};

export default ProductNav;
