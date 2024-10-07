export interface Product {
    id: number;
    name: string;
    desc: string;
    quantity: number;
    price: number;
    image: string;
    category: string;
    brand: string;
}

export interface ProductCreate {
    name: string;
    desc: string;
    quantity: number;
    price: number;
    image: string;
    category: number;
    brand: number;
}