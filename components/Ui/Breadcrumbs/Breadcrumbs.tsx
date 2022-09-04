import { FC } from "react";

import styles from "./breadcrumbs.module.scss";

interface IBreadcrumbsProps {};

const Breadcrumbs: FC<IBreadcrumbsProps> = ({}) => {
    return (
        <ul className={styles.breadcrumbWrap}>
            <li>Electronica, Audio y Video {" > "}</li>
            <li>iPod {" > "}</li>
            <li>Reproductores {" > "}</li>
            <li>iPod touch {" > "}</li>
            <li className={styles.active}>32 GB</li>
        </ul>
    )
};

export default Breadcrumbs;
