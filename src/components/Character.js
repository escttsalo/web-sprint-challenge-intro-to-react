// Write your Character component here
import React from 'react';
import styled from 'styled-components';

export default function Character(props){
    const { name, birthYear } = props

    const StyleDiv = styled.div`
        display:flex;
        align-items: center;
        justify-content: center;
    `;

    const Name = styled.h2`
        border:
    `;
    return(
        <StyleDiv>
            <h2>{name}</h2>
            <p>{birthYear}</p>
        </StyleDiv>
    )
};