import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './Form.module.scss';

export default class Form extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showSignIn: true
		};

		this.handleSwitchTabs = this.handleSwitchTabs.bind(this);
	}

	handleSwitchTabs = e => {
		const target = e.target.name === 'sign-in' ? true : false;
		this.setState({
			showSignIn: target
		});
	};

	render() {
		const { showSignIn } = this.state;

		const btnSignIn = `${styles.btn} ${styles.btnSmall} ${
			showSignIn ? styles.btnActive : ''
		}`;
		const btnSignUp = `${styles.btn} ${styles.btnSmall} ${
			showSignIn ? '' : styles.btnActive
		}`;

		return (
			<div className={styles.form}>
				<div className={styles.tabs}>
					<button
						onClick={this.handleSwitchTabs}
						name="sign-in"
						className={btnSignIn}>
						Sign In
					</button>
					<button
						onClick={this.handleSwitchTabs}
						name="sign-up"
						className={btnSignUp}>
						Sign Up
					</button>
				</div>
				<div>
					<form className={styles.body} action="#">
						<div>
							<input
								className={styles.input}
								id="email"
								type="email"
								placeholder="Email"
								required
							/>
							<input
								className={styles.input}
								id="password"
								type="password"
								placeholder="Password"
								required
							/>
						</div>
						<Link to="/">
							<button className={`${styles.btn} ${styles['btn-big']}`}>
								{showSignIn ? 'Login' : 'Register'}
							</button>
						</Link>
					</form>
				</div>
			</div>
		);
	}
}
