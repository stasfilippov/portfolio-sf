import React from "react";
import styled from "styled-components";
import bgImages from '../images/bg.jpg'

function Picture() {
	return (
		<BoxPicture>
			<img src={bgImages} alt={'picture'}/>
		</BoxPicture>
	)
}

const BoxPicture = styled.div`
  width: 280px;
  height: 170px;
  margin: 10px 10px 20px 10px;
  border-radius: 10px;
  position: relative;
  border-radius: 10px;

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: inherit;
  }
`
export default Picture;

