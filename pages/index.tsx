import type { NextPage } from 'next';

import AppLayout from '../components/AppLayout/AppLayout';

interface IHomeProps {};

const Home: NextPage<IHomeProps> = ({}) => {
	return (
		<AppLayout
			titleTag="Mercado Libre México - Envíos Gratis en el día"
		/>
	)
}

export default Home;
