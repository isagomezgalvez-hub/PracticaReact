import React, { useState } from 'react'
import ProductDetails from '../products/ProductDetails/ProductDetails';
import Button from './Button'

const ConfirmationButton = ({message, onConfirm })=>{
	const [open, setOpen] = React.useState(false);
	const HandleClick = () => {
			setOpen(!open) 
	}

	const SubmitNo = () => {
		const menssageBox =document.getElementById("message");
		menssageBox.classList.add("hidden");
		HandleClick()
	}
	
	const HandleYes = (e) => {
		HandleClick();
		onConfirm(e);
	}
	
	return(
		<div>
		<Button onClick={HandleClick}>Borrar</Button>
			{open && 
			<div className="loginPage-error" id="message" >
				<div>
					<p>{message}</p>
					<Button onClick={HandleYes}>Si</Button>
					<Button onClick={SubmitNo}>No</Button>
				</div>
			</div>
			}
		</div>
	)
	
}

export default ConfirmationButton