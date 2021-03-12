import './App.css';
import React, { Component } from 'react';

import Menu from './components/menu';
import Body from './components/body';

import styled from 'styled-components';

const StyledMenu = styled.menu`
    background-color: green;
    padding: 1.25rem 1.25rem;
    margin: 0;
    display: block;
    font-size: 30px;
    font-weight: bold;
    color: white;
    height: 3rem;
    font-family: 'Playfair Display', serif
`;

class App extends Component {
  

  render(){
    return(
      <div className= "App">
        <StyledMenu>
            Instituto Federal de São Paulo | Câmpus Campinas
        </StyledMenu>
        <Menu />
        <Body />
      </div>
    );
  }
};



export default App;
