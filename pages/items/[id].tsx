import { NextPage, GetServerSideProps } from 'next';

import AppLayout from '../../components/AppLayout';
import { IBodyItem } from '../../interfaces';
import { setTitleTag } from '../../helpers/setTags';
import { getCondition } from '../../helpers/getCondition';
import { currencyFormat } from '../../helpers/currencyFormat';
import { getProductDetail, getProductDescription } from '../../services/products';
import styles from "./items.module.scss";

interface IProductDetailProps {
    product: IBodyItem;
};

const ProductDetail: NextPage<IProductDetailProps> = ({ product }) => {

    return (
        <AppLayout
            titleTag={setTitleTag("")}
        >
            <section className={styles.items}>
                <div className={styles.items__row}>
                    <figure className={styles.items__row__img}>
                        <img src={product?.item?.picture} alt="" />
                    </figure>
                    <div className={styles.items__row__description}>
                        <p className={styles.condition}>{getCondition(product?.item?.condition)} - {product?.item?.sold_quantity} vendidos</p>
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
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {

    const { id } = params as { id: string };

    const data = await getProductDetail(id);
    const dataToDescription = await getProductDescription(id);

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
            picture: data?.pictures[0]?.url,
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
};

export default ProductDetail;
