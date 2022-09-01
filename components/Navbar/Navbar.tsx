import Image from 'next/image';
import { FC } from 'react';

import Logo from "../../public/img/logo.png"
import InputSearch from '../Ui/InputSearch';
import styles from "./navbar.module.scss";

interface INavbarProps {}

const Navbar: FC<INavbarProps> = ({}) => {
    return (
        <nav className={styles.navbar}>
            <section className={styles.navbar__search}>
                <Image
                    src={Logo}
                    alt="input search icon"
                    height={40}
                    width={60}
                />
                <InputSearch />
            </section>
        </nav>
    )
}

export default Navbar;