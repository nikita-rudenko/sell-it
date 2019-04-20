import React, { Component } from 'react';

export default class LoginPage extends Component {
	render() {
		return (
			<>
				<div className="login-page">
					<div className="section-bg">
						<img
							className="logo-small"
							src="/img/logo-small-min.png"
							alt="Small logo."
						/>
					</div>
					<div className="section-login">
						<div className="image u-mb-big">
							<img
								className="logo-big"
								src="/img/logo-big-min.png"
								alt="Big logo."
							/>
						</div>
						<div className="tabs u-mb-md">
							<button className="btn btn-small">Sign In</button>
							<button className="btn btn-small">Sign Up</button>
						</div>
						<div>
							<form className="form" action="#">
								<div className="form-group u-mb-md">
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
								<div className="form-group">
									<button className="btn btn-big">Login</button>
								</div>
							</form>
						</div>
					</div>
				</div>
				<footer className="footer">
					<span>2017 - front-end labs Light IT</span>
				</footer>
			</>
		);
	}
}
