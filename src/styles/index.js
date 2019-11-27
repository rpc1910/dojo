import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box; 
    }
    body, html, #root {
        width: 100%;
        height: 100%;
        background: #f5f5f5;
        font-size: 15px;
        font-family: 'Montserrat', sans-serif;
    }
`;

export default GlobalStyle;