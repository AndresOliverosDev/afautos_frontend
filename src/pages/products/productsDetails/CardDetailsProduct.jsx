import { Button, Dialog, DialogPanel } from "@tremor/react";

const CardDetailsProduct = ({ isOpen, handleClose, data, details }) => {

    return (
        <Dialog open={isOpen} onClose={handleClose}>
            <DialogPanel
                className="max-w-4xl p-0"
            >
                <div className="flex flex-col md:flex-row gap-4 md:gap-2 p-6">
                    {/** Image */}
                    <div className="md:w-5/12 w-full flex justify-center items-center">
                        <img
                            className="w-4/12 md:w-11/12"
                            src={data.imageUrl}
                            alt={data.name} />
                    </div>
                    {/** Body Content */}
                    <div className="flex flex-col md:w-7/12 w-full md:border-l border-gray-600 pl-4 gap-3">
                        {/** Title and Description */}
                        <div className="flex flex-col md:flex-row gap-2">
                            <h1 className="text-tremor-title font-semibold md:w-1/3 w-full pr-4">
                                {data.name}
                            </h1>
                            <p className="md:w-2/3 w-full text-tremor-default">{data.desc}</p>
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
                        <div className="flex flex-col md:flex-row md:justify-between w-full items-center gap-4 md:gap-0 md:items-end mt-auto">
                            <div>
                                <h2 className="text-xs text-dark-tremor-content-subtle">Precio</h2>
                                <p className="text-tremor-metric">${data.price}</p>
                            </div>
                            <div className="flex gap-2">
                                <Button 
                                className="w-32 h-8"
                                onClick={handleClose}>
                                    Cerrar
                                </Button>
                                <Button
                                variant="secondary"
                                className="w-32 h-8">
                                    Editar
                                </Button>
                            </div>

                        </div>
                    </div>
                </div>
            </DialogPanel>
        </Dialog>
    );
}

export default CardDetailsProduct;