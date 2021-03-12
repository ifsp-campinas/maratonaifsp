import React from 'react';
import styled from 'styled-components';

const StyledBody = styled.div`
        display: flex;
        flex-direction: column;
        background: #DCDCDC;
        flex: 1;
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
        padding-top: 10px;
        border-bottom: 3px solid green;
        border-radius: 50%;
`;

const StyledColumn = styled.div`
        width: 50%;
`;

const StyledH2 = styled.h2`
        font-family: 'Playfair Display', serif;
`;

const StyledH3 = styled.h3`
        font-family: 'Playfair Display', serif;
        color: darkgreen;
`;

const StyledUl = styled.ul`
        list-style:none;
        text-align: justify;
        padding-right: 20px;
        line-height: 1.7;
        font-size: 18px;
`;

const StyledUl2 = styled.ul`
        list-style:none;
        text-align: justify;
        padding-left: 20px;
        padding-right: 20px;
        line-height: 1.7;
        font-size: 18px;
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
                                <StyledUl>    
                                        <li>
                                                &nbsp;
                                                O projeto faz parte da modalidade Ensino do programa de bolsas do
                                                IFSP Campinas, teve sua primeira inscrição em Março de 2020. Tem como objetivo estimular o pensamento lógico 
                                                e as habilidades de programação dos alunos interessados.
                                                Contamos, ainda, com a ajuda de 4 professores orientadores e 1 aluno bolsista,
                                                responsável por liderar os grupos de estudo e tirar as dúvidas dos alunos.      
                                        </li>
                                </StyledUl>          
                        </StyledColumn>
                
                        <StyledColumn>
                                <StyledH3>
                                        &nbsp;
                                </StyledH3>
                                <StyledUl2>
                                        <li>
                                                &nbsp;
                                                Além disso, queremos proporcionar aos alunos vivências mais próximas aos ambientes
                                                de trabalho, onde eles serão colocados sob pressão e submetidos a trabalhos em equipe
                                                e tendo essa experiência dentro do curso, o estudante entrará no mercado de trabalho
                                                mais preparado.
                                                
                                        </li>
                                </StyledUl2>
                        </StyledColumn>
                </StyledBody2>

                <StyledBody2>
                        <StyledColumn>
                                <StyledH3>
                                        <ul>
                                                <li>
                                                        Resultados:
                                                </li>
                                        </ul>
                                </StyledH3>
                                <StyledUl>    
                                        <li>
                                                &nbsp;
                                                Em dezembro de 2020 finalizamos o primeiro ano do projeto. Foi possível analisar resultados
                                                muito interessantes e expressivos, tendo em vista que o projeto iniciou-se em plena Pandemia
                                                da Covid-19 e precisou se readaptar para o ambiente remoto. Tivemos a participação mensal de
                                                pelo menos 15 alunos, além de outros 17 inscritos e presentes na nossa Sala de Aula virtual do
                                                Google Classroom.   
                                        </li>
                                        <li>
                                                &nbsp;
                                                Um marco muito importante para o ano de 2020, foi a promoção do torneio de programação interno,
                                                a Maratona BHC, que reuniu alunos de 3 Campi distintos do IFSP, sendo eles Barretos, Hortolândia
                                                e Campinas. A maratona contou com a participação de 18 equipes diferentes, sendo a metade composta
                                                por alunos de Campinas.
                                        </li>
                                </StyledUl>          
                        </StyledColumn>
                
                        <StyledColumn>
                                <StyledH3>
                                        &nbsp;
                                </StyledH3>
                                <StyledUl2>
                                        <li>
                                                &nbsp;
                                                No pódio final da Maratona de Programação BHC, tivemos como 2º colocada, uma equipe de Campinas,
                                                onde 2 dos 3 faziam parte do nosso treinamento, além de outra equipe do Câmpus Campinas em 5º lugar.
                                                
                                        </li>
                                        <img src="./classificacao.JPG" alt="Classificação BHC"/>
                                </StyledUl2>
                        </StyledColumn>
                </StyledBody2>
        </StyledBody>
        );
}

export default body;