import React from "react";
import { Button, NumberInput } from "../../../components/ui";
import { RiAddLine, RiSubtractLine } from "react-icons/ri";
import { ProductWithQuantity } from "./AddProductsCart";

interface ProductItemProps {
    products: ProductWithQuantity[]; // Incluye la propiedad quantity
    handleQuantityChange: (productId: number, quantity: number) => void;
}

const ProductItem: React.FC<ProductItemProps> = ({ products, handleQuantityChange }) => {
    return (
        <div className="flex flex-col gap-3">
            {products && products.length > 0 ? (
                products.map((product) => (
                    <div
                        key={product.id}
                        className="flex items-center gap-3 rounded-default border dark:border-dark-border border-light-border px-3 py-1"
                    >
                        <img
                            className="h-10 w-10 rounded-full ml-2 mr-4"
                            src={product.image}
                            alt={product.name}
                        />
                        <div className="mr-8">
                            <p className="font-bold">{product.name}</p>
                            <p className="text-sm text-gray-600">${product.price.toLocaleString()}</p>
                        </div>
                        <div className="mr-8">
                            <p className="font-bold">Marca {product.brand}</p>
                            <p className="text-sm text-gray-600">Categoria{product.category}</p>
                        </div>
                        <div className="flex flex-1 flex-col pr-1">
                            <p className="font-bold">Precio total</p>
                            <p className="text-lg text-gray-600">${(product.price * product.quantityCart).toLocaleString()}</p>
                        </div>
                        <div className="flex gap-1 items-center pr-1">
                            <NumberInput
                                min={1}
                                max={product.quantity}
                                value={product.quantityCart}
                                onChange={(newQuantity) =>
                                    handleQuantityChange(product.id, newQuantity)
                                }
                            />
                        </div>
                    </div>
                ))
            ) : (
                <p className="text-gray-500">No products available.</p>
            )}
        </div>
    );
};

export default ProductItem;