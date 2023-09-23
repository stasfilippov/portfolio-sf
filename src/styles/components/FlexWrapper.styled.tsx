import styled from "styled-components";

type FlexWrapperPropsType = {
	direction?: string,
	align?: string,
	justify?: string,
	wrap?: string,
	gap?: string
}

export const FlexWrapper = styled.div <FlexWrapperPropsType>`
	display: flex;
  flex-direction: ${props => props.direction};
  justify-content: ${props => props.justify};
  align-items: ${props => props.align};
  flex-wrap: ${props => props.wrap};
  gap: ${props => props.gap};
`