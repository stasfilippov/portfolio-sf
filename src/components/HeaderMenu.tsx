import React from 'react';
import styled from "styled-components";
import {Theme} from "../styles/Thems.styled";


const HeaderMenu = (props: { menuItems: Array<string> }) => {
	return (
		<StyledMenu>
			{props.menuItems.map((el, index) => {
				return (
					<li key={index}>
						<a href="#">{el}</a>
					</li>
				)
			})}

		</StyledMenu>
	);
};

export default HeaderMenu;

const StyledMenu = styled.ul`
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