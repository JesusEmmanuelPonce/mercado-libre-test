

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

interface IAddress {
    state_id: string;
    state_name: string;
    city_id: null;
    city_name: string;
}

interface IShipping {
    free_shipping: boolean;
    mode: string;
    tags: string[];
    logistic_type: string;
    store_pick_up: boolean;
}

// &&&&&&&&&&&&&&&&&&&&&&&&&&

export interface IProduct {
    author: IAuthor;
    categories: string[];
    items: IProductItems[];
};

export interface IProductItems {
    id: string;
    title: string;
    price: IPriceItem;
    picture: string;
    condition: string;
    free_shipping: boolean;
    address: string;
}

// &&&&&&&&&&&&&&&&&&&&&&&&&

export interface IBodyItem {
    author: IAuthor;
    item: IItem;
};

interface IAuthor {
    name: string;
    lastname: string;
}

interface IItem {
    id: string;
    title: string;
    price: IPriceItem;
    picture: string;
    condition: string;
    free_shipping: boolean;
    sold_quantity: number;
    description: string;
}

interface IPriceItem {
    currency: string;
    amount: number;
    decimals: number;
}
