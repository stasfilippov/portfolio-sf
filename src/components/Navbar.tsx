import React from "react";
import styled from "styled-components";
import {Theme} from "../styles/Thems.styled";

const Navbar = () => {
	return (
		<nav>
			<StyledMenu>
				<li>
					<a href="#">Works</a>
				</li>
				<li>
					<a href="#">Blog</a>
				</li>
				<li>
					<a href="#">Contact</a>
				</li>
			</StyledMenu>
		</nav>
	)
}

export default Navbar;

const StyledMenu = styled.nav `
  list-style: none;
  display: flex;
  justify-content: flex-end;
  gap: 33px;
  color: ${Theme.colors.navLinks};
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-bottom: 140px;
  
  li:hover {
    color: ${Theme.colors.hoverLinks};
  }
`