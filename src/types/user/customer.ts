export interface Customer {
    id: string;
    name: string;
    phone: string;
    email: string;
    birthday: string;
    docType: string;
}

export interface CustomerCreate {
    id: string;
    name: string;
    phone: string;
    email: string;
    birthday: string;
    password: string;
    username: string;
    docType: number;
    roles: number[];
}