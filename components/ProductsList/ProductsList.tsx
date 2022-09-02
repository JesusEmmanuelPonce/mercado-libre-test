import Image from 'next/image';
import { FC } from 'react';
import { IResult } from '../../interfaces';

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
                        <img src={product?.thumbnail} alt="product ml" />
                        <div>
                            <p>{product?.price}</p>
                            <p>{product?.title}</p>
                            <p>Completo Unico!</p>
                        </div>
                    </div>
                    <div>
                        Capital Federal
                    </div>
                </li>
            )) }
        </ul>
    )
}

export default ProductsList