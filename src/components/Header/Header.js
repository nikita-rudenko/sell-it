import React from 'react';
// import "./Header.scss";
import { Link } from 'react-router-dom';
import styles from './Header.module.scss';

export default function Header() {
	return (
		<header className={styles.header}>
			<img
				className={styles.header__logo}
				src="img/logo-small-min.png"
				alt="Small logo."
			/>
			<div className={styles.search}>
				<img
					className={styles.search__icon}
					src="img/icons/fa-search.png"
					alt="Search icon"
				/>
				<input
					className={styles.search__input}
					type="text"
					placeholder="Try to find something"
				/>
			</div>
			<div className={styles.userblock}>
				<div className={styles.userblock__profile}>
					<img
						className={styles.userblock__avatar}
						src="img/avatar-min.png"
						alt="User avatar"
					/>
					<div className={styles.userblock__name}>Kim Evans</div>
				</div>
				<Link to="/login">
					<button className={styles.userblock__signout}>
						<img
							src="img/icons/fa-sign-out.png"
							title="Sign Out"
							alt="Sign Out."
						/>
					</button>
				</Link>
			</div>
		</header>
	);
}
