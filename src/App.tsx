import React from 'react';
import './App.css';
import styled from "styled-components";
import Picture from "./components/Picture";
import {HeaderStyled} from "./styles/components/Header.styled";
import {DescriptionStyled} from "./styles/components/Description.styled";
import {ButtonStyled} from "./styles/components/Button.styled";

function App() {
	return (
		<div className="App">
			<Container>
				<Box color={''}>
					<Picture/>
					<div className='boxDescr'>
						<HeaderStyled>Headline</HeaderStyled>
						<DescriptionStyled>
							Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in
							venen.
						</DescriptionStyled>
						<div className={'btnBox'}>
							<ButtonStyled primary>See more</ButtonStyled>
							<ButtonStyled outlined>Save</ButtonStyled>
						</div>
					</div>
				</Box>
			</Container>
		</div>
	);
}

export default App;

const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

type BoxPropsType = {
	color?: string
}

const Box = styled.div<BoxPropsType>`
  width: 300px;
  height: 350px;
  border-radius: 15px;
  background-color: ${props => props.color || '#FFFFFF'};
  box-shadow: 0 4px 20px 5px rgba(0, 0, 0, 0.10);

  .boxDescr {
    margin: 0 20px 22px 20px;
  }

  .btnBox {
    display: flex;
    gap: 12px
  }
`