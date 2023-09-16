import React from 'react';
import './App.css';
import HeaderSection from "./components/HeaderSection";
import Navbar from "./components/Navbar";
import {StyledInner, StyledWrapper} from "./styles/components/Wrapper.styled";
import PostsSection from "./components/PostsSection";


function App() {
	return (
		<div className="App">
			<StyledWrapper>
				<Navbar/>
				<StyledInner>
					<HeaderSection/>
				</StyledInner>
			</StyledWrapper>
			<PostsSection/>
		</div>
	);
}

export default App;

