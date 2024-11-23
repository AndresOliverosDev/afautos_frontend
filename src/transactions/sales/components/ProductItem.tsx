import React from "react";
import { Product } from "../../../types";

interface ProductItemProps {
    products: Product[];
}

const ProductItem: React.FC<ProductItemProps> = ({ products }) => {
    return (
        <>
            <div className="flex flex-col gap-1">
                {products && products.length > 0 ? (
                    products.map((product) => (
                        <div
                            key={product.id}
                            className="flex items-center gap-3 rounded-full p-0.5 border dark:border-dark-border border-light-border"
                        >
                            <img
                                className="h-10 w-10 rounded-full"
                                src={product.image}
                                alt={product.name}
                            />
                            <div className="flex items-center">
                                <p className="w-72 border-l pl-3 border-light-border dark:border-dark-border">
                                    {product.name}
                                </p>
                                <p className="w-32 border-l pl-3 border-light-border dark:border-dark-border">
                                    {product.quantity}
                                </p>
                                <p className="w-32 border-l pl-3 border-light-border dark:border-dark-border">
                                    ${product.price.toLocaleString()}
                                </p>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>No products available.</p>
                )}
            </div>
        </>
    );
};

export default ProductItem;
