import { useRouter } from 'next/router';
import { ChangeEvent, FC, KeyboardEvent, useState } from "react";

import Image from "next/image";
import styles from "./inputSearch.module.scss"
import Ic_Search from "/public/img/ic_Search.png"

interface IInputSearchProps {};

const InputSearch: FC<IInputSearchProps> = ({}) => {

    const router = useRouter();

    const [search, setSearch] = useState<string>("")

    const handleSearch = () => {
        router.push(`/search?q=${search}`)
    };

    const onKeyPressSearch = ({ code }: KeyboardEvent<HTMLInputElement>) => {
        if(code === "Enter") {
            handleSearch();
        }
    };

    return (
        <div className={styles.inputSearch}>
            <input
                type="text"
                value={search}
                placeholder="Nunca dejes de buscar"
                onChange={({ target: { value } }: ChangeEvent<HTMLInputElement>) => setSearch(value)}
                onKeyPress={onKeyPressSearch}
            />
            <button
                type="button"
                className={styles.inputSearch__btn}
                onClick={handleSearch}
            >
                 <Image
                    src={Ic_Search}
                    alt="input search icon"
                    width={20}
                    height={20}
                />
            </button>
        </div>
    )
}

export default InputSearch;