import React, { Component } from 'react';
import './sass/main.scss';
import LoginPage from './components/LoginPage/LoginPage';
import ProductList from './components/ProductList/ProductList';
import { Switch, Route } from 'react-router-dom';

class App extends Component {
	render() {
		return (
			<>
				<Switch>
					<Route exact path="/" component={ProductList} />
					<Route exact path="/login" component={LoginPage} />
				</Switch>
			</>
		);
	}
}

export default App;
