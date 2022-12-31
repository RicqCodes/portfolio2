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

       @media (max-width: 83em) {
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
       }
    }

*, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

body {
        /* color: #3454b4; */
        font: inherit;
        position: relative;
        font-family: "SF UI Text",  sans-serif;
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

    html,body {
        height: 100vh;
        overflow: hidden;
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
    -webkit-text-decoration: none;
    text-decoration: none;
    -webkit-transition-duration: 300ms;
    transition-duration: 300ms;
    -webkit-transition-property: opacity, color, background-color, -webkit-transform, border;
    -webkit-transition-property: opacity, color, background-color, transform, border;
    transition-property: opacity, color, background-color, transform, border;
    background-color: transparent;
}

`;

export default GlobalStyles;
