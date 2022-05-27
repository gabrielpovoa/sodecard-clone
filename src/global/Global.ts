import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        text-decoration: none;
        text-transform: capitalize;
        list-style: none;
        outline: none;
        border: none;
        transition: all .3s linear;
    }
    html {
        font-size: 62.5%;
        scroll-behavior: smooth;
    }
    body {
        background-color: #5C5C5C;
        min-height: 100vh;
        font-family: 'Nunito', serif;
        color: #F1F1F1;
    }
`;