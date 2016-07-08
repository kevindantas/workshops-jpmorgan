import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { lightBlue500, blueGrey600, white } from 'material-ui/styles/colors';

import AppBarComponent from '../imports/ui/components/AppBar';



const muiAppTheme = getMuiTheme({
	palette: {
		primary1Color: lightBlue500,
		textColor: blueGrey600,
    alternateTextColor: white,
	}
})


export default class App extends Component {

	render() {
		return (	
		  <MuiThemeProvider  muiTheme={muiAppTheme}>
				<AppBarComponent title="Workshops" />
			</MuiThemeProvider>
		);
	}

}