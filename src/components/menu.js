import React from 'react';
import './menu.css';
import styled from 'styled-components';

const StyledNav = styled.nav`
    background-color: green;
    padding: 0;
    margin: 0;
	border: 1px solid black;
	display: block;
	heigh: 1rem;
`;

const menu = () =>{
	return(
		<StyledNav>
			<nav className = "menu">
				<ul>
					<li>
						<a href="#">Sobre</a>
					</li>
					<li>
						<a href="#">Resultados</a>
					</li>
					<li>
						<a href="#">Nossos Canais</a>
					</li>
					<li>
						<a href="#">Participe</a>
					</li>
				</ul>
			</nav>
		</StyledNav>
		);
}

export default menu;