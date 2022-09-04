import Head from 'next/head';
import { useRouter } from 'next/router';
import { FC, ReactNode } from 'react';

import Navbar from '../Navbar';
import Breadcrumbs from '../Ui/Breadcrumbs';
import styles from "./applayout.module.scss";

interface IAppLayoutProps {
    titleTag?: string;
    children?: ReactNode;
};

const AppLayout: FC<IAppLayoutProps> = ({ children, titleTag }) => {

    const { pathname } = useRouter();

    return (
        <>
            <Head>
                <title>{titleTag}</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
                <meta name="description" content="Compre productos con Envío Gratis en el día en Mercado Libre México. Encuentre miles de marcas y productos a precios increíbles." />
                <link href="https://http2.mlstatic.com/frontend-assets/ml-web-navigation/ui-navigation/5.19.5/mercadolibre/favicon.svg" rel="icon" data-head-react="true" />
                <link href="https://http2.mlstatic.com/frontend-assets/ml-web-navigation/ui-navigation/5.19.5/mercadolibre/180x180.png" rel="apple-touch-icon" data-head-react="true" />
            </Head>
            <Navbar />
            <main className={styles.main}>
                { pathname !== "/" ? <Breadcrumbs /> : undefined }
                {children}
            </main>
        </>
    )
};

export default AppLayout;
