import React, { Component } from 'react';
import styles from './LoginPage.module.scss';
import Form from '../Form/Form';

export default class LoginPage extends Component {
	render() {
		return (
			<>
				<div className={styles['login-page']}>
					<div className={styles.background} />

					<div className={styles.sidebar}>
						<div className={styles.logo}>
							<img src="/img/logo-big-min.png" alt="Big logo." />
						</div>

						<Form />
					</div>
				</div>
				{/* <footer className="footer">
					<span>2017 - front-end labs Light IT</span>
				</footer> */}
			</>
		);
	}
}
