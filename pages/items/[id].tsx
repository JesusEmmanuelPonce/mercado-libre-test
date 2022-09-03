import { NextPage, GetStaticProps, GetStaticPaths } from 'next';

import AppLayout from '../../components/AppLayout';
import axiosClient from '../../helpers/axiosClient';
import { IBodyItem, IResult } from '../../interfaces';

interface IProductDetailProps {
    product: IBodyItem;
}

const ProductDetail: NextPage<IProductDetailProps> = ({ product }) => {

    console.log("from component", product);

    return (
        <AppLayout>
            <div>ProductDetail</div>
        </AppLayout>
    )
}

export const getStaticPaths: GetStaticPaths = async() => {
    const { data } = await axiosClient.get("/sites/MLA/search?q=Apple ipod");

    return {
        paths: data?.results.map((product: IResult) => ({
            params: { id: product?.id }
        })),
        fallback: false,
    }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {

    const { id } = params as { id: string };

    const { data } = await axiosClient.get(`/items/${id}`);
    const { data: dataToDescription } = await axiosClient.get(`/items/${id}/description`);

    const body = {
        author: {
            name: "Jesus",
            lastname: "Ponce"
        },
        item: {
            id: data?.id,
            title: data?.title,
            price: {
                currency: data?.currency_id,
                amount: data?.price,
                decimals: data?.price,
            },
            picture: data?.thumbnail,
            condition: data?.condition,
            free_shipping: data?.shipping?.free_shipping,
            sold_quantity: data?.sold_quantity,
            description: dataToDescription?.plain_text,
        }
    };

	return {
		props: {
			product: body,
		}
	}
}

export default ProductDetail;
