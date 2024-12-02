import React, { useEffect } from 'react';
import { Dialog, DialogPanel, Card, Button } from "@tremor/react";
import CustomerSalesTable from './CustomerSalesTable';
import useAddress from "../../../hooks/address/useAddress";
import CustomerAddressTable from './CustomerAddressTable';
import useSale from '../../../transactions/sales/hooks/useSale';

interface CustomerCardDetailProps {
    isOpen: boolean;
    handleClose: () => void;
    data: {
        id: any;
        docType: string;
        name: string;
    } | null;
}

const CustomerCardDetail: React.FC<CustomerCardDetailProps> = ({ isOpen, handleClose, data }) => {
    const { selectAddress, fetchAddressByUser, selectLoading } = useAddress();
    const { selectedSales, getSalesByCustomer, loadingSale, errorSale } = useSale();

    useEffect(() => {
        if (isOpen && data?.id) {
            getSalesByCustomer(data.id);
            fetchAddressByUser(data.id);
        }
    }, [isOpen, data?.id, getSalesByCustomer, fetchAddressByUser]);

    return (
        <Dialog open={isOpen} onClose={handleClose}>
            <DialogPanel className="max-w-4xl p-0 max-h-screen overflow-y-auto">
                <section className="flex flex-col gap-4 p-6">
                    {/* Información básica del cliente */}
                    <Card>
                        <h2>{data ? `${data.docType} ${data.id}` : 'Sin información disponible'}</h2>
                        <h1 className="text-2xl">{data?.name || 'Nombre no disponible'}</h1>
                    </Card>

                    {/* Detalles de compras y direcciones */}
                    <article className="flex gap-4 flex-col lg:flex-row">
                        {/* Tabla de Compras */}
                        <Card>
                            {loadingSale ? (
                                <p>Cargando detalles de compras...</p>
                            ) : (
                                <>
                                    <h2 className="text-tremor-label">Compras:</h2>
                                    <CustomerSalesTable sales={selectedSales} />
                                </>
                            )}
                        </Card>

                        {/* Tabla de Direcciones */}
                        <Card>
                            {selectLoading ? (
                                <p>Cargando direcciones...</p>
                            ) : (
                                <>
                                    <h2 className="text-tremor-label">Direcciones:</h2>
                                    <CustomerAddressTable addresses={selectAddress} />
                                </>
                            )}
                        </Card>
                    </article>

                    {/* Botones de acción */}
                    <div className="flex justify-end gap-4">
                        <Button className="w-32 h-8" onClick={handleClose}>Salir</Button>
                        <Button variant="secondary" className="w-32 h-8">Editar</Button>
                    </div>
                </section>
            </DialogPanel>
        </Dialog>
    );
};

export default CustomerCardDetail;