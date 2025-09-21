export interface Product {
    [x: string]: any;
    id: number;
    title: string;
    image: string;
    content: string;
    price: number;
    quantity?: number;
    stock?: number;
}