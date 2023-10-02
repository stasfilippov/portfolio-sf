import React from 'react';
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
				<TitleProject>{props.title}</TitleProject>
				<SubtitleProject align={'center'} gap={'26px'}>
					<DateProject dateProject={props.date}/>
					<Tag tag={props.tagProject}/>
				</SubtitleProject>
				<ProjectDescription>{props.description}</ProjectDescription>
			</div>
		</StyledProject>
	);
};

const StyledProject = styled.article`
  display: flex;
  gap: 18px;
  position: relative;
  padding: 30px 0;
  border-bottom: 1px solid #E0E0E0;
`
const StyledProjectImage = styled.img`
  width: 246px;
  height: 180px;
  flex-shrink: 0;
  object-fit: cover;
  border-radius: 6px;
`

const TitleProject = styled.h2`
  font-size: 30px;
  font-weight: 700;
  margin-bottom: 16px;
`

const SubtitleProject = styled(FlexWrapper)`
  margin-bottom: 17px;
`
const ProjectDescription = styled.p`
`

export default Project;