// En ProductNav.js
import { Button, Card } from "@tremor/react";
import React from "react";
import { ProductsAdd } from "./";

const ProductNav = () => {
    const [isDialogOpen, setIsDialogOpen] = React.useState(false);
    return (
        <Card className="p-2 flex justify-start gap-3">
            <Button className="" onClick={() => setIsDialogOpen(true)}>
                Añadir productos
            </Button>
            <ProductsAdd isOpen={isDialogOpen} onClose={() => setIsDialogOpen(false)} />
        </Card>
    );
};

export default ProductNav;
