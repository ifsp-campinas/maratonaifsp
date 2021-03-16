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
						<a href="#sobre">Sobre</a>
					</li>
					<li>
						<a href="#resultados">Resultados</a>
					</li>
					<li>
						<a href="#canais">Nossos Canais</a>
					</li>
					<li>
						<a href="#participe">Participe</a>
					</li>
					<li>
						<a href="#colaboradores">Colaboradores</a>
					</li>
				</ul>
			</nav>
		</StyledNav>
		);
}

export default menu;