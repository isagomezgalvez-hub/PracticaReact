import React from 'react';
import formatDistance from 'date-fns/formatDistanceToNow'; 
import Button from '../../shared/Button'
const Product = ({ onClick ,...product}) => {
		
	
	 return (
		 <article className="column card-product" onClick={onClick}>
			<div className="card">
			
				<div className="card-content">
					<div className="media">
						<div className="media-content">
							
							<p className="title is-4">€{product.price}</p>
							<p className="subtitle is-6">{product.name}</p>
						</div>
						
						
					</div>
					 
					<div className="content">
						 <Button>
							 {product.sale ? 'Venta' : 'Búsqueda'}
						 </Button>
						 <p>{product.tags}</p>
					 </div>
						 <time dateTime={product.createdAt}>
						{formatDistance(new Date(product.createdAt))} 
					 	</time>
					 
					<div>

						
					</div>
				</div>
				 
			</div>
		</article>
	); 
};


export default Product;
