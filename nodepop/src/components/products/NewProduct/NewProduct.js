import React from 'react';
import './NewProduct.css'
import Layout from '../../layout/Layout';
import NewProductForms from './NewProductForm';
import {createProduct } from '../../../api/products'
import { Redirect } from 'react-router';

const NewProduct = ({...props}) => {
	const [error, setError] = React.useState(null)
	const [createdProduct, setCreatedProduct] = React.useState(null)

	const handleSubmit = async NewProduct =>{
		try {
			const product = await createProduct(NewProduct)
			setCreatedProduct(product)
		} catch (error) {
			setError(true)
		}
	};

	if (error && error.status === 401) {
		return <Redirect to="/login" />
	}

	if (createdProduct) {
		return <Redirect to={`/advert/${createdProduct.id}`} />
	}

	return (
		<Layout {...props}>
			New Product
			<NewProductForms onSubmit={handleSubmit}/>
		</Layout>
	);
};

export default NewProduct;