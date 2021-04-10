import React from 'react';
import LoginForm from './LoginForm';
import {login} from '../../../api/auth'
import './LoginPage.css';
import { AuthContextConsumer } from '../context';
import { Redirect } from 'react-router';



function LoginPage({onLogin, history,location  }){
	const [error, setError] = React.useState(null);
	const [isLoading, setIsLoading] = React.useState(false);
	const isLogged = React.useRef(false)

	const resetError = React.useCallback(()=> setError(null),[error]);

	React.useEffect(()=>{
		if(isLogged.current){
			onLogin()
			const {from} = location.state || {from: {pathname:'/'}}
			history.replace(from)
		
		}
	});


	const handleSubmit = async credentials => {
		resetError()
		setIsLoading(true)
		try {
			await login(credentials);
		 	onLogin(); 
			history.replace('/');
			
		} catch (error) {
			setError(error);
		}finally{
			setIsLoading(false)
		}	
	}
	
	return(
		<div className="loginPage">
			<h1 className="loginPage-title">Log in to Nodepop</h1>
			{/* {isLoading && <Spiner/>} */}
			<LoginForm onSubmit={handleSubmit} isLoading={isLoading} variant="primary"/>
			
			{error && <div className="loginPage-error">{error.message}</div>}
		</div>
	)
	
}

const conectedLoginPage =  props =>
	<AuthContextConsumer>
		{value => <LoginPage {...value} {...props}/> }
	</AuthContextConsumer>

export default conectedLoginPage