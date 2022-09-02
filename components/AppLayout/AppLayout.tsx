import { FC, ReactNode } from 'react';

import Navbar from '../Navbar';
import Breadcrumbs from '../Ui/Breadcrumbs';
import styles from "./applayout.module.scss";

interface IAppLayoutProps {
    children: ReactNode;
}

const AppLayout: FC<IAppLayoutProps> = ({ children }) => {
    return (
        <>
            <Navbar />
            <main className={styles.main}>
			    <Breadcrumbs />
                {children}
            </main>
        </>
    )
}

export default AppLayout;