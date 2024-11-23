// import React, { useEffect } from 'react';
// import { Dialog, DialogPanel, Card, Button } from "@tremor/react";
// import CustomerSalesTable from './CustomerSalesTable';
// import useAddress from "../../../hooks/address/useAddress";
// import CustomerAddressTable from './CustomerAddressTable';
// import useSale from '../../../transactions/sales/hooks/useSale';

// interface CustomerCardDetailProps {
//     isOpen: boolean;
//     handleClose: () => void;
//     data: {
//         id: any;
//         docType: string;
//         name: string;
//     } | null;
// }

// const CustomerCardDetail: React.FC<CustomerCardDetailProps> = ({ isOpen, handleClose, data }) => {
//     //const { selectSales, fetchSalesByCustomer, loadingDetails } = useSale();
//     const { selectAddress, fetchAddressByUser, selectLoading } = useAddress();

//     useEffect(() => {
//         if (isOpen && data?.id) {
//             fetchSalesByCustomer(data.id);
//             fetchAddressByUser(data.id);
//         }
//     }, [isOpen, data?.id]);

//     return (
//         <Dialog open={isOpen} onClose={handleClose}>
//             <DialogPanel className="max-w-4xl p-0 max-h-screen overflow-y-auto">
//                 <section className="flex flex-col gap-4 p-6">
//                     <Card>
//                         <h2>{`${data?.docType} ${data?.id}`}</h2>
//                         <h1 className="text-2xl">{data?.name}</h1>
//                     </Card>
//                     <article className="flex gap-4 flex-col lg:flex-row">
//                         <Card>
//                             {loadingDetails ? (
//                                 <p>Cargando detalles...</p>
//                             ) : (
//                                 <>
//                                     <h2 className="text-tremor-label">Compras:</h2>
//                                     <CustomerSalesTable sales={selectSales} />
//                                 </>
//                             )}
//                         </Card>
//                         <Card>
//                             {loadingDetails ? (
//                                 <p>Cargando direcciones...</p>
//                             ) : (
//                                 <>
//                                     <h2 className="text-tremor-label">Direcciones: </h2>
//                                     <CustomerAddressTable addresses={selectAddress} />
//                                 </>
//                             )}
//                         </Card>
//                     </article>
//                     <div className='flex justify-end gap-4'>
//                         <Button className='w-32 h-8' onClick={handleClose}>Salir</Button>
//                         <Button variant='secondary' className='w-32 h-8'>Editar</Button>
//                     </div>
//                 </section>
//             </DialogPanel>
//         </Dialog>
//     );
// };

// export default CustomerCardDetail;