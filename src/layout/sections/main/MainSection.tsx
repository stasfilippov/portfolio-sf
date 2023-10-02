import React from "react";
import styled from "styled-components";
import {StyledButtonDownload} from "../../../styles/components/ButtonDownload.styled";
import Myphoto from '../../../assets/images/Myphoto.jpeg'
import {Theme} from "../../../styles/Thems.styled";
import {FlexWrapper} from "../../../styles/components/FlexWrapper.styled";

const MainSection = () => {
	return (
		<FlexWrapper as={'section'} justify={'space-between'}>
			<StyledMainDescription>
				<MainSubtitle>Hi, I am Stanislav Filippov,</MainSubtitle>
				<MainTitle> Frontend Developer</MainTitle>
				<MainDescription>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
					sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud
					amet.
				</MainDescription>
				<MainButton borderRadius={'2px'}>Download Resume</MainButton>
			</StyledMainDescription>
			<MainImages>
				<img src={Myphoto} alt="My photo"/>
			</MainImages>
		</FlexWrapper>
	)
}

export default MainSection;

const MainSubtitle = styled.h2`
  font-size: 44px;
  font-weight: 700;
  line-height: 60px;
`

const StyledMainDescription = styled.div`
  max-width: 522px;
`

const MainTitle = styled.h1`
  font-size: 44px;
  font-weight: 700;
  line-height: 60px;
  margin-bottom: 40px;
`


const MainDescription = styled.p`
  margin-bottom: 38px;
  max-width: 497px;
`
const MainButton = styled(StyledButtonDownload)`
  margin-bottom: 71px;
`

const MainImages = styled.div`
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