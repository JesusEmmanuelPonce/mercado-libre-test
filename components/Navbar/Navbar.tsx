import Image from 'next/image';
import { FC } from 'react';
import { useRouter } from 'next/router';

import Logo  from "/public/img/logo.png"
import InputSearch from '../Ui/InputSearch';
import styles from "./navbar.module.scss";

interface INavbarProps {};

const Navbar: FC<INavbarProps> = ({}) => {

    const router = useRouter();

    const handleToHome = () => {
        router.push("/");
    };

    return (
        <nav className={styles.navbar}>
            <section className={styles.navbar__search}>
                <button
                    type='button'
                    onClick={handleToHome}
                    className={styles.navbar__search__btn}
                >
                    <Image
                        src={Logo}
                        alt="input search icon"
                        height={40}
                        width={60}
                        layout="fixed"
                    />
                </button>
                <InputSearch />
            </section>
        </nav>
    )
};

export default Navbar;
