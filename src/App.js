import React, { Component } from 'react';
// import './main.scss';
import './sass/main.scss';
import LoginPage from './components/LoginPage';

class App extends Component {
	render() {
		return (
			<div className="App">
				<LoginPage />
			</div>
		);
	}
}

export default App;
