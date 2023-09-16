import React from "react";
import styled from "styled-components";
import {StyledDescription, StyledTitle} from "../styles/components/Title.styled";
import {StyledButtonDownload} from "../styles/components/ButtonDownload.styled";
import Myphoto from '../images/Myphoto.jpeg'
import {Theme} from "../styles/Thems.styled";
const Header = () => {
	return (
		<StyledHeaderSection>
			<StyledHeaderDescription>
				<HeaderTitle fontSize={'44px'}>Hi, I am Stas, Frontend Developer</HeaderTitle>
				<HeaderDescription fontSize={'16px'}>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</HeaderDescription>
				<StyledButtonDownload borderRadius={'2px'}>Download Resume</StyledButtonDownload>
			</StyledHeaderDescription>
			<HeaderImages>
				<div></div>
				<img src={Myphoto} alt=""/>
			</HeaderImages>
		</StyledHeaderSection>
	)
}

export default Header;


const StyledHeaderSection = styled.section `
  display: flex;
  justify-content: space-between;
`

const StyledHeaderDescription = styled.div `
	max-width: 497px;
`

const HeaderTitle = styled(StyledTitle) `
  margin-bottom: 40px;
  max-width: 400px;
`

const HeaderDescription = styled(StyledDescription) `
	margin-bottom: 38px;
`

const HeaderImages = styled.div `
  height: 243px;
  width: 243px;
  border-radius: 50%;
  position: relative;
  
  div {
    position: absolute;
    z-index: -1;
    left: -5px;
    top: 13px;
    width: 100%;
    height: 100%;
    border-radius: inherit;
    background-color: ${Theme.colors.bgSectionPosts};
  }
  
  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: inherit;
    object-fit: cover;
  }
`