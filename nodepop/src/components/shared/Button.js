import styled from 'styled-components';

const primaryColor = '#00d1b2';

const Button = styled.button `
background-color:${props => 
	props.variant === 'primary' ? primaryColor : 'white' };
border-color:${props =>
	props.variant === 'primary' ? primaryColor : '#dbdbdb !important' };
color: ${props =>
	props.variant === 'primary' ? 'white' : '#363636' };
cursor: pointer;
justify-content: center;
padding-bottom: calc(0.5em - 1px);
padding-left: 1em;
padding-right: 1em;
padding-top: calc(0.5em - 1px);
text-align: center;
white-space: nowrap;
align-items: center;
border: 1px solid;
border-radius: .375em;
box-shadow: none;
display: inline-flex;
font-size: 1rem;
height: 2.5em;
-webkit-appearance: none;
-webkit-box-pack: center;
-ms-flex-pack: center;

&:hover {
	background-color: ${props =>
		props.variant === 'primary' ? '#00c4a7' : 'white' };
	border-color: ${props =>
	props.variant === 'primary' ? 'transparent' : '#b5b5b5 !important' };
}
`

export default Button;