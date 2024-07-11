import React from 'react';
import { Table, TableHead, TableBody, TableRow, TableHeaderCell, TableCell } from '@tremor/react';
import { format } from 'date-fns';

const CustomerSalesTable = ({ sales }) => {
    if (!sales || sales.length === 0) return <p>No hay ventas para mostrar</p>;

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return format(date, 'dd/MM/yyyy hh:mm a');
    };

    const formatPrice = (price) => {
        return new Intl.NumberFormat('es-CO', {
            style: 'currency',
            currency: 'COP',
        }).format(price);
    };

    return (
        <Table>
            <TableHead>
                <TableRow>
                    <TableHeaderCell>ID</TableHeaderCell>
                    <TableHeaderCell>Fecha</TableHeaderCell>
                    <TableHeaderCell>M. Pago</TableHeaderCell>
                    <TableHeaderCell>Precio Total</TableHeaderCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {sales.map((sale) => (
                    <TableRow key={sale.id}>
                        <TableCell>{sale.id}</TableCell>
                        <TableCell>{formatDate(sale.saleDate)}</TableCell>
                        <TableCell>{sale.payMethod}</TableCell>
                        <TableCell>{formatPrice(sale.totalPrice)}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
};

export default CustomerSalesTable;
