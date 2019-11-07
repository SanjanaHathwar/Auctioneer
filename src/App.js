import React from 'react';
import Navbar from './component/layout/Navbar';
import { createMuiTheme , MuiThemeProvider } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import { Provider } from 'react-redux'
import store from './store';
const theme = createMuiTheme({

	palette: {
		primary: {
			
			main: '#23374D',
			
			contrastText: "#E5E5E5"
		}
		
	},
});

function App() {
  return (
    <MuiThemeProvider theme={theme}>
		<Provider store={store}>
			<CssBaseline/>
			<div className="App">
				<Navbar/>
			</div>
		</Provider>
	</MuiThemeProvider>
  );
}

export default App;
