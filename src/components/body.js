import React from 'react';
import styled from 'styled-components';
import './body.css';

const StyledBody = styled.div`
        display: flex;
        flex-direction: column;
        background: #DCDCDC;
        flex: 1;
        height: calc(100vh - 6.5rem - 12px);
        margin-left: 15%;
        margin-right: 15%;
`;

const StyledBody2 = styled.div`
        display: flex;
        flex: 6;
`;

const StyledTitle = styled.div`
        flex: 1;
        text-align: center;
        padding-top: 8px;
`;

const StyledColumn = styled.div`
        width: 50%;
        border-right: 1px solid black;
`;

const StyledColumn2 = styled.div`
        width: 50%;
`;

const StyledH2 = styled.h2`
        font-family: 'Playfair Display', serif;
`;

const StyledH3 = styled.h3`
        font-family: 'Playfair Display', serif;
`;


const body = () =>{
	return(
        <StyledBody>
                <StyledTitle>
                        <StyledH2>Treinamento de Alunos para Maratonas de Programação</StyledH2>
                </StyledTitle>
                <StyledBody2>
                        <StyledColumn>
                                <StyledH3>
                                        <ul>
                                                <li>
                                                        Sobre o projeto:
                                                </li>
                                        </ul>
                                </StyledH3>
                        </StyledColumn>
                
                        <StyledColumn2></StyledColumn2>
                </StyledBody2>

        </StyledBody>
        );
}

export default body;