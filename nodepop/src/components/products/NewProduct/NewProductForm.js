import React, { useState } from 'react'
import useForm from '../../../hooks/useForm';
import { Button, FormField, Checkbook } from '../../shared'

const NewProductForms = ({onSubmit})=>{

const handleChangeRadio=(e)=> {
	handleChange({ target: { name: e.target.name, value: e.target.checked } })
}
const handleChangePhoto = (e) => {
	handleChange({ target: { name: e.target.name, value: e.target.files[0] } })
}
const [product, handleChange, handleSubmit] = useForm({
	name: '',
	sale: true,
	price: '',
	tags :'',
	photo:''
})


const afterPreventDefault = e => {
	const data = new FormData(e.target);
	onSubmit(data)
};

const { name, price, sale,tags, photo} = product;


	const handle = handleSubmit(afterPreventDefault)
	return (
		<form id="ProductForm" className="LoginForm" onSubmit={handle}>

			<FormField
				type="text"
				name="name"
				className="loginForm-field"
				placeholder="Nombre de tu articulo *"
				required
				value={name}
				onChange={handleChange}
			/>

			<FormField
				type="text"
				name="price"
				required
				className="loginForm-field"
				placeholder="Establece tu precio * "
				value={price}
				onChange={handleChange}
			/>

			<Checkbook
				name="sale"
				label="¿Venta?*"
			
				onChange={handleChangeRadio}
				checked={sale}
			/>
			<select
			name="tags"
			onChange={handleChange}
			value={tags}
		 	required>
				<option >Selecciona </option>
				<option value={'lifestyle'}>Lifestyle</option>
				<option value={'mobile'}>Mobile</option>
				<option value={'motor'}>Motor</option>
				<option value={'work'}>Work</option>
			</select>

			<input 
			type="file"
			name="photo"
			onChange={handleChangePhoto}>
			</input>

			<Button
				type="submit"
				variant="primary"
				className="loginForm-submit"
				disabled={!name || !price || !sale || !tags}
			>
				Publicar
			</Button>
		</form>
	)


}


export default NewProductForms