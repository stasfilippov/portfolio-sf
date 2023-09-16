import React from 'react';
import './App.css';
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import {StyledInner, StyledWrapper} from "./styles/components/Wrapper.styled";


function App() {
	return (
		<div className="App">
			<StyledWrapper>
				<Navbar/>
				<StyledInner>
					<Header></Header>
				</StyledInner>
			</StyledWrapper>
		</div>
	);
}

export default App;

