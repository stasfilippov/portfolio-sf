import styled, {css} from "styled-components";
import {Theme} from "../Thems.styled";

type ButtonStyledPropsType = {
	primary?: boolean,
	outlined?: boolean
}
export const ButtonStyled = styled.button<ButtonStyledPropsType>`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 86px;
  min-height: 30px;
  border-radius: 5px;
  font-size: 10px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px;
  cursor: pointer;

  //primary
  ${props => props.primary && css<ButtonStyledPropsType>`
    background-color: ${Theme.colors.bgColorBtnPrimary};
    color: ${Theme.colors.colorBtnPrimary};
    border: none;
    transition: all 0.2s;

    &:hover {
      background-color: ${Theme.colors.bgColorBtnHover};
    }

  `} //outlined

  ${props => props.outlined && css<ButtonStyledPropsType>`
    background-color: transparent;
    color: ${Theme.colors.bgColorBtnPrimary};
    border: 2px solid ${Theme.colors.bgColorBtnPrimary};
    transition: all 0.2s;

    &:hover {
      border: 2px solid ${Theme.colors.bgColorBtnHover};
      color: ${Theme.colors.bgColorBtnHover};

    }
  `}

`