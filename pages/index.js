import Layout from '@components/Layout'
import getPosts from '@utils/getPosts'
import { ProductList } from '@components/ProductList'
import { Box } from '@mui/material';

import { URL_GET_PRODUCTS } from 'api';

import styles from '../styles/Home.module.css';

const Index = ({ nuts, madeOfChocolate, title, description, ...props }) => {
	return (
		<>
			<Layout pageTitle={title} description={description}>
				<h1 className={styles.title}>{title}</h1>
				<p className={styles.description}>{description}</p>
				<main>
						<Box>
							<h2>Горіхові пасти</h2>
							<ProductList products={nuts} />
						</Box>
						<Box>
							<h2>Шоколадні вироби</h2>
							<ProductList products={madeOfChocolate} />
						</Box>
				</main>
			</Layout>
		</>
	)
}

export default Index

export async function getStaticProps() {
	const configData = await import(`../siteconfig.json`)

	const nuts = await fetch(`${URL_GET_PRODUCTS}&category_id=4&type=products`);
	const madeOfChocolate = await fetch(`${URL_GET_PRODUCTS}&category_id=5&type=products`);

	const nutsResponse = await nuts.json();
	const madeOfChocolateResponse = await madeOfChocolate.json();

	if (!nutsResponse || !madeOfChocolateResponse) {
		return {
			notFound: true,
		}
	}

	// const nutPastes = ((context) => {
	//   return getPosts(context)
	// })(require.context('../content/nutPastes', true, /\.md$/))

	return {
		props: {
			nuts: nutsResponse.response,
			madeOfChocolate: madeOfChocolateResponse.response.slice(0, 6),
			title: configData.default.title,
			description: configData.default.description,
		},
	}
}
