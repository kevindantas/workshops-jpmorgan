import React, { Component, PropTypes } from 'react';

// Inputs
import TextField from 'material-ui/TextField';
import LoginField from './LoginField';

// Icons
import GithubIcon from '../icons/GithubIcon';
import GoogleIcon from '../icons/GoogleIcon';
import ExitIcon from 'material-ui/svg-icons/action/exit-to-app';


// Buttons
import RaisedButton from 'material-ui/RaisedButton';
import GithubButton from '../buttons/GithubButton';
import FacebookButton from '../buttons/FacebookButton';
import GoogleButton from '../buttons/GoogleButton';

// Themes
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';


export default class Login extends Component {


	/**
	 * @constructor
	 * @param  {object} props
	 */
	constructor (props) {
		super(props);

		this.labelStyle={
			color: '#F9F9F9'
		};

		this.hintStyle={
			color: '#DFDFDF'
		}

		this.inputStyle = {
			color: '#F9F9F9'
		}

	}


	getChildContext () {
		return {
			muiTheme: getMuiTheme(lightBaseTheme)
		}
	}

	/**
	 * Render the component
	 * @return {dom} Rendered component
	 */
	render () {
		return (
			<form className="login-form">

				<h1 className="logo">
					Desenvolvedor Multiplataforma Web &amp; Mobile
				</h1>

				<fieldset>
					<LoginField  />
					<TextField 
						type="password" 
						required={true}
						hintText="********" 
						floatingLabelText="Senha" 
						floatingLabelFixed={true}  
						hintStyle={this.hintStyle}
						inputStyle={this.inputStyle}
						floatingLabelStyle={this.labelStyle}
						fullWidth={true} />
					<RaisedButton label="Entrar" primary={true} className="button rounded" />

					<a href="#">  Caso seja seu primeiro acesso clique aqui ou use uma das redes sociais abaixo </a>
				</fieldset>

				<fieldset>
					<GithubButton label="Login com Github" className="button" />
					<FacebookButton label="Login com o Facebook" className="button" />
					<GoogleButton label="Login com o Google" className="button" />
				</fieldset>
			</form>
		)
	}
}

Login.childContextTypes = {
	muiTheme: React.PropTypes.object.isRequired
};