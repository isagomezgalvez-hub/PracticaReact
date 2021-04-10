//Gestionamos todas las llamadas a product

import client from './client';

const productBaseURL = '/api';

export const getLastestProducts = () => {
	const url = `${productBaseURL}/v1/adverts`;
	return client.get(url);
};

export const getProductDetails = id =>{
	const url = `${productBaseURL}/v1/adverts/${id}`;
	return client.get(url);
}

export const createProduct = product => {
	const url = `${productBaseURL}/v1/adverts`;
	return client.post(url, product);
}


export const deleteProduct = id => {
	const url = `${productBaseURL}/v1/adverts/${id}`;
	return client.delete(url);
}



