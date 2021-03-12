import React from 'react';
import './menu.css';
import './body.js'
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
						<a href="a">Sobre</a>
					</li>
					<li>
						<a href="a">Resultados</a>
					</li>
					<li>
						<a href="a">Nossos Canais</a>
					</li>
					<li>
						<a href="a">Participe</a>
					</li>
				</ul>
			</nav>
		</StyledNav>
		);
}

export default menu;