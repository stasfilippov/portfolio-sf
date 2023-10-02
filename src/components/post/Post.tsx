import React from "react";
import styled from "styled-components";
import {Theme} from "../../styles/Thems.styled";
import {StripeStyled} from "../../styles/components/Stripe.styled";

type PostPropsType = {
	title: string,
	category: string,
	date: string,
	description: string
}
const Post = (props: PostPropsType) => {
	return (
		<StyledPost>
			<PostTitle>{props.title}</PostTitle>
			<PostSubtitle>
				<PostSubtitleText>{props.date}</PostSubtitleText>
				<StripeStyled/>
				<PostSubtitleText>{props.category}</PostSubtitleText>
			</PostSubtitle>
			<PostDescription>{props.description}</PostDescription>
		</StyledPost>
	)
}

export default Post;

const StyledPost = styled.article`
  background-color: ${Theme.colors.bgPost};
  padding: 24px 21px 35px 23px;
  max-width: 418px;
  border-radius: 4px;
  box-shadow: 0 4px 10px 0 rgba(187, 225, 250, 0.25);
`
const PostTitle = styled.h2`
  font-size: 26px;
  font-style: normal;
  font-weight: 700;
  margin-bottom: 17px;
`

const PostSubtitle = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  margin-bottom: 21px;
`

const PostSubtitleText = styled.span`
  font-size: 18px;
  line-height: normal;
`

const PostDescription = styled.p`
`

