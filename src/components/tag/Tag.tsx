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


const StyledTag = styled.span`
  color: ${Theme.colors.tag};
  font-size: 20px;
`
export default Tag;