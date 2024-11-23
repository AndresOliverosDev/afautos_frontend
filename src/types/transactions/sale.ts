export interface Sale {
    id: number;
    saleDate: string;
    payMethod: string;
    totalPrice: string;
    address: string;
    customer: string;
}

export interface SaleCreate {
    id: number;
    saleDate: string;
    payMethod: string;
    totalPrice: string;
    address: string;
    customer: string;
}