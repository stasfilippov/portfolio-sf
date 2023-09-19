import React from 'react';
import './App.css';
import MainSection from "./layout/main/MainSection";
import Navbar from "./components/Navbar";
import {StyledInner, StyledWrapper} from "./styles/components/Wrapper.styled";
import PostsSection from "./layout/posts/PostsSection";


function App() {
	return (
		<div className="App">
			<StyledWrapper>
				<Navbar/>
				<StyledInner>
					<MainSection/>
				</StyledInner>
			</StyledWrapper>
			<PostsSection/>
		</div>
	);
}

export default App;

