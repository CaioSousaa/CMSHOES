import { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`
    :root {
        --purple: #8200FF;
        --background: #FFFFFF;
        --text-color: #F7F7F7;
    }

    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }
    
    body {
        background: var(--background);
        -webkit-font-smoothing: antialiased;
    }

    html {
        @media (max-width: 1080px) {
            font-size: 93.75%;
        }

        @media (max-width: 720px) {
            font-size: 87.5%;
        }
    }

  

    body, button, input {
        font-family: "Poppins", sans-serif;
        font-weight: 400;
    }

    #root {
        padding: 0 0 3.125rem;
        margin: 0 auto;
    }

`;