export interface SaleDetailCreateDTO {
    productId: number;
    quantity: number;
}

export interface SaleCreateDTO {
    sale: {
        payMethod: string;
        customer: string;
        address: string;
    };
    saleDetail: SaleDetailCreateDTO[];
}

export interface Sale {
    id: number;
    payMethod: string;
    customer: string;
    address: string;
    total_price: number;
    saleDate: Date;
}