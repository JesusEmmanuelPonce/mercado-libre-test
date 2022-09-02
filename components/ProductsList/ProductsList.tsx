import { FC } from 'react';

import { IResult } from '../../interfaces';
import { currencyFormat } from '../../helpers/currencyFormat';
import styles from "./productsList.module.scss"

interface IProductsListProps {
    products: IResult[]
};


const ProductsList: FC<IProductsListProps> = ({ products }) => {

    console.log(products);
    return (
        <ul className={styles.productListWrap}>
            { products.map((product: IResult) => (
                <li
                    key={product?.id}
                    className={styles.productListWrap__row}
                >
                    <div className={styles.content}>
                        <img
                            src={product?.thumbnail}
                            alt="product ml"
                            className={styles.productImage}
                        />
                        <div className={styles.productDescription}>
                            <div className={styles.productDescription__priceAndLabel}>
                                <p>{currencyFormat(product?.price)}</p>
                                <span>{product?.address?.state_name}</span>
                            </div>
                            <p className={styles.productDescription__title}>{product?.title}</p>
                            <p className={styles.productDescription__tag}>Completo Unico!</p>
                        </div>
                    </div>
                </li>
            )) }
        </ul>
    )
}

export default ProductsList