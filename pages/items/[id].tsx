import { NextPage, GetStaticProps, GetStaticPaths } from 'next';

import AppLayout from '../../components/AppLayout';
import axiosClient from '../../helpers/axiosClient';
import { IBodyItem, IResult } from '../../interfaces';
import styles from "./items.module.scss";
import { currencyFormat } from '../../helpers/currencyFormat';
import { getCondition } from '../../helpers/getCondition';

interface IProductDetailProps {
    product: IBodyItem;
}

const ProductDetail: NextPage<IProductDetailProps> = ({ product }) => {

    return (
        <AppLayout>
            <section className={styles.items}>
                <div className={styles.items__row}>
                    <figure className={styles.items__row__img}>
                        <img src={product?.item?.picture} alt="" />
                    </figure>
                    <div className={styles.items__row__description}>
                        <p className={styles.condition}>{getCondition(product?.item?.condition)} - {product?.item?.sold_quantity}</p>
                        <p className={styles.title}>{product?.item?.title}</p>
                        <p className={styles.price}>{currencyFormat(product?.item?.price?.amount)}</p>
                        <button>Comprar</button>
                    </div>
                </div>
                <div className={styles.items__wrapperText}>
                    <h3>Descripción del producto</h3>
                    <p>{product?.item?.description}</p>
                </div>
            </section>
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
