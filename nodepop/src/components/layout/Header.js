import React from 'react';
import classNames from 'classnames';
import logo from '../../assets/logoNodepop.png'	
import AuthButton from '../auth/AuthButton'
import './Header.css'
import Button from '../shared/Button'
import {Link, NavLink} from 'react-router-dom'


const Header = ({ className, ...props }) => {
	return(
		<header className ={classNames('header', className)}{...props}>
			<Link to="/">
			<div className="header-logo">
				<img src={logo} width="140" height="28" alt="logo"></img>
			</div>
			</Link>
			<div className="navbar">
				<nav className="navbar-menu">
					
					<div className="navbar-end">
						<div className="navbar-item">
							<NavLink to="/adverts" activeClassName="selected" className="navbar-item">
								Listado
							</NavLink>
							<NavLink to="/filter" activeClassName="selected" className="navbar-item">
								Filtro
							</NavLink>
						
							<Button 
							as={Link}
							to="/advert/new"
							variant="primary"
							className="header-button"> 
							Publicar 
							</Button>
							<AuthButton className="header-button"/>
						</div>
					</div>
				
			</nav>
			</div>
		</header>
	)
}


export default Header;