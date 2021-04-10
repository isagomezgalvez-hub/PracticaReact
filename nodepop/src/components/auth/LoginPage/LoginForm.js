import React from 'react';

import { Button, Checkbook, FormField} from '../../shared';
import T from 'prop-types';
import useForm from '../../../hooks/useForm';

import './LoginForm.css';


function LoginForm({onSubmit, isLoading}){
	const [credentials, handleChange, handleSubmit] = useForm({
		email: '',
		password: '',
		selected: false
	})


	const handleFormSubmit = (event) => {
		onSubmit(credentials);
	}
	
	const {email, password,selected} = credentials

	return(
		<form className="LoginForm" onSubmit={handleSubmit(handleFormSubmit)}>

			<FormField 
			type="email" 
			name="email" 
			className="loginForm-field" 
			placeholder="email or username"
			value={email}
			onChange={handleChange}
			/>
			
			<FormField 
			type="password" 
			name="password" 
			className="loginForm-field"
			placeholder="password"
			value={password}
			onChange={handleChange}
			/>
			
			<Checkbook 
			type="checkbox"
			name="selected"
			label="Recuerdame"
			onChange={handleChange}
			checked={selected}
			/>

			<Button 
			type ="submit"
			variant="primary" 
			className="loginForm-submit"
			/* disabled={isLoading || !email || !password} */
			>
			Log in
			</Button>
		</form>
	)
}


LoginForm.propTypes = {
	onSubmit: T.func.isRequired,
	isLoading: T.bool,
}

LoginForm.defaultProps = {
	isLoading: false,
}

export default LoginForm;