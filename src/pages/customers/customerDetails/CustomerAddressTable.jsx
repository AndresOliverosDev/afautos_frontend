import React from 'react';
import { Table, TableHead, TableBody, TableRow, TableHeaderCell, TableCell } from '@tremor/react';

const CustomerAddressTable = ({ addresses }) => {
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
