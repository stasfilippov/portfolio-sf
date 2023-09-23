import React from "react";
import styled from "styled-components";
import {StyledDescription, StyledTitle, StyledSubtitle} from "../../../styles/components/Title.styled";
import {StyledButtonDownload} from "../../../styles/components/ButtonDownload.styled";
import Myphoto from '../../../assets/images/Myphoto.jpeg'
import {Theme} from "../../../styles/Thems.styled";
import {FlexWrapper} from "../../../styles/components/FlexWrapper.styled";
const MainSection = () => {
	return (
		<FlexWrapper as={'section'} justify={'space-between'}>
			<StyledMainDescription>
				<StyledSubtitle fontSize = {'44px'} fontWeight = {'700'}>Hi, I am Stanislav Filippov,</StyledSubtitle>
				<MainTitle fontSize={'44px'}> Frontend Developer</MainTitle>
				<MainDescription fontSize={'16px'}>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</MainDescription>
				<MainButton borderRadius={'2px'} >Download Resume</MainButton>
			</StyledMainDescription>
			<MainImages>
				<img src={Myphoto} alt="My photo"/>
			</MainImages>
		</FlexWrapper>
	)
}

export default MainSection;


const StyledMainDescription = styled.div `
	max-width: 522px;
`

const MainTitle = styled(StyledTitle) `
  margin-bottom: 40px;
`


const MainDescription = styled(StyledDescription) `
	margin-bottom: 38px;
  max-width: 497px;
`
const MainButton = styled(StyledButtonDownload) `
	margin-bottom: 71px;
`

const MainImages = styled.div `
  height: 243px;
  width: 243px;
  border-radius: 50%;
  position: relative;
  
  &::after {
    content: '';
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