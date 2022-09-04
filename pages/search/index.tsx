import type { GetServerSideProps, NextPage } from 'next';

import AppLayout from '../../components/AppLayout/AppLayout';
import axiosClient from '../../helpers/axiosClient';
import ProductsList from '../../components/ProductsList';
import { IProductItems, IResult } from '../../interfaces';
import { setTitleTag } from '../../helpers/setTags';
import { getCategories } from '../../helpers/getCategories';

interface ISearchProps {
	query: string;
	products: IProductItems[],
}

const Search: NextPage<ISearchProps> = ({ products, query }) => {
	return (
		<AppLayout
			titleTag={setTitleTag(query)}
		>
			<ProductsList products={products} />
		</AppLayout>
	)
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {

	const { q } = query as { q: string };

	    const { data } = await axiosClient.get(`/sites/MLA/search?q=${q}&limit=4`);

		const categories = getCategories(data.available_filters[0]?.values);

		const results = data?.results.map((item: IResult) => ({
			id: item?.id,
			title: item?.title,
			categories,
			price: {
				currency: item?.currency_id,
				amount: item?.price,
				decimals: item?.price
			},
			picture: item?.thumbnail,
			condition: item?.condition,
			free_shipping: item?.shipping?.free_shipping
		}));

	return {
		props: {
			query: q,
			products: results
		}
	}
}

export default Search;
