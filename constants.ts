export interface IResult {
    id: string;
    site_id: string;
    title: string;
    price: number;
    sale_price: number | string | null;
    currency_id: string;
    available_quantity: number;
    sold_quantity: number;
    condition: string;
    thumbnail: string;
    thumbnail_id: string;
    shipping: IShipping;
    tags: string[];
    address: IAddress;
}