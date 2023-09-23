import React from "react";
import styled from "styled-components";
import {Theme} from "../../../styles/Thems.styled";
import {StyledInner} from "../../../styles/components/Wrapper.styled";
import {StyledSectionTitle, StyledSubtitle} from "../../../styles/components/Title.styled";
import Post from "../../../components/post/Post";
import {FlexWrapper} from "../../../styles/components/FlexWrapper.styled";

const PostsSection = () => {

	return (
		<StyledPostsSection>
			<StyledInner>
				<FlexWrapper justify={'space-between'} align={'center'}>
					<StyledSectionTitle fontSize={'22px'}>Recent posts</StyledSectionTitle>
					<StyledPostsSectionLink href={'#'}>View all</StyledPostsSectionLink>
				</FlexWrapper>
				<FlexWrapper gap={'20px'}>
					<Post
						title={'Making a design system from scratch'}
						date={'12 Feb 2020'}
						category={'Design, Pattern'}
						description={'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'}
					/>
					<Post
						title={'Creating pixel perfect icons in Figma'}
						date={'12 Feb 2020'}
						category={'Figma, Icon Design'}
						description={'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'}
					/>
				</FlexWrapper>
			</StyledInner>
		</StyledPostsSection>
	)
}

export default PostsSection;

const StyledPostsSection = styled.section `
  background-color: ${Theme.colors.bgSectionPosts};
  padding: 7px 0 32px 0;
`

const StyledPostsSectionLink = styled.a `
  color: ${Theme.colors.linkPostSection};
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  
  &:hover {
    text-decoration: underline;
  }
`

