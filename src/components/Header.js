import React from 'react';
import styled from 'styled-components';

import logo from '../logo.svg';

const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-bottom: 40px;
    h1 {
        color: red;
        font-style: italic;
    }
    img {
        width: 100px;
        margin-right: 20px;
    }
`;

export default function Header(props) {
    return (
        <Container>
            <img src={logo} alt="Logo" />
            <h1>TODO - {props.nome}</h1>
        </Container>
    );
}
