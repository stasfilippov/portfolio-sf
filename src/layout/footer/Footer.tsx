import React from 'react';
import {Icon} from "../../components/icon/Icon";
import styled from "styled-components";
import {FlexWrapper} from "../../styles/components/FlexWrapper.styled";

const Footer = () => {
	return (
		<StyledFooter>
			<StyledFooterList gap={'35px'} justify={'center'} as={'ul'}>
				<li>
					<a href="">
						<Icon iconId={'fb'}/>
					</a>
				</li>
				<li>
					<a href="">
						<Icon iconId={'insta'}/>
					</a>
				</li>
				<li>
					<a href="">
						<Icon iconId={'twitter'} width={'36.923px'} viewBox={'0 0 37 30'}/>
					</a>
				</li>
				<li>
					<a href="">
						<Icon iconId={'linkedin'}/>
					</a>
				</li>
			</StyledFooterList>
			<StyledCopyright>Copyright ©2020 All rights reserved </StyledCopyright>
		</StyledFooter>
	);
};

const StyledFooter = styled.footer `
  height: 182px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const StyledFooterList = styled(FlexWrapper)`
	margin-bottom: 26px;
`

const StyledCopyright = styled.small `
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`
export default Footer;