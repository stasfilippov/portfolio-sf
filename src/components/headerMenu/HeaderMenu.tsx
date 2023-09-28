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
							<Mask>
								<span>{el}</span>
							</Mask>
							<Mask>
								<span>{el}</span>
							</Mask>
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
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`

const Mask = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  display: inline-block;
  height: 50%;
  overflow: hidden;
  outline: 1px solid red;

  &:hover {
    color: ${Theme.colors.hoverLinks};
  }
`