import React from "react";
import styled from "styled-components";
import {Theme} from "../styles/Thems.styled";
import {StyledTitlePost} from "../styles/components/Title.styled";
import {StripeStyled} from "../styles/components/Stripe.styled";

const Post = () => {
	return (
		<StyledPost>
			<PostTitle fontSize={'26px'}>Making a design system from scratch</PostTitle>
			<PostSubtitle>
				<PostSubtitleText>12 Feb 2020</PostSubtitleText>
				<StripeStyled/>
				<PostSubtitleText>Design, Pattern</PostSubtitleText>
			</PostSubtitle>
			<PostDescription>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</PostDescription>
		</StyledPost>
	)
}

export default Post;

const StyledPost = styled.article `
  background-color: ${Theme.colors.bgPost};
  padding: 24px 21px 35px 23px;
  max-width: 418px;
  border-radius: 4px;
  box-shadow: 0 4px 10px 0 rgba(187, 225, 250, 0.25);
`
const PostTitle = styled(StyledTitlePost) `
	margin-bottom: 17px;
`

const PostSubtitle = styled.div `
  display: flex;
  align-items: center;
  gap: 30px;
  margin-bottom: 21px;
`

const PostSubtitleText = styled.span `
  color: ${Theme.colors.primary};
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`

const PostDescription = styled.p `
  color: ${Theme.colors.primary};
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`