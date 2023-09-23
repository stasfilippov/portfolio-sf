import React from 'react';
import styled from "styled-components";

type DateProjectPropsType = {
	dateProject: string
}
const DateProject = (props: DateProjectPropsType) => {
	return (
		<StyledDateProject>
			{props.dateProject}
		</StyledDateProject>
	);
};

const StyledDateProject = styled.div `
	color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  font-style: normal;
  font-weight: 900;
  width: 62px;
  height: 25px;
  background-color: #142850;
  border-radius: 16px;
`
export default DateProject;