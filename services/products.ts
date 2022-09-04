import axiosClient from "../helpers/axiosClient";

export const getProducts = async(query: string) => {

    const secureQuery = encodeURI(query)

    try {
        const { data } = await axiosClient.get(`/sites/MLA/search?q=${secureQuery}&limit=4`);

        return data;

    } catch (error) {
        console.log(error);
    }
};

export const getProductDetail = async(id: string) => {
    try {
        const { data } = await axiosClient.get(`/items/${id}`);

        return data;

    } catch (error) {
        console.log(error);
    }
};

export const getProductDescription = async(id: string) => {
    try {
        const { data } = await axiosClient.get(`/items/${id}/description`);

        return data;
        
    } catch (error) {
        console.log(error);
    }
};
