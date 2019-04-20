import React, { Component } from 'react';

export default class LoginPage extends Component {
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
								<button className="form__btn form__btn--small">Sign In</button>
								<button className="form__btn form__btn--small">Sign Up</button>
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
										Login
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
