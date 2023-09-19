import React from 'react';
import {Icon} from "../../components/icon/Icon";

const Footer = () => {
	return (
		<footer>
			<ul>
				<li>
					<a href="">
						<Icon iconId={'fb'}/>
					</a>
				</li>
				<li>
					<a href="">
						<Icon iconId={'insta'}/>
					</a>
				</li>
				<li>
					<a href="">
						<Icon iconId={'twitter'} width={'36.923px'} viewBox={'0 0 37 30'}/>
					</a>
				</li>
				<li>
					<a href="">
						<Icon iconId={'linkedin'}/>
					</a>
				</li>
			</ul>
			<div>Copyright ©2020 All rights reserved </div>
		</footer>
	);
};

export default Footer;