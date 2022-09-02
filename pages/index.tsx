import type { NextPage } from 'next';
import { GetStaticProps } from 'next'

import AppLayout from '../components/AppLayout/AppLayout';
import axiosClient from '../helpers/axiosClient';
import ProductsList from '../components/ProductsList';
import { IDataMlResponse, IResult } from '../interfaces';

interface IHomeProps {
	products: IResult[],
}

const Home: NextPage<IHomeProps> = ({ products }) => {
	return (
		<AppLayout>
			<ProductsList products={products} />
		</AppLayout>
	)
}

export const getStaticProps: GetStaticProps = async (ctx) => {
	
	const { data } = await axiosClient.get<IDataMlResponse>("/search?q=Apple ipod");

	return {
		props: {
			products: data?.results,
		}
	}
}

export default Home;
