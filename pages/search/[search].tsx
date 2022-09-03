import type { GetServerSideProps, NextPage } from 'next';

import AppLayout from '../../components/AppLayout/AppLayout';
import axiosClient from '../../helpers/axiosClient';
import ProductsList from '../../components/ProductsList';
import { IProductItems, IResult } from '../../interfaces';

interface ISearchProps {
	products: IProductItems[],
}

const Search: NextPage<ISearchProps> = ({ products }) => {
	return (
		<AppLayout>
			<ProductsList products={products} />
		</AppLayout>
	)
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {

	const { search } = params as { search: string };

	    const { data } = await axiosClient.get(`/sites/MLA/search?q=${search}&limit=4`);

		const results = data?.results.map((item: IResult) => ({
			id: item?.id,
			title: item?.title,
			categories: [],
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
			products: results
		}
	}
}

export default Search;
