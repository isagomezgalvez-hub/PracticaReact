import React from 'react';
import './ProductDetails.css'
import Layout from '../../layout/Layout';
import { getProductDetails, deleteProduct } from '../../../api/products'
import { Redirect,  withRouter} from 'react-router';
import ConfirmationButton from '../../shared/ConfirmationButton';


class ProductDetails extends React.Component{
	constructor(){
		super();
		this.state= {
			product: null,
			error: null,
		}

	}
	

	componentDidMount(){
		const { match  } = this.props
		getProductDetails(match.params.id).then(product =>{
			this.setState ({product})
		}).catch(error => this.setState({error}));
	}

	handleClick = (e) => {
		e.preventDefault();
		const { match } = this.props
		deleteProduct(match.params.id).then(()=>{
			this.props.history.push('/')
		}).catch(error => this.setState({ error }));
	
	}
	render(){
		const { error, product} = this.state
	if(error && error.status === 404 ){
		return <Redirect to="/404" />
	}
	
	
	const Product = ({...product })
	const url = 'http://localhost:3001' + Product.photo;
	return (
		
		<Layout {...this.props}>
			<article>
				<div className="card-image">
					<img src={!Product.photo ? 'https://bulma.io/images/placeholders/640x480.png' : url} width="1000" height="1000"  alt="Imagen Producto" />
				</div>
				<p>{Product.id}</p>
				<p>{Product.name}</p>
				<p>{Product.sale}</p>
				<ConfirmationButton 
					message='¿Estas Seguro de Borrar este Producto?'
					onConfirm={ this.handleClick}/>

			</article>
		
		</Layout>
		);
	}
};

export default withRouter(ProductDetails);