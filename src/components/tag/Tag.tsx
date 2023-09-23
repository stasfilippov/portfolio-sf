import React from 'react';
import styled from "styled-components";
import {Theme} from "../../styles/Thems.styled";

type TagPropsType = {
	tag: string,
}
const Tag = (props: TagPropsType) => {
	return (
		<StyledTag>
			{props.tag}
		</StyledTag>
	);
};

type StyledTagPropsType = {
}

const StyledTag = styled.span <StyledTagPropsType>`
  color: ${Theme.colors.tag};
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`
export default Tag;