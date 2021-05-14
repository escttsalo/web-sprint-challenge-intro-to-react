// Write your Character component here
import React from 'react';
import styled from 'styled-components';

export default function Character(props){
    const { name, birthYear } = props

    const StyleDiv = styled.div`
        @font-face {
            font-family: 'Stardos Stencil';
            src: url('https://fonts.googleapis.com/css2?family=Stardos+Stencil&display=swap');
        }
        @font-face {
            font-family: 'Geostar Fill';
            src: url('https://fonts.googleapis.com/css2?family=Stardos+Stencil&display=swap');
        }
        display:flex;
        align-items: center;
        width: 50%;
        margin: 0 auto;
        justify-content: space-between;
        border-bottom: 5px solid #dea60d;
    `;

    const StyleH = styled.h2`
        margin: 1%;
        color: white;
        font-family: 'Stardos Stencil';
        text-shadow: 2px 2px black;
    `;

    const StyleP = styled.p`
        padding: 1%;
        margin: 1%;
        font-family: 'Geostar Fill';
        color: white;
        background-color: black;
        border-radius: 10% 50%;
    `;


    return(
        <StyleDiv>
            <StyleH>{name}</StyleH>
            <StyleP>{birthYear}</StyleP>
        </StyleDiv>
    )
};