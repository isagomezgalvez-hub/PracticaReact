import React from 'react';
import Product from './Product';
import { Link } from 'react-router-dom'


const renderProduct = history => product => {
	return <Product key={product.id} {...product} history={history} />
	
}

const ProductList = ({ product, history }) =>{
	
return (
	<div className="column"> 
	<h1 className="title is-3 feature-title">Los productos más buscados</h1>
		<div className="columns">
		{product.map( product => 
			<Link to={`/advert/${product.id}`}>
				<Product 
				key={product.id}
				{...product}
				
				/>
			</Link>
		)}
		</div>
	</div>)
}


export default ProductList;