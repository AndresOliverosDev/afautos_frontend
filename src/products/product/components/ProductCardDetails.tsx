import React from 'react';
import { Button, Dialog, DialogPanel } from "@tremor/react";
import { Product } from '../../../types';

interface CardDetailsProductProps {
    isOpen: boolean;
    handleClose: () => void;
    data: Product | null;
    handleUpdate: () => void;
}

const ProductCardDetail: React.FC<CardDetailsProductProps> = ({ isOpen, handleClose, data, handleUpdate }) => {
    const { category, brand, quantity, image, name, desc, price } = data || {}; // Desestructuración con fallback

    const details = data ? [
        { title: 'Categoría', text: category },
        { title: 'Marca', text: brand },
        { title: 'Cantidad', text: quantity },
        // Agrega más detalles según lo necesites
    ] : [];

    return (
        <Dialog open={isOpen} onClose={handleClose}>
            <DialogPanel className="max-w-4xl p-0 max-h-screen">
                <section className="flex flex-col md:flex-row gap-4 md:gap-2 p-6 justify-between">
                    {/* Image Section */}
                    <div className="md:w-5/12 w-full flex justify-center items-center">
                        <img
                            className="w-4/12 md:w-11/12"
                            src={image}  // Utilizar directamente la variable desestructurada
                            alt={name}
                        />
                    </div>
                    {/* Body Content Section */}
                    <article className="flex flex-col justify-between md:w-7/12 w-full md:border-l dark:border-gray-600 pl-4 gap-3 text-wrap">
                        {/* Title and Description */}
                        <header className="flex flex-col gap-2">
                            <h1 className="text-tremor-title font-semibold w-full pr-4">
                                {name}
                            </h1>
                            <p className="w-full whitespace-pre-line break-words">
                                {desc}
                            </p>
                        </header>
                        <div className="flex flex-col gap-4">
                            <div className="flex flex-wrap">
                                {details.map((item) => (
                                    <div className="w-1/2 pr-2 mb-2" key={item.title}> {/* Usar un campo único como key */}
                                        <h2 className="text-xs text-dark-tremor-content-subtle">
                                            {item.title}
                                        </h2>
                                        <p>{item.text}</p>
                                    </div>
                                ))}
                            </div>
                            {/* Price and Button Section */}
                            <footer className="flex flex-col md:flex-row md:justify-between w-full items-center gap-4 md:gap-0 md:items-end mt-auto">
                                <div>
                                    <h2 className="text-xs text-dark-tremor-content-subtle">
                                        Precio
                                    </h2>
                                    <p className="text-tremor-metric">
                                        ${price ? price.toLocaleString() : ""}
                                    </p>
                                </div>
                                <div className="flex gap-2">
                                    <Button className="w-32 h-8" onClick={handleClose}>
                                        Cerrar
                                    </Button>
                                    <Button variant="secondary"
                                        onClick={handleUpdate} className="w-32 h-8" >
                                        Editar
                                    </Button>
                                </div>
                            </footer>
                        </div>
                    </article>
                </section>
            </DialogPanel>
        </Dialog>
    );
};

export default ProductCardDetail;