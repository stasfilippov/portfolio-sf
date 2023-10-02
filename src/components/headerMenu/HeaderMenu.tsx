import React from 'react';
import styled from "styled-components";
import {Theme} from "../../styles/Thems.styled";


const HeaderMenu = (props: { menuItems: Array<string> }) => {
	return (
		<StyledMenu>
			{props.menuItems.map((el, index) => {
				return (
					<ListItem key={index}>
						<Link href="#">
							{el}
						</Link>
					</ListItem>
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
  margin-bottom: 140px;

`

const ListItem = styled.li`
  position: relative;
`

const Link = styled.a`
  color: ${Theme.colors.navLinks};
  font-size: 20px;
  font-weight: 500;

  &:hover {
    color: ${Theme.colors.hoverLinks};
  }
`