import React from "react";
import styled, { css } from "styled-components";
import { NavLink } from "react-router-dom";

const NavBar = () => {
	return (
		<NavContainer>
			<NavLink to="/">TODO</NavLink>
			<NavLink to="/playlist">PLAYLIST</NavLink>
		</NavContainer>
	);
};

export default NavBar;

const NavContainer = styled.div`
	position: fixed;
	z-index: 100;
	top: 0;
	width: 100%;
	height: 50px;
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 30px;
	border-bottom: 0.5px solid lightgray;
	box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.04);

	a {
		color: gray;
		font-size: 20px;
		font-weight: 700;
		text-decoration: none;
	}
	a:active {
		color: #20d997;
	}
	.active {
		color: #20c997;
	}
`;
