import Image from "next/image";
import styles from "./inputSearch.module.scss"
import Ic_Search from "../../../public/img/ic_Search.png"
import { ChangeEvent, FC, useState } from "react";

interface IInputSearchProps {};

const InputSearch: FC<IInputSearchProps> = ({}) => {

    const [search, setSearch] = useState<string>("")

    const handleSearch = () => {
        console.log("Searching...");
    }

    return (
        <div className={styles.inputSearch}>
            <input
                type="text"
                value={search}
                placeholder="Nunca dejes de buscar"
                onChange={({ target: { value } }: ChangeEvent<HTMLInputElement>) => setSearch(value)}
            />
            <button
                type="button"
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