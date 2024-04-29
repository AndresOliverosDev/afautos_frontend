import { Button, Dialog, DialogPanel, Icon } from "@tremor/react";
import { useState } from "react";
import data from "./testData.json"
import { RiCloseLine, RiXboxLine } from "react-icons/ri";

const CardDetailsProduct = () => {

    const handleClose = () => {
        setIsOpen(false);
    }

    const [isOpen, setIsOpen] = useState(true);
    const details = [
        {
            "title": "ID",
            "text": data.id
        },
        {
            "title": "Cantidad",
            "text": data.quantity
        },
        {
            "title": "Categoría",
            "text": data.cat
        },
        {
            "title": "Marca",
            "text": data.brand
        }
    ]

    return (
        <Dialog open={isOpen} onClose={() => setIsOpen(close)}>
            <div className="">
                X
            </div>
            <DialogPanel
                className="max-w-4xl p-0"
            >
                {
                    /**
                    <div className="flex justify-end">
                        <button onClick={handleClose}>
                            <Icon icon={RiCloseLine} variant="shadow" className="m-1" tooltip="Cerrar"/>
                        </button>
                    </div>
                     */
                }
                <div className="flex flex-col md:flex-row gap-2 p-6">
                    <div className="md:w-5/12 w-full flex justify-center items-center">
                        <img
                            className="w-4/12 md:w-11/12"
                            src={data.imageUrl}
                            alt={data.name} />
                    </div>
                    <div className="flex flex-row md:flex-col md:w-7/12 w-ful border-l border-gray-600 pl-4 gap-3">
                        <div className="flex gap-2">
                            <h1 className="text-tremor-title font-semibold w-1/3 pr-4">
                                {data.name}
                            </h1>
                            <p className="w-2/3 text-tremor-default">{data.desc}</p>
                        </div>
                        <div className="flex flex-wrap">
                            {
                                details.map((item, index) => (
                                    <div className="w-1/2 pr-2 mb-2" key={index}>
                                        <h2 className="text-xs text-dark-tremor-content-subtle">
                                            {item.title}
                                        </h2>
                                        <p>
                                            {item.text}
                                        </p>
                                    </div>
                                ))
                            }
                        </div>
                        <div className="flex justify-between w-full items-end mt-auto">
                            <div>
                                <h2 className="text-xs text-dark-tremor-content-subtle">Precio</h2>
                                <p className="text-tremor-metric">${data.price}</p>
                            </div>
                            <Button className="w-32 h-8">
                                Editar
                            </Button>
                        </div>
                    </div>
                </div>
            </DialogPanel>
        </Dialog>
    );
}

export default CardDetailsProduct;