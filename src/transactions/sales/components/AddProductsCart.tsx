import React, { useState } from "react";
import { Dialog, DialogPanel } from "@tremor/react";
import { Card, Button, NumberInput, TextInput } from "../../../components/ui";
import { Product } from "../../../types";
import useProduct from "../../../products/product/hooks/useProduct";

interface AddProductsCartProps {
    isOpen: boolean;
    onClose: () => void;
    onAddSelected: (selectedProducts: ProductWithQuantity[]) => void;
    selectedProductsAfter: ProductWithQuantity[];
}

export interface ProductWithQuantity extends Product {
    quantityCart: number;
}

const AddProductsCart: React.FC<AddProductsCartProps> = ({
    isOpen,
    onClose,
    onAddSelected,
    selectedProductsAfter,
}) => {
    const [selectedProducts, setSelectedProducts] = useState<ProductWithQuantity[]>([]);
    const { products, errorProducts, loadingProducts } = useProduct();
    const [searchQuery, setSearchQuery] = useState("");
    const [currentPage, setCurrentPage] = useState(1);

    const ITEMS_PER_PAGE = 8;

    // Filtrar productos según la búsqueda
    const filteredProducts = products.filter((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    // Calcular productos visibles en la página actual
    const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);
    const paginatedProducts = filteredProducts.slice(
        (currentPage - 1) * ITEMS_PER_PAGE,
        currentPage * ITEMS_PER_PAGE
    );

    // Alternar selección de producto
    const toggleSelection = (product: Product) => {
        setSelectedProducts((prev) =>
            prev.some((item) => item.id === product.id)
                ? prev.filter((item) => item.id !== product.id)
                : [...prev, { ...product, quantityCart: 0 }]
        );
    };

    // Cambiar la cantidad del producto
    const handleQuantityChange = (productId: number, quantity: number) => {
        setSelectedProducts((prev) =>
            prev.map((item) =>
                item.id === productId ? { ...item, quantityCart: Math.max(1, quantity) } : item
            )
        );
    };

    // Obtener cantidad restante después de considerar productos ya seleccionados
    const handleStockLimit = (productId: number): number => {
        const alreadySelected = selectedProductsAfter.find((item) => item.id === productId)?.quantityCart || 0;
        const currentStock = products.find((product) => product.id === productId)?.quantity || 0;
        return Math.max(0, currentStock - alreadySelected);
    };

    // Agregar productos seleccionados al carrito
    const handleAdd = () => {
        onAddSelected(selectedProducts);
        setSelectedProducts([]);
        onClose();
    };

    // Manejar cambio de página
    const handlePageChange = (direction: "next" | "prev") => {
        setCurrentPage((prev) =>
            direction === "next" ? Math.min(prev + 1, totalPages) : Math.max(prev - 1, 1)
        );
    };

    return (
        <Dialog open={isOpen} onClose={onClose}>
            <DialogPanel className="flex flex-col gap-5 max-w-[70%]">
                <Card className="flex flex-col w-full rounded-xl p-6">
                    <h2 className="text-xl font-bold mb-4 ml-1">Seleccionar Productos</h2>
                    <TextInput
                        className="mb-3"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Buscar productos..."
                    />
                    {loadingProducts ? (
                        <p>Cargando productos...</p>
                    ) : errorProducts ? (
                        <p className="text-red-600">Error: {errorProducts.message}</p>
                    ) : paginatedProducts.length > 0 ? (
                        <div className="flex flex-col gap-3">
                            {paginatedProducts.map((product) => {
                                const selected = selectedProducts.find((item) => item.id === product.id);
                                const maxQuantity = handleStockLimit(product.id);

                                return (
                                    <div
                                        key={product.id}
                                        className="flex items-center gap-5 py-2 px-6 rounded border dark:border-dark-border border-light-border"
                                    >
                                        <input
                                            className="w-8 h-8"
                                            type="checkbox"
                                            checked={!!selected}
                                            onChange={() => toggleSelection(product)}
                                            aria-label={`Seleccionar ${product.name}`}
                                        />
                                        <img
                                            className="h-10 w-10 rounded-full mr-2"
                                            src={product.image}
                                            alt={product.name}
                                        />
                                        <div className="mr-8">
                                            <p className="font-bold">{product.name}</p>
                                            <p className="text-sm text-gray-600">{product.desc}</p>
                                        </div>
                                        <div>
                                            <p className="font-bold">Marca {product.brand}</p>
                                            <p className="text-sm text-gray-600">Categoría {product.category}</p>
                                        </div>
                                        <p className="w-20 text-right ml-auto">${product.price.toLocaleString()}</p>
                                        {selected && (
                                            <NumberInput
                                                max={maxQuantity}
                                                value={selected.quantityCart}
                                                onChange={(newQuantity) =>
                                                    handleQuantityChange(product.id, Math.min(newQuantity, maxQuantity))
                                                }
                                            />
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    ) : (
                        <p className="mt-4 ml-2">No hay productos disponibles.</p>
                    )}
                </Card>
                <div className="flex gap-3 justify-center items-center mt-4">
                    <div className="flex max-w-96 items-center mr-auto">
                        <Button onClick={() => handlePageChange("prev")} disabled={currentPage === 1}>
                            Anterior
                        </Button>
                        <p className="mx-4">
                            Página {currentPage} de {totalPages}
                        </p>
                        <Button onClick={() => handlePageChange("next")} disabled={currentPage === totalPages}>
                            Siguiente
                        </Button>
                    </div>
                    <div className="flex gap-3 h-9">
                        <Button onClick={onClose} variant="secondary">
                            Cerrar
                        </Button>
                        <Button onClick={handleAdd} disabled={selectedProducts.length === 0}>
                            Agregar Seleccionados
                        </Button>
                    </div>
                </div>
            </DialogPanel>
        </Dialog>
    );
};

export default AddProductsCart;
