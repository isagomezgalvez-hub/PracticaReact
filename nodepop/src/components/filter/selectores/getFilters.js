import { useEffect, useState } from "react";
import { getLastestProducts } from "../../../api/products"
import Product from "../../products/Product/Product";
import FilterProduct from "../FilterProduct";

export const GetFilters = (name = '', sale = null,) => {
	const [product, setProduct] = useState([]);
	const [FilterProduct, setFilterProducts] = useState([])

	
	const Products = useEffect(() => {
		getLastestProducts().then(setProduct);
	}, []);

	
	
	name = name.toLocaleLowerCase();
	sale = sale === true || sale === false 
	

	return product.filter(product => {
		return(
		product.name.toLocaleLowerCase().includes(name) || product.sale 

		)
		})
		

}

