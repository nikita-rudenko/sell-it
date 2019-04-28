import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.scss';

export default function Header() {
	return (
		<header className={styles.header}>
			<img
				className={styles.logo}
				src="img/logo-small-min.png"
				alt="Small logo."
			/>
			<div className={styles.search}>
				<img
					className={styles.icon}
					src="img/icons/fa-search.png"
					alt="Search icon"
				/>
				<input
					className={styles.input}
					type="text"
					placeholder="Try to find something"
				/>
			</div>
			<div className={styles.userblock}>
				<div className={styles.profile}>
					<img
						className={styles.avatar}
						src="img/avatar-min.png"
						alt="User avatar"
					/>
					<div className={styles.name}>Kim Evans</div>
				</div>
				<Link className={styles.signout} to="/login">
					<img
						src="img/icons/fa-sign-out.png"
						title="Sign Out"
						alt="Sign Out."
					/>
				</Link>
				<div className={styles.submenu}>
					<button className={styles.subaction}>Add new post</button>
					<button className={styles.subaction}>Profile</button>
				</div>
			</div>
		</header>
	);
}
