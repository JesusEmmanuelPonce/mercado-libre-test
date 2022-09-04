import { FC } from 'react';

import { IProductItems } from '../../interfaces';
import { currencyFormat } from '../../helpers/currencyFormat';
import styles from "./productsList.module.scss"
import { useRouter } from 'next/router';

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
                        <img
                            src={product?.picture}
                            alt="product ml"
                            className={styles.productImage}
                        />
                        <div className={styles.productDescription}>
                            <div className={styles.productDescription__priceAndLabel}>
                                <p>{currencyFormat(product?.price?.amount)}</p>
                                <span>Capital Federal</span>
                            </div>
                            <p className={styles.productDescription__title}>{product?.title}</p>
                            <p className={styles.productDescription__tag}>{product?.condition}</p>
                        </div>
                    </div>
                </li>
            )) }
        </ul>
    )
}

export default ProductsList