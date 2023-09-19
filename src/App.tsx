import React from 'react';
import './App.css';
import MainSection from "./layout/sections/main/MainSection";
import Header from "./layout/header/Header";
import {StyledInner, StyledWrapper} from "./styles/components/Wrapper.styled";
import PostsSection from "./layout/sections/posts/PostsSection";
import WorksSection from "./layout/sections/works/WorksSection";
import Footer from "./layout/footer/Footer";


function App() {
	return (
		<div className="App">
			<StyledWrapper>
				<Header/>
				<StyledInner>
					<MainSection/>
				</StyledInner>
			</StyledWrapper>
			<PostsSection/>
			<StyledWrapper>
				<StyledInner>
					<WorksSection/>
					<Footer/>
				</StyledInner>
			</StyledWrapper>
		</div>
	);
}

export default App;

