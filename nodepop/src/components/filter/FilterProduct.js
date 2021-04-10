import React, { useEffect, useMemo, useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
import { getLastestProducts } from '../../api/products';
import useForm from '../../hooks/useForm';
import Product from '../products/Product/Product';
import { Button, FormField } from '../shared';
import queryString from 'query-string';
import Layout from '../layout/Layout';
import {GetFilters} from './selectores/getFilters'


import './FilterProduct.css'



const FilterProduct = ({ onSubmit, history, ...props})=>{
	const [product, setProduct] = useState([]);

	const Products = useEffect(() => {
		getLastestProducts().then(setProduct);
	}, []);

	const location = useLocation();

	const queryString = require('query-string');


	const { q = '', s=null } = queryString.parse(location.search, { parseBooleans: true })
	
	const [formValues, handleChange, handleSubmit] = useForm({
		name: q,
		sale: s,
		
	})
	const { name,sale } = formValues;

	const handleFilter = (e)=>{
		e.preventDefault();
		history.push(`?q=${name}&s=${sale}`);
	}	

	const productFiltered = GetFilters(q,s)
	
return(
		< Layout {...props } >
<div className="column">
		<div className="columns">
			<form className="LoginForm-product" onSubmit={handleFilter}>
			
				<p>Nombre del producto</p>
				<FormField 
				type="text"
				name="name"
				value={name}
				autoComplete="off"
				onChange={handleChange}
				/>

				
				<p>Venta</p>
				<FormField
					type="radio"
					name="sale"
					value={true}
					autoComplete="off"
					onChange={handleChange}
				/>
				<p>Búsqueda</p>
				<FormField
					type="radio"
					name="sale"
					value={false}
					autoComplete="off"
					onChange={handleChange}
				/>

			
		
			{/* <div className="BoxFilter">
				<p>¿Cuánto quieres pagar?</p>
		
				<FormField
					type="number"
					id="precioMax"
					name="precio"
					value="precioMax"
					label="Max" />
		
				<FormField
					type="number"
					id="precioMin"
					name="precio"
					value="precioMin"
					label="Min" />
			</div>
			<div className="BoxFilter">
				
			</div>
			<div className="BoxFilter">
				<p>¿Cuales etiquetas quieres filtrar?</p>
				<select multiple
					name="tags">
					<option value={'lifestyle'}>Lifestyle</option>
					<option value={'mobile'}>Mobile</option>
					<option value={'motor'}>Motor</option>
					<option value={'work'}>Work</option>
				</select>
			</div> */}
						
			<Button
				type="submit"
				variant="primary"
				className="loginForm-submit">
				Filtrar
				</Button>
		</form>
		</div>
		<div className="columns">
	
			{productFiltered.map(product =>
				<Link to={`/advert/${product.id}`}>
					<Product
						key={product.id}
						{...product}
					/>
				</Link>
			)}

		
		</div>
	
		
</div>
	

</Layout > 


)

}

export default FilterProduct;