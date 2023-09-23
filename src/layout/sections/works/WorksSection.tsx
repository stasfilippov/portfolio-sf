import React from 'react';
import {StyledSectionTitle} from "../../../styles/components/Title.styled";
import Project from "../../../components/project/Project";
import Project_1 from '../../../assets/images/project_1.png'
import Project_2 from '../../../assets/images/project_2.png'
import Project_3 from '../../../assets/images/project_3.png'
import styled from "styled-components";

const WorksSection = () => {
	return (
		<StyledWorksSection>
			<StyledSectionTitle fontSize={'22px'}>Featured works</StyledSectionTitle>
			<Project
				image={Project_1}
				title={'Designing Dashboards'}
				description={'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'}
				date={'2020'}
				tagProject={'Dashboard'}
			/>
			<Project
				image={Project_2}
				title={'Vibrant Portraits of 2020'}
				description={'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'}
				date={'2018'}
				tagProject={'Illustration'}

			/>
			<Project
				image={Project_3}
				title={'36 Days of Malayalam type'}
				description={'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'}
				date={'2018'}
				tagProject={'Typography'}

			/>
		</StyledWorksSection>
	);
};

const StyledWorksSection = styled.section `
	margin-bottom: 53px;
`
export default WorksSection;

