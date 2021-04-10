
import { Button } from '../../shared';
import { logout } from '../../../api/auth';
import { Link } from 'react-router-dom';
import {AuthContextConsumer} from '../context'

const AuthButton = ({ className, isLogged, onLogout }) => {
	const handleLogoutClick = () => {
		logout().then(onLogout);
	};

	
	const props = isLogged 
		? { onClick: handleLogoutClick, children: 'Log out' }
		: {
			as:Link,
			to:'/login',
			children: 'Log in',
		};

	return <Button className={className} {...props} />;
};
const conectedAuthButton = props => {
	return <AuthContextConsumer>
		{(value)=>{
			return <AuthButton 
			isLogged={value.isLogged} 
			onLogout={value.onLogout}
			
			{...props} />
		}}
		
	</AuthContextConsumer>
	
}


export default conectedAuthButton;
