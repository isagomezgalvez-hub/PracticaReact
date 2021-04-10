import React, { useState } from 'react'
import { useHistory } from 'react-router';
import Button from './Button';


const EmptyList = () =>  {
const history = useHistory()
	
	return (
	<div style={{ textAlign: 'center' }}>

		<p>Publica tu primer producto</p>
		<Button 
			variant="primary">
			Publicar
	</Button>
		</div>)
}

export default EmptyList;