
import React, { Children, useEffect, useState } from 'react';
import { getLastestProducts } from '../../../api/products';



import Layout from '../../layout/Layout';

import EmptyList from '../../shared/EmptyList';
import ProductList from './ProductList';

import './ProductPage.css';



const ProductPage = ({ className, history, ...props }) => {
	const [product, setProduct] = useState([]);

	useEffect(() => {
		getLastestProducts().then(setProduct);
	}, []);

	


	return (
		<div>
			
			{ <Layout {...props} >
				<div>
				
					{product.length ? <ProductList product={product} history={history} /> : 
						<EmptyList />}
				</div>
			</Layout> }

			
		</div>
	)
};

export default ProductPage