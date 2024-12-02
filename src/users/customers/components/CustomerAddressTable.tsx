import React from 'react';
import { Table, TableHead, TableBody, TableRow, TableHeaderCell, TableCell } from '@tremor/react';

interface Address {
    id: number;
    ref: string;
    neighborhood: string;
    city: string;
}

interface CustomerAddressTableProps {
    addresses: any[] | null;
}

const CustomerAddressTable: React.FC<CustomerAddressTableProps> = ({ addresses }) => {
    if (!addresses || addresses.length === 0) return <p>No hay direcciones para mostrar</p>;

    return (
        <Table>
            <TableHead>
                <TableRow>
                    <TableHeaderCell>Ref</TableHeaderCell>
                    <TableHeaderCell>Barrio</TableHeaderCell>
                    <TableHeaderCell>Ciudad</TableHeaderCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {addresses.map((address) => (
                    <TableRow key={address.id}>
                        <TableCell>{address.ref}</TableCell>
                        <TableCell>{address.neighborhood}</TableCell>
                        <TableCell>{address.city}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
};

export default CustomerAddressTable;