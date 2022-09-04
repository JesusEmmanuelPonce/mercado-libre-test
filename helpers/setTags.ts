export const capitalize = (str: string = "") => {
    const lower = str.toLowerCase();

    return str.charAt(0).toLocaleUpperCase() + lower.slice(1);
};

export const setTitleTag = (str: string = "") => {

    const result = `${capitalize(str)} | MercadoLibre 📦`

    return result;
};
