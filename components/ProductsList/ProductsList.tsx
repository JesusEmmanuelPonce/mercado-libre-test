import Image from 'next/image';
import { FC } from 'react';
import { useRouter } from 'next/router';

import Shipping from "/public/img/ic_shipping.png"
import { IProductItems } from '../../interfaces';
import { currencyFormat } from '../../helpers/currencyFormat';
import styles from "./productsList.module.scss"

interface IProductsListProps {
    products: IProductItems[]
};

const ProductsList: FC<IProductsListProps> = ({ products }) => {

    const router = useRouter();

    const handleGoToDeatil = (id: string) => {
        router.push(`/items/${id}`)
    };

    return (
        <ul className={styles.productListWrap}>
            { products.map((product: IProductItems) => (
                <li
                    key={product?.id}
                    className={styles.productListWrap__row}
                    onClick={() => handleGoToDeatil(product?.id)}
                >
                    <div className={styles.content}>
                        <Image
                            height={180}
                            width={180}
                            src={product?.picture}
                            alt="product ml"
                            className={styles.productImage}
                        />
                        <div className={styles.productDescription}>
                            <div className={styles.productDescription__priceAndLabel}>
                                <div className={styles.prices}>
                                    <p>{currencyFormat(product?.price?.amount)}</p>
                                    { product?.free_shipping ? 
                                        <Image
                                            src={Shipping}
                                            width={20}
                                            height={20}
                                            layout="fixed"
                                            alt='free_shipping'
                                        /> : undefined
                                    }
                                </div>
                                <span>{product?.address}</span>
                            </div>
                            <p className={styles.productDescription__title}>{product?.title}</p>
                        </div>
                    </div>
                </li>
            )) }
        </ul>
    )
}

export default ProductsList;
