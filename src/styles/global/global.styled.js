import { createGlobalStyle } from "styled-components";
import Regular from "../../fonts/SFUIText-Regular.ttf";
import SemiBold from "../../fonts/SFUIText-Semibold.ttf";
import Bold from "../../fonts/SFUIText-Bold.ttf";
import Heavy from "../../fonts/SFUIText-Heavy.ttf";
import Light from "../../fonts/SFUIText-Light.ttf";

const GlobalStyles = createGlobalStyle`

@font-face {
    font-family: 'SF UI Text';
    src: url(${Regular}) format('tff'),
         url(${SemiBold}) format('tff'),
         url(${Bold}) format('tff'),
         url(${Heavy}) format('tff'),
         url(${Light}) format('tff')
    ;
}

html {
        font-size: 62.5%;
        scroll-snap-type: y mandatory;
        overflow-y: auto;

        -webkit-overflow-scrolling: touch;
        -ms-overflow-style: none;
        scrollbar-width: none;

        &::-webkit-scrollbar {
        display: none;
        }

       /* @media (max-width: 83em) {
        font-size: 58%;
       }

       @media (max-width: 72em) {
        font-size: 55%;
       }

       @media (max-width: 56em) {
        font-size: 53%;
       }

       @media (max-width: 49.7em) {
        font-size: 42%;
       }

       @media (max-width: 41em) {
        font-size: 55%;
       }

       @media (max-width: 27em) {
        font-size: 50%;
       } */
    }

*, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: "SF UI Text",  sans-serif;
  }

body {
        /* color: #3454b4; */
        font: inherit;
        position: relative;
        background-color: #f9f9f9;
        line-height: 1;
        -webkit-font-smoothing: antialiased;
        margin: 0;
        padding: 0;
        width: 100%;
        height: 100%;
        font-weight: normal;
        line-height: inherit;
        -webkit-box-pack: start;
        -moz-osx-font-smoothing: inherit;
    }

button, [type='button'], [type='reset'], [type='submit'] {
    -webkit-appearance: button;
}

input, button, textarea {
    border-radius: 0;
    -webkit-tap-highlight-color: transparent;
}

button, [type='button'], [type='reset'], [type='submit'] {
    -webkit-appearance: button;
}

input, button, textarea {
    border-radius: 0;
    -webkit-tap-highlight-color: transparent;
}
button, [role='button'] input[type='submit'] {
    margin: 0;
    padding: 0;
    border: none;
    cursor: pointer;
    border-radius: 0;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
}

button, select {
    -webkit-text-transform: none;
    text-transform: none;
}

button, input {
    overflow: visible;
}

button, input, optgroup, select, textarea {
    font-family: inherit;
    font-size: 100%;
    line-height: 1.15;
    margin: 0;
}

ul, ol, li {
    margin: 0;
    padding: 0;
    list-style-type: none;
  }

  a {
    text-decoration: none;
    transition-duration: 300ms;
    transition-property: opacity, color, background-color, transform, border;
    background-color: transparent;
        color: initial;
        text-decoration: none;

        &:hover, 
        &:visited, 
        &:focus {
            text-decoration: none;
    }
}

p {
        font-size: 16px;
        line-height:32px;

        @media (max-width: 548px) {
        font-size: 18px;
       }
    }

    /* span {
        font-size: 14px;

       @media (max-width: 548px) {
        font-size: 16px;
       }
    } */

    small {
        font-size: 12px;

        @media (max-width: 548px) {
        font-size: 14px;
       }
    }

    h1 {
        font-size: 38px;
        font-weight: 500;
    }

    h2 {
        font-size: 33px;
        font-weight: 400;
    }

    h3 {
        font-size: 28px;
        font-weight: 400;
    }

    h4 {
        font-size: 23px;
        font-weight: 400;
    }

    h5 {
        font-size: 18px;
        font-weight: 400;
    }

`;

export default GlobalStyles;
