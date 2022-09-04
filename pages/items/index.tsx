import type { GetServerSideProps, NextPage } from 'next';

import AppLayout from '../../components/AppLayout/AppLayout';
import ProductsList from '../../components/ProductsList';
import { setTitleTag } from '../../helpers/setTags';
import { getProducts } from '../../services/products';
import { getCategories } from '../../helpers/getCategories';
import { IProductItems, IResult } from '../../interfaces';

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

	const { search } = query as { search: string };

		const data = await getProducts(search);

		const categories = getCategories(data?.available_filters[0]?.values);

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
			free_shipping: item?.shipping?.free_shipping,
			address: item?.address?.state_name
		}));

	return {
		props: {
			query: search,
			products: results
		}
	}
}

export default Search;
