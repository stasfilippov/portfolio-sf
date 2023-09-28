import styled from "styled-components";
import {Theme} from "../Thems.styled";

type TitleStyledPropsType = {
	fontSize: string,
	fontWeight?: string
}
export const StyledTitle = styled.h1 <TitleStyledPropsType>`
  color: ${Theme.colors.primary};
  font-size: ${props => props.fontSize};
  font-style: normal;
  font-weight: 700;
  line-height: 60px; /* 136.364% */
`

export const StyledSubtitle = styled.h2 <TitleStyledPropsType>`
  color: ${Theme.colors.primary};
  font-size: ${props => props.fontSize};
  font-style: normal;
  font-weight: ${props => props.fontWeight || 400};
  line-height: 60px; /* 272.727% */
`

export const StyledTitlePost = styled.h2 <TitleStyledPropsType>`
  color: ${Theme.colors.primary};
  font-size: ${props => props.fontSize};
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`

export const StyledSectionTitle = styled.h3 <TitleStyledPropsType>`
  color: ${Theme.colors.primary};
  font-size: ${props => props.fontSize};
  font-style: normal;
  font-weight: 400;
  line-height: 60px; /* 272.727% */
`

export const StyledDescription = styled.p <TitleStyledPropsType>`
  color: ${Theme.colors.primary};
  font-size: ${props => props.fontSize};
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`
