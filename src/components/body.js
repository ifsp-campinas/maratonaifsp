import React from 'react';
import styled from 'styled-components';

const StyledBody = styled.div`
        display: flex;
        background: lightgray;
        flex: 1;
        height: calc(100vh - 6.5rem - 12px);
        margin-left: 15%;
        margin-right: 15%;
`;

const body = () =>{
	return(
        <StyledBody>

        </StyledBody>
        
        );
}

export default body;