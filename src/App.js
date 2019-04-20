import React, { Component } from 'react';
import './sass/main.scss';
import LoginPage from './components/LoginPage';
import ProductList from './components/ProductList';

class App extends Component {
	state = {
		loginPage: true
	};

	handleClick = () => this.setState({ loginPage: !this.state.loginPage });

	render() {
		const toRender = this.state.loginPage ? (
			<LoginPage shift={this.handleClick} />
		) : (
			<ProductList shift={this.handleClick} />
		);

		return <div className="App">{toRender}</div>;
	}
}

export default App;
