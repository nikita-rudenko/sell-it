import React, { Component } from 'react';
import './Form.scss';
import './LoginPage.scss';

export default class LoginPage extends Component {
	state = {
		showSignIn: true
	};

	handleSwitchTabs = show => {
		this.setState({
			showSignIn: show
		});
	};

	render() {
		return (
			<>
				<div className="login-page">
					<div className="background">
						{/* <img
							className="logo-small"
							src="/img/logo-small-min.png"
							alt="Small logo."
						/> */}
					</div>

					<div className="sidebar">
						<div className="sidebar__logo">
							<img
								className="logo-white"
								src="/img/logo-big-min.png"
								alt="Big logo."
							/>
						</div>

						<div className="sidebar__form form">
							<div className="form__tabs u-mb-md">
								<button
									onClick={() => this.handleSwitchTabs(true)}
									className={
										this.state.showSignIn
											? 'form__btn--active form__btn--small'
											: 'form__btn form__btn--small'
									}>
									Sign In
								</button>
								<button
									onClick={() => this.handleSwitchTabs(false)}
									className={
										this.state.showSignIn
											? 'form__btn form__btn--small'
											: 'form__btn--active form__btn--small'
									}>
									Sign Up
								</button>
							</div>
							<div>
								<form className="form__body" action="#">
									<div className="u-mb-md">
										<input
											className="form__input"
											id="email"
											type="email"
											placeholder="Email"
											required
										/>
										<input
											className="form__input"
											id="password"
											type="password"
											placeholder="Password"
											required
										/>
									</div>
									<button
										onClick={this.props.shift}
										className="form__btn form__btn--big">
										{this.state.showSignIn ? 'Login' : 'Register'}
									</button>
								</form>
							</div>
						</div>
					</div>
				</div>
				{/* <footer className="footer">
					<span>2017 - front-end labs Light IT</span>
				</footer> */}
			</>
		);
	}
}
