import React from 'react';
import {StyledDescription, StyledTitlePost} from "../../styles/components/Title.styled";
import styled from "styled-components";
import {FlexWrapper} from "../../styles/components/FlexWrapper.styled";
import DateProject from "../dateProject/DateProject";
import Tag from "../tag/Tag";

type ProjectPropsType = {
	image: string,
	title: string,
	description: string
	date: string
	tagProject: string
}

const Project = (props: ProjectPropsType) => {
	return (
		<StyledProject>
			<StyledProjectImage src={props.image} alt="#"/>
			<div>
				<TitleProject fontSize={'30px'}>{props.title}</TitleProject>
				<SubtitleProject align={'center'} gap={'26px'}>
					<DateProject dateProject={props.date}/>
					<Tag tag={props.tagProject}/>
				</SubtitleProject>
				<StyledDescription fontSize={'16px'}>{props.description}</StyledDescription>
			</div>
		</StyledProject>
	);
};

const StyledProject = styled.article `
  display: flex;
  gap: 18px;
  position: relative;
  padding: 30px 0;
  border-bottom: 1px solid #E0E0E0;
  
  //&::after {
  //  content: '';
  //  position: absolute;
  //  bottom: -30px;
  //  width: 858px;
  //  height: 1px;
  //  background-color: #E0E0E0;
  //}
	
`

const TitleProject = styled(StyledTitlePost) `
	margin-bottom: 16px;
`

const SubtitleProject = styled(FlexWrapper) `
	margin-bottom: 17px;
`

const StyledProjectImage = styled.img `
  width: 246px;
  height: 180px;
  flex-shrink: 0;
  object-fit: cover;
  border-radius: 6px;
`

export default Project;