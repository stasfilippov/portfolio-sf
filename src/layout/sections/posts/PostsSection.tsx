import React from "react";
import styled from "styled-components";
import {Theme} from "../../../styles/Thems.styled";
import {StyledInner} from "../../../styles/components/Wrapper.styled";
import {StyledSectionTitle, StyledSubtitle} from "../../../styles/components/Title.styled";
import Post from "../../../components/Post";

const PostsSection = () => {

	return (
		<StyledPostsSection>
			<StyledInner>
				<StyledPostsSectionTop>
					<StyledSectionTitle fontSize={'22px'}>Recent posts</StyledSectionTitle>
					<StyledPostsSectionLink href={'#'}>View all</StyledPostsSectionLink>
				</StyledPostsSectionTop>
				<StyledPostsSectionContent>
					<Post/>
					<Post/>
				</StyledPostsSectionContent>
			</StyledInner>
		</StyledPostsSection>
	)
}

export default PostsSection;

const StyledPostsSection = styled.section `
  background-color: ${Theme.colors.bgSectionPosts};
  padding: 7px 0 32px 0;
`

const StyledPostsSectionTop = styled.div `
  display: flex;
  justify-content: space-between;
  align-items: center;
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

const StyledPostsSectionContent = styled.div `
  display: flex;
  align-items: center;
  gap: 20px;
`
