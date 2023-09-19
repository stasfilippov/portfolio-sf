import React from 'react';
import {StyledSectionTitle} from "../../../styles/components/Title.styled";
import Project from "../../../components/Project";

const WorksSection = () => {
	return (
		<div>
			<StyledSectionTitle fontSize={'22px'}/>
			<Project/>
			<Project/>
			<Project/>
		</div>
	);
};

export default WorksSection;

