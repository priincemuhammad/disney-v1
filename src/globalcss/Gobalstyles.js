import { createGlobalStyle } from "styled-components";

export const Gobalstyles = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto Mono', monospace;
    color: #fff;
}
  
  :root{
    --body-color: #040714;
    --main-color: #1cba5a; 
    --header-bg: #090b13; 
    --border-one: rgb(259, 259, 259, 0.8);
    --border-two: rgb(259, 259, 259, 0.1);
    --shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
      rgb(0 0 0 / 73%) 0px 16px 10px -10px;
      --shadow-hover: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
      rgb(0 0 0 / 72%) 0px 30px 22px -10px;
    --transitions: cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  }

  body{
    background:var(--body-color);
  }

  a{
    text-decoration: none;
  }
  li{
    list-style: none;
  }
 
  ::selection {
    color: #C2CDEC;
    background: #233554;
  }

  ::-webkit-scrollbar{
    width: 7px;
 }
 
 ::-webkit-scrollbar-track{
   border: 5px solid   var(--body-color);
 }
 
 ::-webkit-scrollbar-thumb{
    background: #495670;
   border-radius: 10px;
 }

 ::-webkit-scrollbar:horizontal{
    height:  0px;  
  }

 ::-webkit-input-placeholder{
   color: #AEACCA;
 }
 
 html{
     scroll-behavior: smooth;
 }
  
 
`;
