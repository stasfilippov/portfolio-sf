import styled from "styled-components";
import {Theme} from "../Thems.styled";

type StyledButtonDownloadPropsType = {
	borderRadius?: string
}
export const StyledButtonDownload = styled.a <StyledButtonDownloadPropsType>`
  display: flex;
  align-items: center;
  max-width: 208px;
  min-height: 47px;
  padding: 0 20px;
  color: ${Theme.colors.textButton};
  border-radius: ${props => props.borderRadius || 'none'};
  background-color: ${Theme.colors.bgButton};
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  cursor: pointer;
  transition: all 0.2s;
  
  &:hover {
    background-color: ${Theme.colors.bgButtonHover};
  }
`
