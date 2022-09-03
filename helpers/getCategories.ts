
interface IArrItem {
    id: string;
    name: string;
    results: number;
}

export const getCategories = (arr: IArrItem[]) => {
    let categories: string[] = [];

    arr.forEach((element: IArrItem) => {
        const { name } = element;
        categories.push(name);
    });

    return categories;
}