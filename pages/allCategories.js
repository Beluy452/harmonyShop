import Layout from '@components/Layout'
import { URL_GET_CATEGORIES } from 'api';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select'
import React from 'react';

const AllCategories = ({ categories, title, description, ...props }) => {
	const [age, setAge] = React.useState('');

	const handleChange = (event) => {
		setAge(event.target.value);
	};

	return (
		<>
			<Layout pageTitle={`${title} | About`} description={description}>
				<FormControl fullWidth>
					<InputLabel id="demo-simple-select-label">Categories</InputLabel>
					<Select
						value={age}
						label="Categories"
						id="demo-simple-select"
						onChange={handleChange}
						labelId="demo-simple-select-label"
					>
						{categories.length && categories.map(item => {
							return (
								<MenuItem key={item.category_id} value={item.category_id}>{item.category_name}</MenuItem>
							)
						})}
					</Select>
				</FormControl>
			</Layout>
		</>
	)
}

export default AllCategories

export async function getStaticProps() {
	const configData = await import(`../siteconfig.json`);

	const res = await fetch(URL_GET_CATEGORIES);
	const categories = await res.json();

	if (!categories) {
		return {
			notFound: true,
		}
	}

	return {
		props: {
			categories: categories.response,
			title: configData.default.title,
			description: configData.default.description,
		},
	}
}
