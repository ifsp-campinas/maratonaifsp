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
        border-bottom: 2px solid green;
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

const StyledDescricao = styled.ul`
        list-style:none;
        text-align: center;
        padding: 0;
        line-height: 1.7;
        font-size: 16px;
        font-weight: bolder;
        font-family: 'Playfair Display', serif;
`; 

const StyledImg = styled.img`
        border: 2px solid green;
        border-radius: 10%;
`;

const StyledFotos = styled.img`
        border: 4px solid green;
        border-radius: 40%;
        height: 200px;
`;

const body = () =>{
	return(
        <StyledBody>
                <StyledTitle>
                        <StyledH2>Treinamento de Alunos para Maratonas de Programação</StyledH2>
                </StyledTitle>
                <section id="sobre">
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
                </section>

                <section id="resultados">
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
                                                <li>
                                                        &nbsp;
                                                        No pódio final da Maratona de Programação BHC, tivemos como 2º colocada, uma equipe de Campinas,
                                                        onde 2 dos 3 faziam parte do nosso treinamento, além de outra equipe do Câmpus Campinas em 5º lugar.
                                                </li>
                                                <br></br>
                                                <center><StyledImg src="https://portal.cmp.ifsp.edu.br/images/noticias/2020/09_set/Colocao_das_equipes_Maratona_BHC.png" alt="Classificação BHC" width="80%" /></center>
                                        </StyledUl>          
                                </StyledColumn>
                        
                                <StyledColumn>
                                        <StyledH3>
                                                &nbsp;
                                        </StyledH3>
                                        <StyledUl2>
                                                <li>
                                                        &nbsp;
                                                        Participamos, ainda, da III Maratona INTERIFs de Programação, com duas Equipes. A Maratona INTERIFs é
                                                        uma das mais importantes para nossos alunos, pois a competição conta com mais de 50 equipes de todo o estado de
                                                        São Paulo. Felizmente também obtivemos um ótimo resultado, a equipe Campineira "Wrong Answer (100%)" conquistaram
                                                        o 4º Lugar e, ainda, 2 dos 3 alunos do time faziam parte do nosso treinamento.
                                                </li>
                                                <br></br>
                                                <center><StyledImg src="https://portal.cmp.ifsp.edu.br/images/noticias/2020/11_nov/III_Interifs_2020/III_Interifs_Placar_finale.png" alt="Clasificação INTERIFs" width="80%"/></center>
                                                <br></br>
                                                <li>
                                                        &nbsp;
                                                        Fechamos o ano com o melhor resultado na Olimpíada Brasileira de Informática da UNICAMP(OBI), competição individual,
                                                        já conquistado pelo Câmpus Campinas.
                                                        O Aluno Lucas Rodrigues Pimentel chegou até a fase nacional da competição, uma conquista importante quando analisado o contexto e
                                                        a relevância da competição.   
                                                </li>
                                        </StyledUl2>
                                </StyledColumn>
                        </StyledBody2>
                </section>

                <section id="canais">
                        <StyledBody2>
                                <StyledColumn>
                                        <StyledH3>
                                                <ul>
                                                        <li>
                                                                Nossos Canais:
                                                        </li>
                                                </ul>
                                        </StyledH3>
                                        <StyledUl>
                                                &nbsp;
                                                Visando possibilitar a participação de todos, buscamos plataformas de fácil acesso para atingir um maior número de interessados. Por isso,
                                                escolhemos o Google Classroom para o compartilhamento de conteúdo, o Whatsapp para compartilhamento de informações e o Youtube para Lives
                                                e aulas gravadas, bem como resoluções de exercícios e bate-papos.
                                        </StyledUl>
                                </StyledColumn>

                                <StyledColumn>
                                        <StyledH3>
                                                &nbsp;
                                        </StyledH3>
                                        <StyledUl2>
                                                &nbsp;
                                                Os links para nossos canais são:
                                                <br></br>
                                                - Youtube <a href="https://www.youtube.com/channel/UCBZfGQbn5WV4A7DuS_JDtXQ">(Clique Aqui)</a>;
                                                <br></br>
                                                - Whatsapp <a href="https://chat.whatsapp.com/Jobaxqq620e6ZlZv30aJQy">(Clique Aqui)</a>
                                                <br></br>
                                                - Google Classrom <a href="https://classroom.google.com/c/MTI0MDU0MjE5MTM2?cjc=o4q3wsl">(Clique Aqui)</a>
                                        </StyledUl2>
                                </StyledColumn>
                        </StyledBody2>
                </section>

                <section id="participe">
                        <br></br>
                        <StyledH2>
                                <center>Participe!</center>
                        </StyledH2>
                        <StyledUl>
                                &nbsp;
                                O Projeto de Treinamento é para todos os cursos, só é necessário ter interesse e vontade de estudar programação.
                                Para participar, é muito fácil: basta entrar em contato em algum dos canais disponibilizados em "Nossos Canais" ou preenchendo o formulário
                                de inscrição, <a href="https://docs.google.com/forms/d/1uyKI4KPU4YdEcmmvJMqd-aQlSBfaUvMWWyugr6k7Eso/">Clicando Aqui</a>.
                        </StyledUl>
                </section>

                <section id="colaboradores">
                                        <br></br>
                                        <StyledH2>
                                                <center>Nossos Colaboradores:</center>
                                        </StyledH2>

                        <StyledBody2>    
                                <StyledColumn>    
                                        <StyledFotos src="http://servicosweb.cnpq.br/wspessoa/servletrecuperafoto?tipo=1&id=K4763630D1" />
                                        <StyledDescricao>
                                                <li>Andre Luis Bordignon</li>
                                                <li>Orientador</li>
                                        </StyledDescricao>
                                </StyledColumn>
                                <StyledColumn>
                                        <StyledFotos src="https://media-exp1.licdn.com/dms/image/C4E03AQEU5vifsZMFvw/profile-displayphoto-shrink_400_400/0/1595986083056?e=1621468800&v=beta&t=Tu0mWFKu-FgV2RqjfEOU793B7NoTOVCI0RofECXCmng" />
                                        <StyledDescricao>
                                                <li>Denis Contini</li>
                                                <li>Colaborador</li>
                                        </StyledDescricao>
                                </StyledColumn>
                                <StyledColumn>    
                                        <StyledFotos src="https://media-exp1.licdn.com/dms/image/C4D03AQFADHQSyyhDYw/profile-displayphoto-shrink_400_400/0/1517596208784?e=1621468800&v=beta&t=8jDP-MkNyinY5w8fVx3nCYRWBTSUTeg10ZTfCLC7txk" />
                                        <StyledDescricao>
                                                <li>Joice Mendes</li>
                                                <li>Colaboradora</li>
                                        </StyledDescricao>
                                </StyledColumn>
                                <StyledColumn>
                                        <StyledFotos src="http://servicosweb.cnpq.br/wspessoa/servletrecuperafoto?tipo=1&id=K8054932H1" />
                                        <StyledDescricao>
                                                <li>Rafael Muniz</li>
                                                <li>Colaborador</li>
                                        </StyledDescricao>
                                </StyledColumn>
                                <StyledColumn>
                                        <StyledFotos src="https://media-exp1.licdn.com/dms/image/C4E03AQGeE_QmCJPMAg/profile-displayphoto-shrink_800_800/0/1615855381790?e=1621468800&v=beta&t=-zoTP8AEWDiq4jBuylhDhmOpljBPnkGNQ58QWGbU7Zs" />
                                        <StyledDescricao>
                                                <li>Rafael de Almeida</li>
                                                <li>Bolsista</li>
                                        </StyledDescricao>
                                </StyledColumn>
                        </StyledBody2>
                </section>
        </StyledBody>
        );
}

export default body;