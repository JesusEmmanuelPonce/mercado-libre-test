export interface IDataMlResponse {
    site_id: string;
    country_default_time_zone: Date | string;
    query: string;
    paging: IPaging;
    results: IResult[];
    sort: ISort;
    available_sorts: ISort[];
    filters: any;
    available_filters: IAvailableFilters[];
};

export interface IPaging {
    total: number;
    primary_results: number;
    offset: number;
    limit: number;
}

export interface IResult {
    id: string;
    site_id: string;
    title: string;
    seller: [Object];
    price: number;
    prices: [Object];
    sale_price: number | string | null;
    currency_id: string;
    available_quantity: number;
    sold_quantity: number;
    buying_mode: string;
    listing_type_id: string;
    stop_time: string;
    condition: string;
    permalink: string;
    thumbnail: string;
    thumbnail_id: string;
    accepts_mercadopago: boolean;
    installments: [Object];
    address: IAddress;
    shipping: IShipping;
    seller_address: [Object];
    attributes: any;
    original_price: number | string | null;
    category_id: string;
    official_store_id: number | string | null;
    domain_id: string;
    catalog_product_id: number | string | null;
    tags: string[];
    order_backend: number;
    use_thumbnail_id: true;
    offer_score: number | string | null;
    offer_share: number | string | null;
    match_score: number | string | null;
    winner_item_id: number | string | null;
    melicoin: number | string | null;
    discounts: number | string | null;
}

export interface IAddress {
    state_id: string;
    state_name: string;
    city_id: string;
    city_name: string;
}

export interface IShipping {
    free_shipping: boolean;
    mode: string;
    tags: string[];
    logistic_type: string;
    store_pick_up: boolean;
}

export interface ISort {
    id: string;
    name: string;
}

export interface IAvailableFilters {
    id: string;
    name: string;
    type: string;
    values: any;
}
  