import fetch from 'jest-fetch-mock';
import { create } from "react-test-renderer";
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import Home from '../pages';
import Navbar from '../components/Navbar';
import AppLayout from '../components/AppLayout';
import Breadcrumbs from '../components/Ui/Breadcrumbs';
import InputSearch from "../components/Ui/InputSearch";
import axiosClient from "../helpers/axiosClient";
import ProductDetail from "../pages/items/[id]";
import { getCondition } from '../helpers/getCondition';
import { currencyFormat } from '../helpers/currencyFormat';
import { capitalize, setTitleTag } from '../helpers/setTags';

jest.mock('next/router', () => ({
	useRouter() {
		return {
			router: "/",
			pathname: "",
			query: "",
			asPath: "/",
			push: jest.fn()
		}
	}
}));

jest.spyOn(require("next/router"), "useRouter")

global.fetch = require('jest-fetch-mock');

// Services
describe("Fetch Api to all products", () => {
	beforeEach(() => {
		fetch.resetMocks()
	});

	test("Call to All products", async() => {

		const { data } = await axiosClient.get("https://api.mercadolibre.com/sites/MLA/search?q=producto&limit=4")

		expect(data.results[0].id).toMatch("MLA")
	});
});

describe("Fetch Api to product detail", () => {
	beforeEach(() => {
		fetch.resetMocks()
	});

	test("Call to product detail", async() => {

		const { data } = await axiosClient.get("https://api.mercadolibre.com/items/MLA884180079")

		expect(data.id).toMatch(/MLA/)
	});
});

describe("Fetch Api to product description", () => {
	beforeEach(() => {
		fetch.resetMocks()
	});

	test("Call to product detail", async() => {

		const { data } = await axiosClient.get("https://api.mercadolibre.com/items/MLA884180079/description")

		expect(data.snapshot.url).toMatch(/descriptions.mlstatic.com/)
	});
});

// Helpers
describe("Currency format helper", () => {
	const currency = currencyFormat(100);

	test("return number formatted", () => {
		expect(currency).toBe("$100.00");
	});
});

describe("Capitalize helper", () => {
	const sentence = capitalize("hello world");

	test("Capitalize a sentence", () => {
		expect(sentence).toBe("Hello world");
	});
});

describe("Set title tag helper", () => {
	const sentence = setTitleTag("xbox");

	test("Capitalize params and join params with the sentence | Mercado libre", () => {
		expect(sentence).toBe("Xbox | MercadoLibre 📦");
	});
});

describe("Get conditions helper", () => {
	const word = getCondition("new");

	test("Change lang to spanish, if the word doesnt register return same", () => {
		expect(word).toBe("Nuevo");
	});
});

// Components
describe("Breadcrumbs snapshot", () => {

	test('render breadcrumbs', () => {
		render(<Breadcrumbs />);
	});

	test('Check footer component UI', () => {
		const breadcrumbs = create(<Breadcrumbs />)
		expect(breadcrumbs.toJSON()).toMatchSnapshot()
	});
});

describe("Input search snapshot", () => {

	test('render input search', () => {
		render(<InputSearch />);
	});

	test('Check input search component UI', () => {
		const inputsearch = create(<InputSearch />)
		expect(inputsearch.toJSON()).toMatchSnapshot()
	});
});

describe("Navbar component", () => {

	test('render navbar component', () => {
		render(<Navbar />)
  	});
});

describe("App layout component", () => {

	test('render app layout component', () => {
		render(<AppLayout />)
  	});

    test("App layout title rendering", () => {
		const text = "Mercado libre";

        render(<AppLayout titleTag={text} />);

        expect(text).toMatch(/Mercado libre/);
    });
});

// Pages
describe("Search page", () => {

	test('Render search page', () => {
		render(<Home />)
  	});
});

describe("Product detail page", () => {
	const product = {
		author: {
			name: "Jesus",
			lastname: "Ponce"
		},
		item: {
			id: "MLA884180079",
			title: "Product",
			price: {
				currency: "ARS",
				amount: 12,
				decimals: 12,
			},
			picture: "thumbnail",
			condition: "new",
			free_shipping: true,
			sold_quantity: 2,
			description: "description",
		}
	}

	test('Render product detail page', () => {
		render(<ProductDetail product={product}/>)
  	});
});

