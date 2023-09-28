import React from "react";

import HeaderMenu from "../../components/headerMenu/HeaderMenu";

const items = ['Works', 'Blog', 'Contact']

const Header = () => {
	return (
		<header>
			<nav>
				<HeaderMenu menuItems={items}/>
			</nav>
		</header>
	)
}

export default Header;

