import React from 'react';

export default function Header(props) {
	return (
		<header className="header">
			<img
				className="header__logo logo-small"
				src="img/logo-small-min.png"
				alt="Small logo."
			/>
			<div className="header__search search">
				<img
					className="search__icon"
					src="img/icons/fa-search.png"
					alt="Search icon"
				/>
				<input
					className="search__input"
					type="text"
					placeholder="Try to find something"
				/>
			</div>
			<div className="user-block">
				<div className="user-block__profile">
					<img
						className="user-block__avatar"
						src="img/avatar-min.png"
						alt="User avatar"
					/>
					<div className="user-block__name">Kim Evans</div>
				</div>
				<button onClick={props.shift} className="user-block__sign-out">
					<img
						src="img/icons/fa-sign-out.png"
						title="Sign Out"
						alt="Sign Out."
					/>
				</button>
			</div>
		</header>
	);
}
