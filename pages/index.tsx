import type { NextPage } from 'next';
import { GetStaticProps } from 'next'

import AppLayout from '../components/AppLayout/AppLayout';
import axiosClient from '../helpers/axiosClient';
import { IProductItems, IResult } from '../interfaces';
import ProductsList from '../components/ProductsList';

interface IHomeProps {
	products: IProductItems[],
}

const Home: NextPage<IHomeProps> = ({ products }) => {
	return (
		<AppLayout>
			<ProductsList products={products} />
		</AppLayout>
	)
}

export const getStaticProps: GetStaticProps = async (ctx) => {
	
	const { data } = await axiosClient.get("/sites/MLA/search?q=Apple ipod&limit=4");

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
			products: results,
		}
	}
}

export default Home;
