import * as React from 'react';
import Link from 'next/link'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, FormControl, Grid, InputLabel, MenuItem, Select, Typography } from '@mui/material';

const formatPrice = (price) => `${price / 100} грн`;

export const ProductList = ({ products }) => {
	if (products === 'undefined') return null

	if (!products.length) return <div>No nut pastes!</div>

	const [age, setAge] = React.useState('');

	const handleChange = (event) => {
		setAge(event.target.value);
	};

	return (
		<Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
			{products.map((item) => (
				<Grid key={item.product_id} item xs={4}>
					<Card sx={{ maxWidth: 345 }}>
						<CardActionArea>
							<Link href={{ pathname: `/product/${encodeURIComponent(item.product_name)}` }}>
								<a>
									<CardMedia
										component="img"
										height="140"
										image={item.photo && `https://joinposter.com/${item.photo}`}
										alt={item.product_name}
										loading="lazy"
									/>
									<CardContent>
										<Typography gutterBottom variant="h5" component="h2">
											{item.product_name}
										</Typography>
										<Typography variant="body2" color="text.secondary">
											Lizards are a widespread group of squamate reptiles, with over 6,000
											species, ranging across all continents except Antarctica
										</Typography>
									</CardContent>
								</a>
							</Link>
						</CardActionArea>
						<CardActions>
							<FormControl fullWidth>
								<Button size="small" color="primary">
									Замовити
								</Button>
							</FormControl>
							<FormControl size="medium" fullWidth>
								<InputLabel id="demo-simple-select-label">Вага</InputLabel>
								<Select
									labelId="demo-simple-select-label"
									id="demo-simple-select"
									value={age}
									label="Вага"
									onChange={handleChange}
								>
									{item.modifications.map(item => (
										<MenuItem
											key={item.modificator_id}
											value={item.modificator_id}
										>
											{item.modificator_name}
										</MenuItem>
									))}
								</Select>
							</FormControl>
						</CardActions>
					</Card>
				</Grid>
			))}
		</Grid>
	)
}
