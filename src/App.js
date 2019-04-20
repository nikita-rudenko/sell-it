import React, { Component } from 'react';
import './sass/main.scss';
import LoginPage from './components/LoginPage';
import ProductList from './components/ProductList';

class App extends Component {
	state = {
		showLoginPage: true
	};

	handleClick = () =>
		this.setState({ showLoginPage: !this.state.showLoginPage });

	render() {
		const toRender = this.state.showLoginPage ? (
			<LoginPage shift={this.handleClick} />
		) : (
			<ProductList shift={this.handleClick} />
		);

		return <div className="App">{toRender}</div>;
	}
}

export default App;
